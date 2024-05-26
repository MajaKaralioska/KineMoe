
interface ImagesProps {
    images: string[];
    className?: string;
}

export const ImagesComponent: React.FC<ImagesProps> = ({ images }) => {
    return (
        <div className="img-container">
            {images.map((src, index) => (
                <img key={index} src={src} alt="" className="rooms-img" />
            ))}
        </div>
    );
}

