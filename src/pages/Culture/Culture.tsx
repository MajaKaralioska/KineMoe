import { Link, useNavigate, useParams } from "react-router-dom"
import './culture.scss'
import { useEffect, useState } from "react";
import axios from "axios";
import { dataUsers } from "../../DataUrl/dataUrl";

export const Culture = () => {
    const { userId } = useParams<{ userId: string }>();
    const navigate = useNavigate();
    const profileImage = localStorage.getItem("profileImage");
    const [selectedCulture, setSelectedCulture] = useState<string | null>(null);
    const [username, setUsername] = useState<string>('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`${dataUsers}/${userId}`);
                const userData = response.data;
                setUsername(userData.username || '');
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, [userId]);

    const handleCultureSelection = (culture: string) => {
        setSelectedCulture(culture);
    };
    const handleSubmit = async () => {
        try {
            // Fetch current user data
            const response = await axios.get(`${dataUsers}/${userId}`);
            const userData = response.data;
    
            // Update only the 'cultures' property
            userData.cultures = selectedCulture;
    
            // Send PUT request to update user profile with new cultures
            await axios.put(`${dataUsers}/${userId}`, userData);
    
            // Navigate to the next page
            navigate(`/contentRecomendation/${userId}`);
        } catch (error) {
            console.error('Error updating user profile:', error);
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
                            <p>{username}</p>
                            </div>
                            <div className="steps-content-user steps-content-usercontainer">
                                <div className="engagement-content">
                                    <span className="engagement-span">5</span>
                                    <h3>Which cultures resonate with you?</h3>
                                </div>
                                <div className="para">
                                    <p className="culture-para">Your choices help us to create content just for you.</p>
                                </div>
                                <div className="main-content">  
                                    <button className={`btn btn-culture ${selectedCulture === 'Macedonian' ? 'selected' : ''}`} onClick={() => handleCultureSelection('Macedonian')}>
                                        Macedonian
                                    </button>
                                    <button className={`btn btn-culture ${selectedCulture === 'Balkan' ? 'selected' : ''}`} onClick={() => handleCultureSelection('Balkan')}>Balkan</button>
                                    <button className={`btn btn-culture ${selectedCulture === 'European' ? 'selected' : ''}`} onClick={() => handleCultureSelection('European')}>European</button>
                                    <button className={`btn btn-culture ${selectedCulture === 'Mediterranean' ? 'selected' : ''}`} onClick={() => handleCultureSelection('Mediterranean')}>Mediterranean</button>
                                    <button className={`btn btn-culture ${selectedCulture === 'Global' ? 'selected' : ''}`} onClick={() => handleCultureSelection('Global')}>Global</button>
                                </div>
                            </div>
                            <div className="forward-btns">
                                <Link to={`/profilesetup/${userId}`} className='btn btn-green'>
                                    <i className="fa-solid fa-arrow-left"></i>Back
                                </Link>
                                <button className='btn btn-green' onClick={handleSubmit}>
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

