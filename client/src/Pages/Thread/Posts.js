import React, {useState, useEffect, useContext} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import "../Category/CreateForms.scss";
import 'bootstrap';



export default function ShowThread() {
    const history = useHistory();
    const {id} = useParams();

    const [thread, setThread] = useState(null);
    const [replys, setPosts] = useState([]);
    useEffect(() => {
    const getThread = async () => {
        const response = await axios.get('/api/thread/'+id);
        setThread(response.data);

    };

    const getPosts = async () => {
        const response = await axios.get('/api/post/thread/'+id);
        setPosts(response.data);
      
    };        
        getThread();
        getPosts();
    }, 
    );
    return (
 <div>

      {replys.map((reply, index) => (
           <div className="main-content">
        <div className="row top-row" key={index}>
            <div className="col-12 top-cat"><h4><strong>Re: {reply.threadId}</strong></h4>
            </div>
       </div>
        <div className="row">
            <div className="col-12 cat-left">
                
                <div className="row" >                          
                    <div className="col-2">
                        <p>Profile Pic</p>
                        <p>{reply.userId}</p>
                        <p>{reply.createdAt}</p>
                    </div> 
                    <div className="col-10">  
                       <p>{reply.content}</p>
                    </div>
                </div> 
            </div> 
        </div> 
         </div> 
         
       )
       )
       };
   </div>
       
                        
              
  
          




    )
}