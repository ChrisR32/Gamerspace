import React, {useState, useContext} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import AuthContext from "../../Contexts/AuthContext";
import "../Category/CreateForms.scss";
import 'bootstrap';

const CreatePost = () => {
    const {user} = useContext(AuthContext);
    const {id} = useParams();
    const history = useHistory();
    const [content, setPost] = useState("");



    const handleOnSubmit = async event => {
        event.preventDefault();

        const data = {
            content,
            userId: user._id,
            threadId: id,
            userName: user.name,
            userAvatar: user.avatar,
        };
        const response = await axios.post("/api/post/create", data);
        const {_id} = response.data;
        history.push('/post/'+_id);
    };

    return (
        <div>        
            

            <form className="forum" onSubmit={handleOnSubmit}>
    
            <div className="form-group">
            <label for="content-input">Reply to thread</label>
               <textarea placeholder="Content"
                        rows="5"
                        cols="40"
                        itemId="content-input"
                        value={content}
                        style={{width: "100%", height: 250}}
                        onChange={e => setPost(e.target.value)}>
               </textarea>
               </div>
            <br/>
            <div class="wrap">
                <button className="submit btn btn-primary btn-lg btn-block" type="submit">Reply</button>
                </div>
            </form>
        </div>
    )
};

export default CreatePost;