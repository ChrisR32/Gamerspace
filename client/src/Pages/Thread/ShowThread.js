import React, {useState, useEffect, useContext} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import AuthContext from "../../Contexts/AuthContext";
import HomeLogo from "../../Images/home-icon.png";
import "../Category/CreateForms.scss";
import 'bootstrap';


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
<div className="top-div login-bottom">   
    <div className="main-content">
        {thread && <h3><img src={HomeLogo} className="home-logo" alt="Category Logo"/> Forum > GET CATEGORY > GET SUB CATEGORY > {thread.title}</h3>}
        <div className="row top-row">
            {thread && <div className="col-12 top-cat"><h4><strong>{thread.title}</strong></h4></div>}
        </div>
        <div className="row">   
            <div className="col-12 cat-left">
                <div className="row">
                    <div className="col-2">
                        <p>Profile Pic</p>
                        <p>UserName</p>
                        <p>Date</p>
                    </div> 
                    <div className="col-10">  
                        {thread && <p>{thread.content}</p>}
                    </div>    
                </div>
            </div>
        </div>
    </div>         
       
         {posts.map((post, index) => (
 <div className="main-content">
        <div className="row top-row" key={index}>
            {thread && <div className="col-12 top-cat"><h4><strong>RE: {thread.title}</strong></h4></div>}
       </div>
        <div className="row">
            <div className="col-12 cat-left">
                
                <div className="row" >                          
                    <div className="col-2">
                        <p>Profile Pic</p>
                        <p>UserName</p>
                        <p>{post.createdAt}</p>
                    </div> 
                    <div className="col-10">  
                       <p>{post.content}</p>
                    </div>
                </div> 
            </div> 
        </div>   
  
    </div>
        
                            ))}   
              
  
        <br/>
        <div className="main-content right-align">
            <button disabled={!hasMore} className="btn-pad-right">Load More Posts</button>

            <button onClick={() => setIsReplying(true)}>Reply</button>
            <br/>
            <br/>
            {isReplying && (
                <form onSubmit={handleReply}>
                    <h4 className="left-align">Reply Content</h4>
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
</div>



    )
}