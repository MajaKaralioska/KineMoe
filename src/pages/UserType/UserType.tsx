
import { Link, useNavigate, useParams } from 'react-router-dom'
import './usertype.scss'
import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import { dataUsers } from '../../DataUrl/dataUrl';


const UserType: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const [userType, setUserType] = useState<string>('');

  useEffect(() => {
    // Fetch the user data when the component mounts
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${dataUsers}/${userId}`);
        const userData = response.data;
        // Set the current user type
        setUserType(userData.type);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, [userId]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserType(event.target.id);
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Fetch the current user data
      const response = await axios.get(`${dataUsers}/${userId}`);
      const userData = response.data;
      // Update the user data with the selected user type
      userData.type = userType;
      // Send a PUT request to update the user data
      await axios.put(`${dataUsers}/${userId}`, userData);
      // Proceed to the next step after updating user data
      navigate(`/interests/${userId}`);
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
                <h3 className='users-header'>Join as a viewer or artist</h3>
                <form action="" className='form-users'>
                  <label htmlFor="artist" className='label'>
                    <input
                      type="checkbox"
                      id="artist"
                      className='input-user'
                      checked={userType === 'artist'}
                      onChange={handleCheckboxChange}
                    />
                    <img src="/images/icons/artist.png" alt="Artist" className='img-fluid img-artist'/>
                    Sign up as Artist
                  </label>
                  <label htmlFor="viewer" className='label'>
                    <input
                      type="checkbox"
                      id="viewer"
                      className='input-user'
                      checked={userType === 'viewer'}
                      onChange={handleCheckboxChange}
                    />
                    <img src="/images/icons/Viewer.png" alt="Viewer" className='img-fluid img-viewer'/>
                    Sign up as Viewer
                  </label>
                </form>
                <div className="forward-btns">
                  <Link to={'/register'} className='btn btn-green'><i className="fa-solid fa-arrow-left "></i>Back</Link>
                  <button className='btn btn-green' type='submit' onClick={handleFormSubmit}>Next<i className="fa-solid fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserType;

