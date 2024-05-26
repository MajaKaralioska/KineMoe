import { Link, useNavigate, useParams } from "react-router-dom"
import './interests.scss'
import { useState } from "react";
import axios from "axios";
import { dataUsers } from "../../DataUrl/dataUrl";

export 
const Interests = () => {
    const { userId } = useParams<{ userId: string }>();
    const navigate = useNavigate();

    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    
    const handleInterestClick = (interest: string) => {
        // Toggle the selected state of the interest
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter(item => item !== interest));
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
    };

    const handleFormSubmit = async () => {
        try {
            // Fetch the current user data
            const response = await axios.get(`${dataUsers}/${userId}`);
            const userData = response.data;

            // Update the user data with the selected interests
            userData.interests = [...selectedInterests];

            // Send a PUT request to update the user data
            await axios.put(`${dataUsers}/${userId}`, userData);

            // Proceed to the next step after updating user data
            navigate(`/engagement/${userId}`);
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
                            <div className="steps-content">
                                <div className="interests-content">
                                    <span className="interests-span">1</span>
                                    <p className="interests-para">Tell us what moves you. Select your interests to tailor your Kinemoe universe.</p>
                                </div>
                                <div className="interests">
                                    <div className="first-row">
                                        <button className={`btn btn-interest ${selectedInterests.includes('Cinema') ? 'selected' : ''}`} onClick={() => handleInterestClick('Cinema')}>Cinema</button>
                                        <button className={`btn btn-interest ${selectedInterests.includes('Visual Arts') ? 'selected' : ''}`} onClick={() => handleInterestClick('Visual Arts')}>Visual Arts</button>
                                        <button className={`btn btn-interest ${selectedInterests.includes('Dance') ? 'selected' : ''}`} onClick={() => handleInterestClick('Dance')}>Dance</button>
                                        <button className={`btn btn-interest ${selectedInterests.includes('Theatre') ? 'selected' : ''}`} onClick={() => handleInterestClick('Theatre')}>Theatre</button>
                                    </div>
                                    <div className="second-row">
                                        <button className={`btn btn-interest ${selectedInterests.includes('Music') ? 'selected' : ''}`} onClick={() => handleInterestClick('Music')}>Music</button>
                                        <button className={`btn btn-interest ${selectedInterests.includes('Literature') ? 'selected' : ''}`} onClick={() => handleInterestClick('Literature')}>Literature</button>
                                        <button className={`btn btn-interest ${selectedInterests.includes('More options') ? 'selected' : ''}`} onClick={() => handleInterestClick('More options')}>More options</button>
                                    </div>
                                </div>
                                <div className="forward-btns">
                                    <Link to={`/usertype/${userId}`} className='btn btn-green'><i className="fa-solid fa-arrow-left "></i>Back</Link>
                                    <button className='btn btn-green' onClick={handleFormSubmit}>Next<i className="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Interests;


