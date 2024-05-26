import Slider from '../../components/Slider/Slider';
import { useGlobalState } from '../../store/context/globalContext'
import './Artist.scss'

export const Artist = () => {
    const { movies } = useGlobalState();
    
    const getFacebookShareUrl = () => {
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent("Igor Dzambazov: Igor Dzambazov was born on July 15, 1963 in Skopje, Macedonia. He is an actor and composer, known for A Weekend of Deceased Persons (1988), Vikend na mrtovci (1990) and Uciliste za klovnovi (1987). He was previously married to Iskra Misic-Dzambazova.")}`;
        return shareUrl;
      };
    
      // Handle share button click
      const handleShareClick = () => {
        const url = getFacebookShareUrl();
        window.open(url, '_blank');
      };

    return (
        <div className="bannerImg">
            <div className="artist-container">
                <div className="artist-details">
                    <div className="imagewrapper">
                        <img src="/images/artists/Igor.Dzambazov.png" alt="Igor" />
                    </div>
                    <div className="bio-wrapper">
                        <i className="fa fa-share share-icon" onClick={handleShareClick} aria-hidden="true"></i>
                        <h2>Игор Џзамбазов</h2>
                        <p>Igor Dzambazov was born on July 15, 1963 in Skopje, Macedonia. He is an actor and composer, known for A Weekend of Deceased Persons (1988), Vikend na mrtovci (1990) and Uciliste za klovnovi (1987). He was previously married to Iskra Misic-Dzambazova.</p>
                        <button className='btn btn-green self-center'>See more</button>
                    </div>
                </div>
                <div className="artist-details-second">
                    <h4>Филмови</h4>
                    <Slider content={movies} />
                    <div className="rewards">
                        <ul>
                            <li>"Наградата за „Трајни музички вредности"</li>
                            <li>Награда за животно дело „Петре Прличко“</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

