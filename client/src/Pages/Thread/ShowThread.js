import React, {useState, useEffect, useContext} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import AuthContext from "../../Contexts/AuthContext";


export default function ShowThread() {
    const {user} = useContext(AuthContext)
    const [thread, setThread] = useState(null);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(false);
    const [isReplying, setIsReplying] = useState(false);
    const [replyContent, setReplyContent] = useState("");
    const {id} = useParams();
    useEffect(() => {
    const getThread = async () => {
        const response = await axios.get('/api/thread/'+id);
        setThread(response.data);
    };        
        getThread();
    },
    );







    const handleReply = async event => {
        event.preventDefault();
        if (!replyContent) return;
        const data = {
            userId: user._id,
            threadId: thread._id,
            content: replyContent
        };

        const response = await axios.post("/api/post/create", data);
        setPosts([...posts, response.data]);
    }

    const history = useHistory();
    return (
        <div>

            {thread && <h3>Forum > GET CATEGORY > GET SUB CATEGORY > {thread.title}</h3>}

            {thread && <p>{thread.content}</p>}


            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        <h4>{post.content}</h4>
                        <p>{post.createdAt}</p>
                    </li>
                ))}
            </ul>

            <button disabled={!hasMore}>Load More Posts</button>

            <button onClick={() => setIsReplying(true)}>Reply</button>
            {isReplying && (
                <form onSubmit={handleReply}>
                    <h4>Reply Content</h4>
                    <textarea placeholder="Content"
                               rows="5"
                               cols="40"
                               label="Content"
                               value={replyContent}
                               onChange={e => setReplyContent(e.target.value)}/>

                   <button type="submit">Reply</button>
                </form>
            )}

        </div>
    )
}