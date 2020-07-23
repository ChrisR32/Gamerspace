import React, {useState} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import "../Category/CreateForms.scss";
import 'bootstrap';


const CreateForum = () => {
    const {id} = useParams();
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [info, setInfo] = useState("");
    const [iconUrl, setIcon] = useState("");

    const handleOnSubmit = async event => {
        event.preventDefault();

        const data = {
            title,
            categoryId: id,
            info,
            iconUrl
        };

        const response = await axios.post('/api/forum/create', data);
        const {_id} = response.data;
        history.push('/forum/'+_id);
    };

    return (
        <div className="top-div login-bottom">        
            <h1>Create Sub-Category</h1>

            <form className="forum" onSubmit={handleOnSubmit}>
            <div className="form-group">
            <label for="title-input">Sub-Category Title</label>
                <input label="title"
                        itemId="title-input"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className="form-group">
            <label for="info-input">Sub-Category Description</label>
                <input label="info"
                        itemId="info-input"
                        value={info}
                        onChange={e => setInfo(e.target.value)}
                />
            </div>
            <div className="form-group">
            <label for="icon-input">Picture URL</label>
                <input label="icon"
                        itemId="icon-input"
                        value={iconUrl}
                        onChange={e => setIcon(e.target.value)}
                />
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