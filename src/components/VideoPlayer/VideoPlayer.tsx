import { useEffect, useRef, useState } from "react";
import './VideoPlayer.scss'

type Comment = {
  id: number;
  text: string;
  time: number;
  visible: boolean;
};


export const VideoPlayer: React.FC = () => {
  const [videoIsPlaying, setVideoIsPlaying] = useState<boolean>(false);
  const [muted, setMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [showComments, setShowComments] = useState<boolean>(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState<string>('');

  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted((prevState) => !prevState);
    }
  };

  const handleReverse = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - seconds);
    }
  };

  useEffect(() => {
    const updateTime = () => {
      if (videoRef.current) {
        const newTime = videoRef.current.currentTime;
        setCurrentTime(newTime);

        // Update the visibility of comments based on current time
        setComments((prevComments) =>
          prevComments.map((comment) => ({
            ...comment,
            visible:
              newTime >= comment.time &&
              newTime <= comment.time + 5 // Show comment for 5 seconds
          }))
        );
      }
    };

    const videoElement = videoRef.current;
    videoElement?.addEventListener('timeupdate', updateTime);

    return () => {
      videoElement?.removeEventListener('timeupdate', updateTime);
    };
  }, []);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (videoRef.current) {
      const newComment: Comment = {
        id: comments.length + 1,
        text: commentText,
        time: videoRef.current.currentTime,
        visible: true // Set initial visibility to true
      };
      setComments([...comments, newComment]);
      setCommentText(''); // Clear the input field
    }
  };

  return (
    <div>
      <p>{currentTime.toFixed(2)}</p>
      <div className="video-wrapper">
        <video ref={videoRef}>
          <source src="/video/Doggie.mp4" />
        </video>

        <div className="controls">
          {videoIsPlaying ? (
            <button
              onClick={() => {
                videoRef.current?.pause();
                setVideoIsPlaying((prevState) => !prevState);
              }}
            >
              Pause
            </button>
          ) : (
            <button
              onClick={() => {
                videoRef.current?.play();
                setVideoIsPlaying((prevState) => !prevState);
              }}
            >
              Play
            </button>
          )}

          <button onClick={handleMute}>{muted ? 'Unmute' : 'Mute'}</button>

          <button onClick={() => handleReverse(5)}>Reverse 5s</button>
          <button onClick={() => handleReverse(10)}>Reverse 10s</button>

          <button onClick={() => setShowComments((prev) => !prev)}>
            {showComments ? 'SHOWING COMMENTS' : 'HIDING COMMENTS'}
          </button>
        </div>

        <div className="comments">
          {showComments &&
            comments.map((comment) => (
              <div
                key={comment.id}
                className={`comment-box ${comment.visible ? 'show' : 'hide'}`}
                style={{ top: `${Math.random() * 80}%`, left: `${Math.random() * 80}%` }}
              >
                {comment.text}
              </div>
            ))}
        </div>

        <form onSubmit={handleCommentSubmit} className="comment-form">
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment"
            className="input-comment"
            required
          />
          <button type="submit" className="submit-comment">Submit</button>
        </form>
      </div>
    </div>
  );
};





