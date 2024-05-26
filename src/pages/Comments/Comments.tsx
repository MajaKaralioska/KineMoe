import { useParams } from "react-router-dom";
import { Menu } from "../../components/Menu/Menu"
import { useGlobalState } from "../../store/context/globalContext";
import './Comments.scss'

import { useEffect, useState } from 'react';
import axios from "axios";

export const Comments = () => {
    const { comments, setComments } = useGlobalState(); // Destructure setComments from global state
    const { userId } = useParams<{ userId: string }>();

    // State for the comment input
    const [commentText, setCommentText] = useState('');

    // Function to handle changes in the comment input field
    const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentText(event.target.value);
    };

    // Function to handle form submission (posting comment)
    const handlePostComment = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try {
            // Make a POST request to your API endpoint
            const response = await axios.post('http://localhost:5001/comments', {
                userId: userId,
                content: commentText,
                timestamp: new Date().toISOString(),
                likes: 0
            });

            // Update the comments state by adding the newly posted comment
            setComments((prevComments) => [...prevComments, response.data]); // Update state with the new comment
    
            // Reset the comment input field after posting
            setCommentText('');
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };
    
    const image = localStorage.getItem('profileImage')

    return (<>
        <div className="comments-container">
            <Menu />
            <div className="comments-wrap">
                <div className="main-comment">
                    <div className="maincomment-header">
                        <h2>Community/Post</h2>
                    </div>
                    <div className="main-comment-section">
                        <div className="main-header">
                            <p>Main Comment</p>
                        </div>
                        <div className="read-comment">
                            <div className="comment-info">
                              <div className="left-cont">
                                <div className="img-cont">
                                  <img src="/images/users/profile.png" alt="" />
                                </div>
                                <div className="cont-para">
                                   <p>Човек поголем од живот - Игор Џамбазов</p>
                                </div>
                                 </div>
                                <div className="img-vote">
                                    <img src="/images/icons/vote.png" alt="" />
                                </div>
                            </div>
                            <div className="user-comment-main">
                            {comments.map(comment => (
                                <div key={comment.id}>   
                                    <div className="content-para">
                                    <div className="img-cont">
                                     {image && <img src={image} alt="Profile Image" />}
                                     </div>
                                            <p>{comment.content}</p>
                                        </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-leave-comment">
                    <form onSubmit={handlePostComment}>
                        <textarea
                            placeholder="Leave a comment"
                            className="input-comment"
                            value={commentText}
                            onChange={handleCommentChange}
                        />
                        <button type="submit" className="btn btn-green post-btn">
                            Post comment
                        </button>
                    </form>
                </div>
                <div className="comment-section">
                    <p>Comment section</p>
                </div>
                <div className="existing-comments">
                   {comments.map((comment) => (
                       <div key={comment.id} className="comment">
                           <div className="img-cont">
                                     {image && <img src={image} alt="Profile Image" />}
                                     </div>
                            <p>{comment.content}</p>
                              {comment.replies && (
                          <div className="replies">
                             {comment.replies.map((reply) => (
                                 <div key={reply.id} className="reply">
                                     <div className="img-cont">
                                     {image && <img src={image} alt="Profile Image" />}
                                     </div>  
                                     <p>{reply.content}</p>
                           </div>
                    ))}
                </div>
            )}
        </div>
    ))}
</div>

            </div>
       </div>
    </>
    )
}