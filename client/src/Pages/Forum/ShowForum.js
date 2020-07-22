import React, {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import "../Category/BrowseCategories.scss";
import CatLogo from "../../Images/cat-icon.png";
import HomeLogo from "../../Images/home-icon.png";
import 'bootstrap';
import ForumLink from "../../Components/navigator/forumLink.js";

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



    return (
        <div className="top-div login-bottom">
        <div className="main-content">
            <ForumLink />
            <div className="row top-row">
            {forum && <div className="col-8 top-cat"><h4><strong>{forum.title} Threads</strong></h4></div>}
                <div className="col-1"></div>
                <div className="col-3 top-cat text-center"><h4><strong>Recent Posts</strong></h4></div>
            </div>
            <div className="row">
            
                 <div className="col-8 cat-left">
                   
                    
                            
                {threads.map((thread, index) => (
                    <div key={index} className="row cat-find" key={index} button onClick={() => history.push(`/thread/${thread._id}`)}>
                        
                        
                        
                        <div class="col-2 text-left">
                            <img src={thread.threadAvatar} className="user-logo" alt="Category Logo"/>
                        </div>
                        <div class="col-lg-7">
                            <h3>{thread.title}</h3>
                            <h5>Posted by: <strong>{thread.threadUser}</strong></h5>
                            <p>Thread created at: {thread.createdAt}</p>
                        </div>
                                        <div class="col-1 text-center">
                                            <h4>100</h4>
                                            <p><strong>POSTS</strong></p>
                                        </div>
                                        <div class="col-2 text-center">
                                            <h6><strong>LAST POST</strong></h6>
                                            <p>1 day ago</p>
                                        </div>
                                        </div>
                                        ))} 
                                        </div>
                                             <div className="col-1"></div>
                                             <div className="col-3 cat-right">
                                    
                               
                                
                                
                  
                          
               
            </div>
             </div>
             
              
            <div class="adminOnly">
            <button onClick={() => history.push("/thread/create/"+id)}>Create Thread</button>
            </div>
            </div>
            </div>
           
    
    )
}