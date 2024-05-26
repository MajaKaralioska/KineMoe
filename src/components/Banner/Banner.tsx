import { ImagesComponent } from "../Images/Images"

interface BannerProps {
    images: string[];
}

const Banner = ({ images } : BannerProps) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <ImagesComponent images={images} />
                </div>
            </div>
        </div>
    );
}

export default Banner;
