import Carousel from "../../components/Carousel/Carousel"
import CategoryDropdown from "../../components/CategoryDropdown/CategoryDropdown";
import Slider from "../../components/Slider/Slider";
import { useGlobalState } from "../../store/context/globalContext";
import './Movies.scss'

const Movies = () => {
    const { movies, categories } = useGlobalState();
    const actionMovies = movies.filter(movie => movie.genres.includes('Action'));
    const comedyMovies = movies.filter(movie => movie.genres.includes('Comedy'));
    const horrorMovies = movies.filter(movie => movie.genres.includes('Horror'));
    const dramaMovies = movies.filter(movie => movie.genres.includes('Drama'));
    const historyMovies = movies.filter(movie => movie.genres.includes('History'))
    return <>
        <div className="movies-room-header">
            <div className="movies-room-header-h2">
                <h2>Movies Room</h2>
            </div>
            <CategoryDropdown movies={"Movies"} series={"Series"} podcatsts={"Podcasts"} kids={"Kids"}  />
        </div>
        
        <Carousel />
        <div className="moviesContent">
            <h4>Popular</h4>
            <Slider content={movies} />
            <h4>Action</h4>
            <Slider content={actionMovies} />
            <h4>Comedy</h4>
            <Slider content={comedyMovies} />
            <h4>Horror</h4>
            <Slider content={horrorMovies} />
            <h4>Drama</h4>
            <Slider content={dramaMovies} />
            <h4>History</h4>
            <Slider content={historyMovies} />
            <div className="pagination">
                <button className="btn btn-pagination"> Show more</button>
            </div>
        </div>
    </>
}

export default Movies