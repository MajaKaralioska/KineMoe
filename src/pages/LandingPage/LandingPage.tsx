import Banner from "../../components/Banner/Banner"
import { Header } from "../../components/Header/Header"
import { MeetTheArtists } from "../../components/MeetTheArtists/MeetTheArtists"
import { RegisterOptions } from "../../components/RegisterOptions/RegisterOptions"
import { Rooms } from "../../components/Rooms/Rooms"

const LandingPage = () => {
    return <>
        <Header />
        <Rooms />
        <MeetTheArtists />
        <Banner images={['/images/movies/Markovski.png']} />
        <RegisterOptions/>
          </>
}

export default LandingPage