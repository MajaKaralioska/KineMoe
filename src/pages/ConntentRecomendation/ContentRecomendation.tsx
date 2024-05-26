import { Link, useNavigate, useParams } from "react-router-dom"
import './contentRecomendation.scss'
import axios from "axios";
import { useState, useEffect } from "react";
import { dataUsers } from "../../DataUrl/dataUrl";

export const ContentRecomendation = () => {
    const profileImage = localStorage.getItem("profileImage");
    const { userId } = useParams<{ userId: string }>();
    const navigate = useNavigate();
    const [nickname, setNickname] = useState<string>('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${dataUsers}/${userId}`);
                const userData = response.data;
                setNickname(userData.username || '');
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, [userId]);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    
    const handleGenresClick = (genre: string) => {
        // Toggle the selected state of the interest
        if (selectedGenres.includes(genre)) {
            setSelectedGenres(selectedGenres.filter(item => item !== genre));
        } else {
            setSelectedGenres([...selectedGenres, genre]);
        }
    };

    const handleFormSubmit = async () => {
        try {
            // Fetch the current user data
            const response = await axios.get(`${dataUsers}/${userId}`);
            const userData = response.data;

            // Update the user data with the selected interests
            userData.favoritesCategories = [...selectedGenres];

            // Send a PUT request to update the user data
            await axios.put(`${dataUsers}/${userId}`, userData);

            // Proceed to the next step after updating user data
            navigate(`/notifications/${userId}`);
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row bg-image">
                <div className="col-12">
                    <div className="middle-section-users">
                        <div className="login-container-users">
                            {profileImage && (
                                <div className="photo-container">
                                    <img src={profileImage} alt="Profile" />
                                    
                                </div>
                            )}
                            <div className="nickname">
                                <p>{nickname}</p>
                            </div>
                            <div className="steps-content-user steps-content-usercontainer">
                                <div className="engagement-content">
                                    <span className="engagement-span">6</span>
                                    <h3>Content Recomendations</h3>
                                </div>
                                <div className="categories-first-row">  
                                    <button className={`btn btn-category ${selectedGenres.includes('Action') ? 'selected' : ''}`} onClick={() => handleGenresClick('Action')}>Action</button>
                                    <button className={`btn btn-category ${selectedGenres.includes('Comedy') ? 'selected' : ''}`} onClick={() => handleGenresClick('Comedy')}>Comedy</button>
                                    <button className={`btn btn-category ${selectedGenres.includes('Drama') ? 'selected' : ''}`} onClick={() => handleGenresClick('Drama')}>Drama</button>
                                    <button className={`btn btn-category ${selectedGenres.includes('Horror') ? 'selected' : ''}`} onClick={() => handleGenresClick('Horror')}>Horror</button>
                                    <button className={`btn btn-category ${selectedGenres.includes('Science-Fiction') ? 'selected' : ''}`} onClick={() => handleGenresClick('Science-Fiction')}>Science Fiction</button>
                                </div>
                                <div className="categories-second-row">  
                                    <button className={`btn btn-category ${selectedGenres.includes('Fantasy') ? 'selected' : ''}`} onClick={() => handleGenresClick('Fantasy')}>Fantasy</button>
                                    <button className={`btn btn-category ${selectedGenres.includes('Romance') ? 'selected' : ''}`} onClick={() => handleGenresClick('Romance')}>Romance</button>
                                    <button className={`btn btn-category ${selectedGenres.includes('Thriler') ? 'selected' : ''}`} onClick={() => handleGenresClick('Thriler')}>Thriler</button>
                                    <button className={`btn btn-category ${selectedGenres.includes('Documentary') ? 'selected' : ''}`} onClick={() => handleGenresClick('Documentary')}>Documentary</button>
                                </div>
                            </div>
                            <div className="forward-btns">
                                <Link to={`/culture/${userId}`} className='btn btn-green'>
                                    <i className="fa-solid fa-arrow-left"></i>Back
                                </Link>
                                <button className='btn btn-green' onClick={handleFormSubmit}>
                                    Next<i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
