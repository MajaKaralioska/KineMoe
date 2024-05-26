import { Link, useNavigate, useParams } from "react-router-dom"
import './subscription.scss'
import { RegisterOptions } from "../../components/RegisterOptions/RegisterOptions"
import { useState } from "react";
import axios from "axios";
import { dataUsers } from "../../DataUrl/dataUrl";

export const Subscription = () => {
    const { userId } = useParams<{ userId: string }>();
    const navigate = useNavigate();
    const [subscriptionType, setSubscriptionType] = useState<string>('');

    // Function to handle the registration for "Watch with ads" subscription
    const handleWatchWithAdsRegistration = () => {
        setSubscriptionType('free');
    };

    // Function to handle the registration for "Pay to watch" subscription
    const handlePayToWatchRegistration = () => {
        setSubscriptionType('pay');
    };

    // Function to handle the registration for "Engage and receive points" subscription
    const handleEngageAndReceivePointsRegistration = () => {
        setSubscriptionType('points');
    };

    const handleFormSubmit = async () => {
        try {
            // Fetch the current user data
            const response = await axios.get(`${dataUsers}/${userId}`);
            const userData = response.data;

            // Update the user data with the selected interests
            userData.subscription_type = subscriptionType;

            // Send a PUT request to update the user data
            await axios.put(`${dataUsers}/${userId}`, userData);

            // Proceed to the next step after updating user data
            navigate(`/profilesetup/${userId}`);
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
                                <div className="engagement-content">
                                    <span className="engagement-span">3</span>
                                    <p className="engagement-para">How do you wish to engage with Kinemoe?</p>
                                </div>
                                <div className="subscription-options">
                                    <div className="row options-wrapper">
                                        <div className="col-md-4 align-self-end shadow mb-3">
                                            <div className="register">
                                                <div className="register-header">
                                                    <h5>Watch with ads</h5>
                                                </div>
                                                <p className="paraFree">Free</p>
                                                <div className="options">
                                                    <p>Access to Vast Library</p>
                                                    <p>Unlimited Streaming</p>
                                                    <p>Multiple Devices</p>
                                                    <p>No subscription fee</p>
                                                </div>
                                                <button className="btn-green" onClick={handleWatchWithAdsRegistration}>Register</button>
                                            </div>
                                        </div>
                                        <div className="col-md-4 shadow mb-3">
                                            <div className="register">
                                                <div className="optimal-choise">
                                                    <h5>Optimal Choice</h5>
                                                </div>
                                                <div className="register-header">
                                                    <h5>Pay to watch</h5>
                                                </div>
                                                <p className="paraFree">499den/month</p>
                                                <div className="options">
                                                    <p>Access to Vast Library</p>
                                                    <p>Unlimited Streaming</p>
                                                    <p>Multiple Devices</p>
                                                    <p>Watch without ads</p>
                                                    <p>Offline viewing</p>
                                                </div>
                                                <button className="btn-green" onClick={handlePayToWatchRegistration}>Register</button>
                                            </div>
                                        </div>
                                        <div className="col-md-4 align-self-end shadow mb-3">
                                            <div className="register">
                                                <div className="register-header">
                                                    <h5>Engage and receive points</h5>
                                                </div>
                                                <p className="paraFree">Watch with points</p>
                                                <div className="options">
                                                    <p>Earn points when you engage</p>
                                                    <p>Claim rewards with earned points</p>
                                                    <p className='pb-4'>No subscription fee</p>
                                                </div>
                                                <button className="btn-green" onClick={handleEngageAndReceivePointsRegistration}>Register</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="forward-btns">
                                    <Link to={`/engagement/${userId}`} className='btn btn-green'><i className="fa-solid fa-arrow-left "></i>Back</Link>
                                    <button onClick={handleFormSubmit} className='btn btn-green'>Next<i className="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;