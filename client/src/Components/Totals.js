import React, {useState, useEffect, useContext} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import "../Pages/Category/CreateForms.scss";
import 'bootstrap';
import ReactTimeAgo from 'react-time-ago'

export default function ShowTotals() {
    const history = useHistory();
    const {id} = useParams();
    const [thread, setThread] = useState(null);
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getThread = async () => {
            const response = await axios.get('/totalthreads/');
            setThread(response.data);

        };

        const getPost = async () => {
            const response = await axios.get('/totalposts/');
            setPost(response.data);
        
        };    
        const getUser = async () => {
            const response = await axios.get('/totalusers/');
            setUser(response.data);
        
        };   

        getThread();
        getPost();
        getUser();

    }, []);

    return (
            <div>   
                <div className="row">
                    <div className="col-4 center-content border-right">
                        <strong><p>THREADS</p></strong> 
                        {thread && <h4><strong>{thread}</strong></h4>} 
                    </div>   
                    <div className="col-4 center-content border-right">
                        <strong><p>POSTS</p></strong> 
                        {post && <h4><strong>{post}</strong></h4>}
                    </div>       
                    <div className="col-4 center-content">
                        <strong><p>USERS</p></strong>
                        {user &&  <h4><strong>{user}</strong></h4>}
                    </div>
                </div>
            </div>
        )
}