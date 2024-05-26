import { Navigate, Route, Routes, useParams } from "react-router-dom"
import Login from "../../pages/Login/Login"
import Register from "../../pages/Register/Register"
import LandingPage from "../../pages/LandingPage/LandingPage"
import { Interests } from "../../pages/Interests/Interests"
import { Engagement } from "../../pages/Engagement/Engagement"
import { Subscription } from "../../pages/Subscription/Subscription"
import { ProfileSetup } from "../../pages/ProfileSetup/ProfileSetup"
import { Culture } from "../../pages/Culture/Culture"
import { ContentRecomendation } from "../../pages/ConntentRecomendation/ContentRecomendation"
import { Notifications } from "../../pages/Notifications/Notifications"
import { Settings } from "../../pages/Settings/Settings"
import { useGlobalState } from "../../store/context/globalContext"
import { UserInt } from "../../store/context/contextInterfaces"
import { useEffect, useState } from "react"
import { dataUsers } from "../../DataUrl/dataUrl"
import axios from "axios"
import UserType from "../../pages/UserType/UserType"
import { useAuth } from "../../store/autxContext/authContext"


export const NonAutorisedRoutes = () => {
    const { id } = useParams<{ id: string }>();
    const{users } = useGlobalState(); 
    const [user, setUser] = useState<UserInt | null>(null);
    const { isAuthenticated } = useAuth();

    // Function to fetch updated restaurant data after adding a review
    const fetchUpdatedUserdsData = async () => {
        try {
            const response = await axios.get<UserInt>(dataUsers);
            const updatedUser = response.data;
            setUser(updatedUser);
            // Update the user state with fetched data
        }
        catch (error) {
            console.error('Error fetching updated user data:', error);
        }
    };
    if (isAuthenticated) {
        return <Navigate to={`/home/${id}`} />;
    }
    return <>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register onSuccess={fetchUpdatedUserdsData} />} />
            <Route path='/usertype/:userId' element={<UserType />} />
            <Route path='/interests/:userId' element={<Interests />} />
            <Route path='/engagement/:userId' element={<Engagement />} />
            <Route path='/subscription/:userId' element={<Subscription />} />
            <Route path="/profilesetup/:userId" element={<ProfileSetup />} />
            <Route path="/culture/:userId" element={<Culture />} />
            <Route path="/contentRecomendation/:userId" element={<ContentRecomendation />} />
            <Route path="/notifications/:userId" element={<Notifications />} />
            <Route path="/settings/:userId" element={<Settings />} />
            <Route path="*" element={<Navigate to="/login"/>} />
        </Routes>
    </>
}