import React, {useState, useContext} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import AuthContext from "../../Contexts/AuthContext";
import "../Category/CreateForms.scss";
import 'bootstrap';

const CreateForum = () => {
    const {user} = useContext(AuthContext);
    const {id} = useParams();
    const {forum} = useHistory();
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const handleOnSubmit = async event => {
        event.preventDefault();

        const data = {
            title,
            content,
            threadUser: user.name,
            threadAvatar: user.avatar,
            userId: user._id,
            forumId: id
            };

        const response = await axios.post('/api/thread/create', data);
        const {_id} = response.data;
        history.push('/thread/'+_id);
    };

    return (
        <div className="top-div login-bottom">        
            <h1>Create Thread</h1>

            <form className="forum" onSubmit={handleOnSubmit}>
            <div className="form-group">
            <label for="title-input">Thread Title</label>

                <input label="Title"
                        placeholder="Title"
                        itemId="title-input"
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}/>
            </div>
            <br/>

            <div className="form-group">
            <label for="content-input">Thread Content</label>
               <textarea placeholder="Content"
                        rows="5"
                        cols="40"
                        itemId="content-input"
                        value={content}
                        style={{width: "100%", height: 250}}
                        onChange={e => setContent(e.target.value)}>
               </textarea>
               </div>
            <br/>
            <div class="wrap">
                <button className="submit btn btn-primary btn-lg btn-block" type="submit">Create</button>
                </div>
            </form>
        </div>
    )
};

export default CreateForum;