import React, {useState, useEffect, useContext} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import AuthContext from "../../Contexts/AuthContext";
import HomeLogo from "../../Images/home-icon.png";
import "../Category/CreateForms.scss";
import 'bootstrap';
import PostView from './Posts';
import PostCreate from './CreatePost';
import CreatePost from "./CreatePost";
import ForumLink from "../../Components/navigator/forumLink.js";

export default function ShowThread() {
    console.log("Show Thread")
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
    }, []);







    const handleReply = async event => {
        event.preventDefault();
        if (!replyContent) return;
        const data = {
            userId: user._id,
            threadId: thread._id,
            content: replyContent,
            threadUser: user.name,
            threadAvatar: user.avatar
        };

        const response = await axios.post("/api/post/create", data);
        setPosts([...posts, response.data]);
    }

    const history = useHistory();
    return (
<div className="top-div login-bottom">   
    <div className="main-content">
        <ForumLink />
        <div className="row top-row">
            {thread && <div className="col-12 top-cat"><h4><strong>{thread.title}</strong></h4></div>}
        </div>
        <div className="row">   
            <div className="col-12 cat-left">
                <div className="row">
                    <div className="col-2 center-content">
                    {thread && <p><img src={thread.threadAvatar} className="avatar" alt="User Profile Picture"/></p>}
                        {thread && <p>Posted by: <strong>{thread.threadUser}</strong></p>}
                        {thread && <p>{thread.createdAt}</p>}
                    </div> 
                    <div className="col-10">  
                        {thread && <p>{thread.content}</p>}
                    </div>    
                </div>
            </div>
        </div>
    </div>         
<div>
<PostView />
</div>       
<CreatePost />
            </div>




    )
}