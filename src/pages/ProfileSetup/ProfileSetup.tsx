import { Link, useParams, useNavigate } from "react-router-dom";
import './profileSetup.scss';
import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { UserInt } from "../../store/context/contextInterfaces";

export const ProfileSetup = () => {
    const { userId } = useParams<{ userId: string }>();
    const navigate = useNavigate();
    const [profileImage, setProfileImage] = useState(localStorage.getItem("profileImage") || "./images/users/profile.png"); // Relative path for the default image
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [bio, setBio] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = useState<UserInt | null>(null);
  
    const fileInputRef = useRef<HTMLInputElement>(null);
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`http://localhost:5001/users/${userId}`);
          const userData = response.data;
          setUser(userData);
          setUsername(userData.username || '');
          setBio(userData.bio || '');
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
      fetchUserData();
    }, [userId]);
  
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files && event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === "string") {
            setProfileImage(reader.result);
            localStorage.setItem("profileImage", reader.result);
          }
        };
        reader.readAsDataURL(file);
      }
    };
  
    const triggerFileSelectPopup = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };
  
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
  
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match');
        return;
      }
  
      if (user) {
        const updatedUser = {
          ...user,
          username,
          password,
          bio,
          profileImage
        };
  
        try {
          const response = await axios.put(`http://localhost:5001/users/${userId}`, updatedUser);
          console.log('User updated successfully:', response.data);
          navigate(`/culture/${userId}`);
        } catch (error) {
          console.error('Error updating user:', error);
        }
      }
    };
    return (
      <div className="container-fluid">
        <div className="row bg-image">
          <div className="col-12">
            <div className="middle-section-users">
              <div className="login-container-users">
                <div className="steps-content-user">
                  <div className="engagement-content">
                    <span className="engagement-span">4</span>
                    <p className="engagement-para">Profile Setup</p>
                  </div>
                  <div className="profile-setup row">
                    <div className="profile col-5">
                      <div className="profileIcon" onClick={triggerFileSelectPopup}>
                        <img src={profileImage} alt="Profile icon" style={{ cursor: "pointer" }} />
                        <input
                          type="file"
                          accept="image/*"
                          style={{ display: "none" }}
                          ref={fileInputRef}
                          onChange={handleImageChange}
                        />
                      </div>
                    </div>
                    <div className="info-setup col-7">
                      <form onSubmit={handleSubmit} className="form-info-setup">
                        <input
                          type="text"
                          className='form-control form-input'
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                        />
                        <input
                          type="password"
                          className='form-control form-input'
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          minLength={8}
                          maxLength={12}
                          required
                        />
                        <input
                          type="password"
                          className='form-control form-input'
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        />
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <textarea
                          name="textarea"
                          className='form-control form-input'
                          placeholder="Tell us about yourself..."
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="forward-btns">
                  <Link to={`/subscription/${userId}`} className='btn btn-green'><i className="fa-solid fa-arrow-left "></i>Back</Link>
                  <button onClick={handleSubmit} className='btn btn-green'>
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