import { useState } from "react";
import { Menu } from "../../components/Menu/Menu"
import { useGlobalState } from "../../store/context/globalContext"
import './Comunity.scss'
import { Link, useParams } from "react-router-dom";


// export const Community = () => {
//     const { movies } = useGlobalState();
//     const { userId } = useParams<{ userId: string }>();

//     // Extract all reviews from movies
//     const reviews = movies.flatMap(movie => movie.reviews || []);

//     // Pagination state
//     const [currentPage, setCurrentPage] = useState(1);
//     const commentsPerPage = 5; // Number of comments to display per page

//     // Search state
//     const [searchQuery, setSearchQuery] = useState('');
    
//     // Calculate the displayed comments based on the current page and search query
//     const filteredComments = reviews.filter(review =>
//         review.comment.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     const displayedComments = filteredComments.slice(0, currentPage * commentsPerPage);

//     const handleSeeMore = () => {
//         setCurrentPage(prevPage => prevPage + 1);
//     };

//     const handleSearch = (e: any) => {
//         setSearchQuery(e.target.value);
//         setCurrentPage(1); // Reset pagination when search query changes
//     };

//     return (
//         <div className="community-container">
//             <Menu />
//             <div className="community-content">
//                 <div className="community-header">
//                     <h2>Community Page</h2>
//                 </div>
//                 <div className="wrapper-community">
//                     <div className="form-community">
//                         <div className="filter-icon">
//                             <img src="/images/icons/filter.png" alt="filterIcon" />
//                         </div>
//                         <form action="">
//                             <input type="text" placeholder="Search" className="community-input" value={searchQuery} onChange={handleSearch} />
//                         </form>
//                         <div className="start-disc">
//                             <button className="btn btn-green">Start a discussion</button>
//                         </div>
//                     </div>
//                     <div className="comment-section">
//                         <div className="posts-header">
//                             <p>Posts</p>
//                             <p>Rating</p>
//                         </div>
//                         <div className="comment-wrapper">
//                             {displayedComments.length > 0 ? (
//                                 displayedComments.map((review, index) => (
//                                     <Link to={`/comments/${userId}`} key={index} className="comment">         
//                                         <div className="img-container">
//                                             <img src="/images/users/profile.png" alt="" className="img-fluid img-user" />
//                                         </div>
//                                         <p>{review.comment}</p>
//                                     </Link>
//                                 ))
//                             ) : (
//                                 <p>No matching comments found</p>
//                             )}
//                             {filteredComments.length > displayedComments.length && (
//                                 <button className="btn btn-green" onClick={handleSeeMore}>
//                                     See more
//                                 </button>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

export const Community = () => {
    const { movies } = useGlobalState();
    const { userId } = useParams<{ userId: string }>();

    // Extract all reviews from movies
    const reviews = movies.flatMap(movie => movie.reviews || []);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const commentsPerPage = 5; // Number of comments to display per page

    // Search state
    const [searchQuery, setSearchQuery] = useState('');

    // Comment form state
    const [isCommentFormOpen, setIsCommentFormOpen] = useState(false);
    const [commentText, setCommentText] = useState('');
    const [allComments, setAllComments] = useState<string[]>([]); // Local state to store all comments

    // Calculate the displayed comments based on the current page and search query
    const filteredComments = reviews.filter(review =>
        review.comment.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const displayedComments = filteredComments.slice(0, currentPage * commentsPerPage);

    const handleSeeMore = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handleSearch = (e: any) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset pagination when search query changes
    };

    const handleStartDiscussion = () => {
        setIsCommentFormOpen(true);
    };

    const handleCommentSubmit = () => {
        // Save the comment locally
        const updatedComments = [...allComments, commentText];
        setAllComments(updatedComments);

        // Reset comment form state
        setCommentText('');
        setIsCommentFormOpen(false);
    };

    return (
        <div className="community-container">
            <Menu />
            <div className="community-content">
                <div className="community-header">
                    <h2>Community Page</h2>
                </div>
                <div className="wrapper-community">
                    <div className="form-community">
                        <div className="filter-icon">
                            <img src="/images/icons/filter.png" alt="filterIcon" />
                        </div>
                        <form action="">
                            <input type="text" placeholder="Search" className="community-input" value={searchQuery} onChange={handleSearch} />
                        </form>
                        <div className="start-disc">
                            {isCommentFormOpen ? (
                                <div>
                                    <textarea value={commentText} placeholder="Your comment here" onChange={(e) => setCommentText(e.target.value)} />
                                    <button className="btn btn-green" onClick={handleCommentSubmit}>Submit</button>
                                </div>
                            ) : (
                                <button className="btn btn-green" onClick={handleStartDiscussion}>Start a discussion</button>
                            )}
                        </div>
                    </div>
                    <div className="comment-section">
                        <div className="posts-header">
                            <p>Posts</p>
                            <p>Rating</p>
                        </div>
                        <div className="comment-wrapper">
                            {displayedComments.length > 0 ? (
                                displayedComments.map((review, index) => (
                                    <Link to={`/comments/${userId}`} key={index} className="comment">         
                                        <div className="img-container">
                                            <img src="/images/users/profile.png" alt="" className="img-fluid img-user" />
                                        </div>
                                        <p>{review.comment}</p>
                                        <div className="vote-comment">
                                            <img src="/images/icons/vote.png" alt="" />
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <p>No matching comments found</p>
                            )}
                            {allComments.map((comment, index) => (
                                <div key={index} className="comment">         
                                    <div className="img-container">
                                        <img src="/images/users/profile.png" alt="" className="img-fluid img-user" />
                                    </div>
                                    <p>{comment}</p>
                                </div>
                            ))}
                            {filteredComments.length > displayedComments.length && (
                                <button className="btn btn-green" onClick={handleSeeMore}>
                                    See more
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

