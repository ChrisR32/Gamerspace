import React, {useState} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

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
        <div className={"adminOnly"}>
            <h1>Create Category - ADMINISTRATORS ONLY</h1>

            <form onSubmit={handleOnSubmit}>
                <input label="Title" value={title} onChange={e => setTitle(e.target.value)}/>
                <button type="submit">Create</button>
            </form>
        </div>
    )
};

export default CreateCategory;