import React, {useState} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";

const CreateForum = () => {
    const {id} = useParams();
    const history = useHistory();
    const [title, setTitle] = useState("");

    const handleOnSubmit = async event => {
        event.preventDefault();

        const data = {
            title,
            categoryId: id
        };

        const response = await axios.post('/api/forum/create', data);
        const {_id} = response.data;
        history.push('/forum/'+_id);
    };

    return (
        <div class="adminOnly">
            <h5>Create Sub Category - ADMINISTRATORS ONLY</h5>

            <form onSubmit={handleOnSubmit}>
                <input label="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                />
                <button type="submit">Create</button>
            </form>
        </div>
    )
};

export default CreateForum;