import { Link, useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../store/autxContext/authContext";
import { useState } from "react";
import './Menu.scss'

export const Menu = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const logOutUser = () => {
        logout();
        navigate('/login');
    };
    const { userId } = useParams<{ userId: string }>();
    const [showDropdown, setShowDropdown] = useState(false);
    return <>
         <div className="menu">
                <Link to={`/profile/${userId}`} className='profile-page-link'><img src="/images/icons/profileClear.png" alt="profile" />
                </Link>
                <Link to={`/home/${userId}`} className='home-page-link'><img src="/images/icons/home.png" alt="home" /></Link>
                <button className="btn rooms-page-link"  onClick={() => setShowDropdown(!showDropdown)}>
                    <img src="/images/icons/rooms.png" alt="rooms" />
                </button>
                <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
                    <Link to={`/movies/${userId}`} className="dropdown-item"> <img src="/images/icons/moviesIcon.png" alt="" />  </Link>
                    <Link to={'#'} className="dropdown-item" ><img src="/images/icons/seriesIcon.png" alt="" /></Link>
                    <Link to={'#'} className="dropdown-item"><img src="/images/icons/podcastsIcon.png" alt="" /></Link>
                    <Link to={'#'} className="dropdown-item"><img src="/images/icons/kidsIcon.png" alt="" /></Link>
                </div>
                <Link to={`/comunity/${userId}`} className='chat-page-link'><img src="/images/icons/chat.png" alt="rooms" /></Link>
                <Link to={'#'} className='mt-0 movieHall-page-link'> <img src="/images/icons/camera.png" alt="camera" /></Link>
                <Link to={'#'} className='settings-page-link'>  <img src="/images/icons/settings.png" alt="settings" /></Link>
                <button className='btn btn-dark logOut' onClick={logOutUser}>Logout</button>
            </div>
    </>
}