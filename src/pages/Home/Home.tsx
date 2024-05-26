import { useNavigate } from "react-router-dom"
import { useAuth } from "../../store/autxContext/authContext";
import Banner from "../../components/Banner/Banner";
import Slider from "../../components/Slider/Slider";
import { useGlobalState } from "../../store/context/globalContext";
import './home.scss'
import Carousel from "../../components/Carousel/Carousel";
import { ImagesComponent } from "../../components/Images/Images";

const Home = () => {
    const { movies, podcasts, kids } = useGlobalState();
    return (
        <><div className="movies-wrapper">
            <div className="movies-cont">
                <div className="wrap">
                 <ImagesComponent images={[
                            "/images/movies/JuzniVetar.png",
                          ]} />
                 </div>
                <div className="wrap">
                <ImagesComponent images={[
                            "/images/movies/KinoLjubov.png",
                        ]} />
                </div>
             </div>
        </div>
            <Carousel/>      
        <div className="homepageContent">
            <h4>Popular Movies</h4>
            <Slider content={movies}/>
            <h4>New Releases</h4>
            <Slider content={movies}/>
            <h4>Comming-soon</h4>
            <Banner images={['/images/general/peakyBlinders.png']}/>
            <h4>Our recomendation</h4> 
            <Slider content={movies}/>
            <Banner images={['/images/general/vtorBannerHomePage.png']}/>
            <h4>Podcasts</h4>
            <Slider content={podcasts}/>
            <h4>Kids</h4>
            <Slider content={kids} />

        </div>
            
        </>
    );
};

export default Home;