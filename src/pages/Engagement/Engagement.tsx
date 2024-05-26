import { Link, useNavigate, useParams } from "react-router-dom"
import './engagement.scss'
import { useState } from "react";
import axios from "axios";
import { dataUsers } from "../../DataUrl/dataUrl";

export const Engagement = () => {
    const { userId } = useParams<{ userId: string }>();
    const navigate = useNavigate();
    const [tutorialCompleted, setTutorialCompleted] = useState(false);

    const handleShowAroundClick = () => {
        setTutorialCompleted(true); // Set tutorialCompleted to true
    };

    const handleDiveIntoClick = () => {
        setTutorialCompleted(false); // Set tutorialCompleted to false
    };

    const handleFormSubmit = async () => {
        try {
            // Fetch the current user data
            const response = await axios.get(`${dataUsers}/${userId}`);
            const userData = response.data;

            // Update the user data with the selected interests
            userData.tutorial = tutorialCompleted;

            // Send a PUT request to update the user data
            await axios.put(`${dataUsers}/${userId}`, userData);

            // Proceed to the next step after updating user data
            navigate(`/subscription/${userId}`);
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    return <div className="container-fluid">
    <div className="row bg-image">
        <div className="col-12">
            <div className="middle-section-users">
                <div className="login-container-users">
                        <div className="steps-content">
                            <div className="engagement-content">
                                <span className="engagement-span">2</span>
                                <p className="engagement-para">How do you wish to engage with Kinemoe?</p>
                            </div>
                            <div className="interests">
                              <div className="first-row">
                                <button onClick={handleShowAroundClick} className='btn btn-interest'><i className="fa-regular fa-eye btn-icon"></i>Show me around</button>
                                <button onClick={handleDiveIntoClick} className='btn btn-interest'><i className="fa-solid fa-users-line btn-icon"></i>Dive right into and explore</button>
                             </div>
                            </div>
                            <div className="forward-btns">
                                <Link to={`/interests/${userId}`} className='btn btn-green'><i className="fa-solid fa-arrow-left "></i>Back</Link>
                                <button onClick={handleFormSubmit} className='btn btn-green'>Next<i className="fa-solid fa-arrow-right"></i></button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
}