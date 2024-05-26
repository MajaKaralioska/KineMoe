import { Link, useNavigate } from "react-router-dom";
import './register.scss'
import React from "react";
import { dataUsers } from "../../DataUrl/dataUrl";
import axios from "axios";
import { generateUserId, useInput } from "../../globalFunctions/globalFunctions";

export interface FunctionProps{
    onSuccess: () => Promise<void>;
}

const Register: React.FC<FunctionProps> = ({onSuccess}) => {
    const emailInput = useInput({ initialValue: '' })
    const passwordInput = useInput({initialValue: ''})
 
    let navigate = useNavigate();
   
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userId = generateUserId()
        try {
            // Create a new user object
            const newUser = {
                id: userId ,
                username: '', // Add the username field
                fullname: '', // Add the fullname field
                email: emailInput.value,
                password: passwordInput.value,
                type: '', // Add the type field
                bio: '', // Add the bio field
                interests: [], // Add the interests field
                tutorial: false, // Add the tutorial field
                subscription_type: '', // Add the subscription_type field
                cultures: '', // Add the cultures field
                created_at: '', // Add the created_at field
                favuritesCategories: [], // Add the favuritesCategories field
                favouriteMovies: [] // Add the favouriteMovies field
            };
    
            // Send the new user data to the server
            await axios.post(dataUsers, newUser);
    
            // Reset form inputs
            emailInput.handleReset();
            passwordInput.handleReset();

            onSuccess()
    
            // After successfully creating the user, navigate to UserType with the userId
            navigate(`/usertype/${newUser.id}`);
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };
    
    
    
    return <div className="container-fluid">
    <div className="row bg-image">
        <div className="col-12">
            <div className="middle-section">
                <div className="login-container">
                    <div className="kinemoeImg col-6">
                        {/* <ImagesComponent images={['./images/general/Login.png']} className='img-fluid' /> */}
                        <img src="./images/general/Login.png" alt="" className='img-fluid' />
                    </div>
                    <div className="login-content col-6">
                     <div className="login-wrap px-4 text-center">
                        <div className="login-header pt-3">
                            <h4 className="py-4">Create your account</h4>
                        </div>                       
                       <div className="signup-accounts">
                           <Link to='https://www.facebook.com' className='btn btn-rounded login-btn text-center'>
                                <i className="fab fa-facebook social-icon" style={{ color: '#2f5674' }}></i>
                                <span className='social-span'>Sign up with Facebook</span>
                            </Link>
                            <Link to='https:/www.google.com' className='btn btn-rounded login-btn text-center'>
                                <i className="fab fa-google social-icon" style={{ color: '#2f5674' }}></i>
                                <span className='social-span'>Sign up with Google</span>
                            </Link>
                            <Link to='https:/www.apple.com' className='btn btn-rounded login-btn text-center'>
                                <i className="fab fa-apple social-icon" style={{ color: '#2f5674' }}></i>
                                <span className='social-span'>Sign up with Apple</span>
                            </Link>
                        </div>
                        <div className="hr-wrap-register">
                            <span className='border-top'></span> <span className='span-self'>or</span> <span className='border-top'></span>
                        </div>
                        <form action="" onSubmit={handleFormSubmit}>
                             <input
                               type="email"
                               placeholder="Email address"
                               className="input"
                               value={emailInput.value}
                               onChange={emailInput.onChange}
                               />
                             <input
                                type="password"
                                placeholder="Password"
                                className="input"
                                value={passwordInput.value}
                                onChange={passwordInput.onChange}
                            />
                             <button className="btn register-btn btn-green" type="submit">Register</button>
                       </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
}

export default Register