import { Link, useParams } from "react-router-dom";
import { useGlobalState } from "../../store/context/globalContext";

export const PodcastsOverview = () => {
    const { podcasts } = useGlobalState();
  const { podcastId, userId } = useParams<{ podcastId: string;  userId: string}>();
  
    // Find the media by ID in all categories
    
    const podcast = podcasts.find((podcast) => podcast.id === podcastId);

  
    if (!podcast) {
      return <div>Media not found</div>;
    }
    return (
      <div className="bannerImg">
            <div className="item-overview-container">
              <div className="item-overview-content">
                    <div className="overview-wrap">
                     <div className="overview-details">
                            <h1>{podcast.title}</h1>
                            <p className='media-para'>{podcast.description}</p>
                            <span className='media-span'>See more</span>
                          <div className="overview-options">
                          <Link to={`/watch/${userId}`} className='btn btn-green btn-watch'> <i className="fa fa-play play" aria-hidden="true"></i>  Гледај</Link>
                                  <i className="fa-regular fa-heart ft-icon"></i>
                                  <i className="fa-solid fa-plus ft-icon"></i>
                                <i className="fa-regular fa-share-from-square ft-icon"></i>
                                <i className="fa-solid fa-volume-high volume"></i>
                            </div>
                      </div>      
                    <div className="overview-image">
                      <img src={podcast.image} alt={podcast.title} />
                    </div>
                    </div>  
                </div>
        </div>
      </div>
    );
  };