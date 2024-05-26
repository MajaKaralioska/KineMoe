import { Navigate, Route, Routes, useParams } from "react-router-dom"
import Home from "../../pages/Home/Home"
import Movies from "../../pages/Movies/Movies"
import { useAuth } from "../../store/autxContext/authContext";
import { Search } from "../../pages/Search/Search";
import { MovieOverview } from "../../pages/MovieOverview/MovieOverview";
import { PodcastsOverview } from "../../pages/PodcastsOverview/PodcastsOverview";
import { Artist } from "../../pages/Artist/Artist";
import { Community} from "../../pages/Comunity/Comunity";
import { Comments } from "../../pages/Comments/Comments";
import { Watch } from "../../pages/Watch/Watch";

export const AutorisedRoutes = () => {
    const { userId, movieId, podcastsId } = useParams<{ userId: string; movieId: string;  podcastsId: string}>();
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }


    return <>
        <Routes>
            <Route path="/home/:userId" element={<Home />} />
            <Route path="/movies/:userId" element={<Movies />} />
            <Route path="/search/:userId" element={<Search />} />
            <Route path="/movieOverview/:movieId" element={<MovieOverview />} />
            <Route path="/podcastsOverview/:podcastId" element={<PodcastsOverview />} />
            <Route path="/artist" element={<Artist />}></Route>
            <Route path="/comunity/:userId" element={<Community />}></Route>
            <Route path="/comments/:userId" element={<Comments />}></Route>
            <Route path="/watch/:userId" element={<Watch/>}></Route>
            <Route path="*" element={<Navigate to={`/home/${userId}`}/>} />
        </Routes>
    </>
}