import { ImagesComponent } from '../Images/Images'
import './Rooms.scss'

export const Rooms = () => {
    return <div className='rooms-container container-fluid py-4'>
        <div className="rooms-first-row ">
            <div className="room">
                <div className="movies">
                    <h4>Movies room</h4>
                    <ImagesComponent images={[
                            "./images/movies/JuzniVetar.png",
                            "./images/movies/Balkankan.png",
                            "./images/movies/Iluzija.png",
                            "./images/movies/KinoLjubov.png",
                            "./images/movies/Lazar.png"
                        ]} />
                </div>
            </div>
            <div className="room">
                <div className="kids">
                    <h4>Kids room</h4>
                    <ImagesComponent images={[
                        "./images/movies/DajteMuzika.png",
                        "./images/movies/BushavaAzbuka.png",
                        "./images/movies/NasheMaalo.png",
                        "./images/movies/Fifi.png",
                        "./images/movies/ZlatnoSlavejche.png"
                    ]} />
                </div>
            </div>
            <div className="room">
                <div className="documentary">
                    <h4>Doc room</h4>
                    <ImagesComponent images={[
                        "./images/movies/JazSemfrenk.png",
                        "./images/movies/KinoLjubov.png",
                        "./images/movies/MedenaZemja.png",
                        "./images/movies/Vrba.png",
                        "./images/movies/Zrtva.png"
                    ]} />
                </div>
            </div>
        </div>
        <div className="rooms-second-row">
        <div className="room">
                <div className="podcasts">
                    <h4>Podcasts room</h4>
                    <ImagesComponent images={[
                        "./images/movies/Objektivno.png",
                        "./images/movies/Podcast.png",
                        "./images/movies/Repertoar.png",
                        "./images/movies/TheLiberationOfSkopje.png",
                        "./images/movies/Megafon.png"
                    ]} />
                </div>
            </div>
            <div className="room">
                <div className="series">
                    <h4>Series room</h4>
                    <ImagesComponent images={[
                        "./images/movies/JuzniVetar.png",
                        "./images/movies/ZonaZamfirova.png",
                        "./images/movies/BistraVoda.png",
                        "./images/movies/Ambulance.png",
                        "./images/movies/JuzniVetarSerija.png"
                    ]} />
                </div>
         </div>
        </div>
    </div>
}