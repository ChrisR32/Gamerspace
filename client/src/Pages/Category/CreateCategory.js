import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
import "./CreateForms.scss";
import 'bootstrap';

const CreateCategory = () => {
    const history = useHistory();
    const [title, setTitle] = useState("");

    const handleOnSubmit = async event => {
        event.preventDefault();

        const data = {
            title
        };

        const response = await axios.post('/api/category/create', data);
        const {_id} = response.data;
        history.push('/category/'+_id);
    };

    return (
        <div className="top-div login-bottom">        
            <h1>Create Category</h1>

            <form className="forum" onSubmit={handleOnSubmit}>
            <div className="form-group">
            <label for="title-input">Category Title</label>
                <input label="Title" itemId="title-input" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <br/>
            <div class="wrap">
                <button className="submit btn btn-primary btn-lg btn-block" type="submit">Create</button>
            </div>
            </form>
        </div>
    )
};

export default CreateCategory;