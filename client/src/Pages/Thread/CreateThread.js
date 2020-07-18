import React, {useState, useContext} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import AuthContext from "../../Contexts/AuthContext";

const CreateForum = () => {
    const {user} = useContext(AuthContext);
    const {id} = useParams();
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleOnSubmit = async event => {
        event.preventDefault();

        const data = {
            title,
            content,
            userId: user._id,
            forumId: id
        };

        const response = await axios.post('/api/thread/create', data);
        const {_id} = response.data;
        history.push('/thread/'+_id);
    };

    return (
        <div>
            <h1>Create Thread</h1>

            <form onSubmit={handleOnSubmit}>
                <h4>Tread Title</h4>
                <input label="Title"
                        placeholder="Title"
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}/>
                <h4>Thread Content</h4>
               <textarea placeholder="Content"
                        rows="5"
                        cols="40"
                        value={content}
                        style={{width: "100%", height: 250}}
                        onChange={e => setContent(e.target.value)}>
               </textarea>
                <button type="submit">Create</button>
            </form>
        </div>
    )
};

export default CreateForum;