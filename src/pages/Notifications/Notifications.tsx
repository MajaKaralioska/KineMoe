import { Link, useNavigate, useParams } from "react-router-dom"
import './notifications.scss'
import { useState } from "react";
import axios from "axios";
import { dataUsers } from "../../DataUrl/dataUrl";

export const Notifications = () => {
    const { userId } = useParams<{ userId: string }>();
    const navigate = useNavigate();
    const [notificationType, setNotificationType] = useState('');

    const handleNotificationChange = (event: any) => {
        setNotificationType(event.target.value);
    };

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        try {
          // Fetch the current user data
          const response = await axios.get(`${dataUsers}/${userId}`);
          const userData = response.data;
          // Update the user data with the selected user type
          userData.notifications = notificationType;
          // Send a PUT request to update the user data
          await axios.put(`${dataUsers}/${userId}`, userData);
          // Proceed to the next step after updating user data
          navigate(`/settings/${userId}`);
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
                            <div className="notifications-header">
                                <h2>Stay in the Loop!</h2>
                            </div>
                            <div className="engagement-content">
                                <span className="engagement-span">7</span>
                                <p>Set your preferences for updates and announcements. Loop!</p>
                            </div>

                            <div className="checkboxes-notifications">
                                <form>
                                    <div className="checkboxes-forms">
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="email"
                                                checked={notificationType === 'email'}
                                                onChange={handleNotificationChange}
                                                className="input-notification"
                                            />
                                            Sign up for E-mail Notifications
                                        </label>
                                    </div>
                                    <div className="checkboxes-forms">
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="app"
                                                checked={notificationType === 'app'}
                                                onChange={handleNotificationChange}
                                                className="input-notification"
                                            />
                                            App Push Notifications
                                        </label>
                                    </div>
                                    <div className="checkboxes-forms">
                                        <label>
                                            <input
                                                type="checkbox"
                                                value="none"
                                                checked={notificationType === 'none'}
                                                onChange={handleNotificationChange}
                                                className="input-notification"
                                            />
                                            No Notifications
                                        </label>
                                    </div>
                                </form>
                            </div>
                            <div className="forward-btns">
                                <Link to={`/contentRecomendation/${userId}`} className='btn btn-green'>
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


