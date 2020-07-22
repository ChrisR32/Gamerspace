import React, {useState, useEffect, useContext} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import "../Pages/Category/CreateForms.scss";
import 'bootstrap';

export default function ShowTopPostThread() {
    const history = useHistory();
    const {id} = useParams();
    const [thread, setThread] = useState(null);
    const [post, setPost] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getPostThread = async () => {
            
            const response = await axios.get('/api/thread/'+id);
            setThread(response.data);

        };

        const getTopPost = async () => {
            const response = await axios.get('/toppost/');
            setPost(response.data);
        
        };    
        getPostThread();
        getTopPost();

    }, []);

    return (
<div>
   
            <div className="row">
                <div className="col-3 bottom-border">          
               {post && <p><img src={post.threadAvatar} className="recent-post" alt="User Profile Picture"/></p>}
                  </div>
                  <div className="col-9 bottom-border">
                {post &&  <h4 className="">{post.title}</h4>}      
                {post &&   <p className="min-line-height">Posted by: <strong>{post.threadUser}</strong></p>}
                {post &&  <p className="min-line-height">{post.createdAt}</p>}
                
              
                </div>

            

            </div>
</div>
    )
}