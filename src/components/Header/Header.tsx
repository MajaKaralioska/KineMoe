import { Link } from 'react-router-dom';
import './Header.scss'
export const Header = () => {
    return (
        <div className="bannerImg">
            <div className="logo">
                <img src="./images/logo/logo.png" alt="logoimg" />
            </div>
            <div className="header-content">
                <h1>explore engage & express youself</h1>
                <p>Watch, learn, colaborate beyound the screen</p>
            </div>
            <div className="singup">
                <Link to={'/login'} className="signUpbtn btn">Sign Up / Log In</Link>
            </div>
            <div className="images-content">
                <div className="image-wrapper first-content">
                   <img src="./images/movies/Repertoar.png" alt="image1" className='img img-one' />
                   <div className="imdb-content">
                        <span className='span-btn'>imdb</span>
                        <span className='span-imdb'>4.5/</span>
                        <span>10</span>
                   </div>
                </div>
                <div className="image-wrapper second-content">
                   <img src="./images/movies/ZonaZamfirova.png" alt="image1" className='img img-two' />
                   <div className="imdb-content">
                        <span className='span-btn'>imdb</span>
                        <span className='span-imdb'>4.5/</span>
                        <span>10</span>
                   </div>
                </div>
                <div className="image-wrapper third-content">
                  <img src="./images/movies/JuzniVetar.png" alt="image1" className=' img img-three' />
                   <div className="imdb-content">
                        <span className='span-btn'>imdb</span>
                        <span className='span-imdb'>8.1/</span>
                        <span>10</span>
                   </div>
                </div>
                <div className="image-wrapper">
                <img src="./images/movies/TheThirdHalf.png" alt="image1" className='img img-four' />
                   <div className="imdb-content">
                        <span className='span-btn'>imdb</span>
                        <span className='span-imdb'>6.4/</span>
                        <span>10</span>
                   </div>
                </div>
                <div className="image-wrapper third-content">
                <img src="./images/movies/Sisterhood.png" alt="image1" className='img img-five' />
                   <div className="imdb-content">
                        <span className='span-btn'>imdb</span>
                        <span className='span-imdb'>7.7/</span>
                        <span>10</span>
                   </div>
                </div>
                <div className="image-wrapper second-content">
                <img src="./images/movies/Balkankan.png" alt="image1" className='img img-six' />
                   <div className="imdb-content">
                        <span className='span-btn'>imdb</span>
                        <span className='span-imdb'>7.7/</span>
                        <span>10</span>
                   </div>
                </div>
                <div className="image-wrapper first-content">
                <img src="./images/movies/DajteMuzika.png" alt="image1" className='img img-seven'/>
                   <div className="imdb-content">
                        <span className='span-btn'>imdb</span>
                        <span className='span-imdb'>45/</span>
                        <span>10</span>
                   </div>
                </div>
            </div>
        </div>
    );
}
