import React, {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import "../Category/BrowseCategories.scss";
import CatLogo from "../../Images/cat-icon.png";
import HomeLogo from "../../Images/home-icon.png";
import 'bootstrap';
import ForumLink from "../../Components/navigator/forumLink.js";
import ShowTopPostThread from "../../Components/TopPosts.js";
import ShowTopReplyThread from "../../Components/TopReplys.js";
import ShowTotals from "../../Components/Totals.js";



export default function ShowForum() {
    console.log("Show Fourm")
    const history = useHistory();
    const {id} = useParams();

    const [forum, setForum] = useState(null);
    const [threads, setThreads] = useState([]);
    useEffect(() => {
        const getForum = async () => {
            const response = await axios.get('/api/forum/'+id);
            setForum(response.data);
        };

        const getThreads = async () => {
            const response = await axios.get('/api/thread/forum/'+id);
            setThreads(response.data);
        };        
            getForum();
            getThreads();
    }, []);

    const handleDelete = (id => {
        axios.delete(`/api/thread/forum/`, {
            params: { id }
        })});

    return (
        <div className="top-div login-bottom">
        <div className="main-content-form">
        <div className="row">
                <div className="col-6">
            <ForumLink />
            </div>
<div className="col-6">
<ShowTotals />
</div>
            </div>
            <div className="row top-row">
            {forum && <div className="col-12 top-cat"><h4><strong>{forum.title} Threads</strong></h4></div>}
                
                                </div>
            <div className="row">
            
                 <div className="col-12 cat-left">
                   
                    
                            
                {threads.map((thread, index) => (
                    <div key={index} className="row cat-find" key={index} button onClick={() => history.push(`/thread/${thread._id}`)}>
                        
                        
                        
                        <div class="col-2 text-left">
                            <img src={thread.threadAvatar} className="user-logo" alt="Category Logo"/>
                        </div>
                        <div class="col-lg-8">
                            <h3>{thread.title}</h3>
                            <h5>Posted by: <strong>{thread.threadUser}</strong></h5>
                            <p>Thread created at: {thread.createdAt}</p>
                        </div>
                        <div class="col-lg-2 text-center">
                    <h4></h4>
                    <div key={index} className="delete" button onClick={() =>  handleDelete(`${thread._id}`)}>
DELETE</div>
                </div>
                
                                        </div>
                                        ))} 
                                       
             </div>
             
              
            <div class="adminOnly">
            <button onClick={() => history.push("/thread/create/"+id)}>Create Thread</button>
            </div>
            </div>
            </div>
            </div>
           
    
    )
}