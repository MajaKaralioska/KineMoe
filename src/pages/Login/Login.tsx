import { Link, useNavigate } from 'react-router-dom'
import { ImagesComponent } from '../../components/Images/Images'
import './login.scss'
// const Login = () => {
//     return <div className="container-fluid">
//         <div className="row bg-image">
//             <div className="col-12">
//                 <div className="middle-section">
//                     <div className="login-container">
//                         <div className="kinemoeImg col-6">
//                             {/* <ImagesComponent images={['./images/general/Login.png']} className='img-fluid' /> */}
//                             <img src="./images/general/Login.png" alt="" className='img-fluid' />
//                         </div>
//                         <div className="login-content col-6">
//                          <div className="login-wrap px-4 text-center">
//                             <div className="login-header py-3">
//                                 <h4>Welcome</h4>
//                                 <p>Join us!</p>
//                             </div>
//                             <form action="">
//                                 <input type="email" placeholder="Email address" className="input" />
//                                 <input type="password" placeholder="Password" className="input"/>
//                                 <button className="btn-green">Log in</button>
//                            </form>
//                             </div>
//                             <div className="hr-wrap">
//                                 <span className='border-top'></span> <span className='span-self'>or</span> <span className='border-top'></span>
//                             </div>

//                             <div className="login-accounts">
//                             <Link to='https://www.facebook.com' className='btn btn-rounded login-btn text-center'>
//                                     <i className="fab fa-facebook social-icon" style={{ color: '#2f5674' }}></i>
//                                     <span className='social-span'>Log in with Facebook</span>
//                              </Link>
//                                 <Link to='https:/www.google.com' className='btn btn-rounded login-btn text-center'>
//                                     <i className="fab fa-google social-icon" style={{ color: '#2f5674' }}></i>
//                                     <span className='social-span'>Log in with Google</span>
//                                 </Link>
//                                 <Link to='https:/www.apple.com' className='btn btn-rounded login-btn text-center'>
//                                     <i className="fab fa-apple social-icon" style={{ color: '#2f5674' }}></i>
//                                     <span className='social-span'>Log in with Apple</span>
//                                 </Link>
//                                 <Link to={'/register'} className='btn btn-rounded create-btn'>Create new account</Link>
//                             </div>

//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     </div>
// }

// export default Login
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../store/autxContext/authContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      // Fetch user data from the /users endpoint
      const response = await axios.get('http://localhost:5001/users');
      const users = response.data;

      // Find the user with the entered email
      const { email, password } = formData;
      const user = users.find((u: any) => u.email === email);

      if (user && user.password === password) {
        // Successful login
        // Save user data to localStorage
        localStorage.setItem('loggedUser', user.id); // Set user id
        localStorage.setItem('user', JSON.stringify(user));
        login(user);
        // Redirect to the homepage
        navigate(`/home/${user.id}`);
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Error logging in');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="container-fluid">
      <div className="row bg-image">
        <div className="col-12">
          <div className="middle-section">
            <div className="login-container">
              <div className="kinemoeImg col-6">
                <img src="./images/general/Login.png" alt="" className="img-fluid" />
              </div>
              <div className="login-content col-6">
                <div className="login-wrap px-4 text-center">
                  <div className="login-header py-3">
                    <h4>Welcome</h4>
                    <p>Join us!</p>
                  </div>
                  <form onSubmit={handleLogin}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className="input"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="input"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button type="submit" className="btn-green">
                      Log in
                    </button>
                  </form>
                </div>
                <div className="hr-wrap">
                  <span className="border-top"></span> <span className="span-self">or</span>{' '}
                  <span className="border-top"></span>
                </div>
                <div className="login-accounts">
                  <Link to="https://www.facebook.com" className="btn btn-rounded login-btn text-center">
                    <i className="fab fa-facebook social-icon" style={{ color: '#2f5674' }}></i>
                    <span className="social-span">Log in with Facebook</span>
                  </Link>
                  <Link to="https:/www.google.com" className="btn btn-rounded login-btn text-center">
                    <i className="fab fa-google social-icon" style={{ color: '#2f5674' }}></i>
                    <span className="social-span">Log in with Google</span>
                  </Link>
                  <Link to="https:/www.apple.com" className="btn btn-rounded login-btn text-center">
                    <i className="fab fa-apple social-icon" style={{ color: '#2f5674' }}></i>
                    <span className="social-span">Log in with Apple</span>
                  </Link>
                  <Link to={'/register'} className="btn btn-rounded create-btn">
                    Create new account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
