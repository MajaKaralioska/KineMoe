import { Link, useNavigate, useParams } from "react-router-dom";
import './settings.scss'
import { useEffect, useState } from "react";
import axios from "axios";
import { dataUsers } from "../../DataUrl/dataUrl";
import { useAuth } from "../../store/autxContext/authContext";


export const Settings = () => {
    const { userId } = useParams<{ userId: string }>();
    const navigate = useNavigate();
    const { login } = useAuth();
    const profileImage = localStorage.getItem("profileImage");
    const [username, setUsername] = useState<string>('');
    const [settings, setSettings] = useState<string>('');

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

    const handleSettingsSelection = (setting: string) => {
        setSettings(setting);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.get(`${dataUsers}/${userId}`);
            const userData = response.data;
            userData.settings = settings;

            await axios.put(`${dataUsers}/${userId}`, userData);

            login(userData.id);  // Update Auth Context

            console.log("Navigating to home page");
            navigate(`/home/${userId}`);
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
                                    <h3>Select your privacy settings.</h3>
                                </div>
                                <div className="para">
                                    <p className="culture-para">Choose who sees your profile.</p>
                                </div>
                                <div className="main-content">  
                                    <button className={`btn btn-settings ${settings === 'My friends' ? 'selected' : ''}`} onClick={() => handleSettingsSelection('My friends')}>My friends</button>
                                    <button className={`btn btn-settings ${settings === 'Public' ? 'selected' : ''}`} onClick={() => handleSettingsSelection('Public')}>Public</button>
                                    <button className={`btn btn-settings ${settings === 'Only me' ? 'selected' : ''}`} onClick={() => handleSettingsSelection('Only me')}>Only me</button>
                                </div>
                            </div>
                            <div className="forward-btns">
                                <Link to={`/notifications/${userId}`} className='btn btn-green'>
                                    <i className="fa-solid fa-arrow-left"></i>Back
                                </Link>
                                <button className='btn btn-green' onClick={handleSubmit}>
                                    Set my profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

