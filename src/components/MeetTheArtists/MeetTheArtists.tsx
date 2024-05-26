import { ImagesComponent } from "../Images/Images"
import './MeetTheArtists.scss'

export const MeetTheArtists = () => {
    return <div className="artists-container container-fluid">
         <div className="artists-header">
            <h2>Meet the artists</h2>
        </div>
        <div className="artists row">
            <div className="artist col-md-4 col-6">
               <ImagesComponent images={["/images/artists/Igor.Dzambazov.png"]}/>
            </div>
            <div className="artist col-md-4 col-6">
               <ImagesComponent images={["/images/artists/Rade.Sherbedzija.png"]} />
            </div>
            <div className="artist col-md-4 col-6">
                 <ImagesComponent images={["/images/artists/Toni.Mihajlovski.png"]} />
            </div>
            <div className="artist-non-desctop-visible col-6">
                 <ImagesComponent images={["/images/artists/Sashko.Kocev.png"]} />
            </div>
        </div>
    </div>
}