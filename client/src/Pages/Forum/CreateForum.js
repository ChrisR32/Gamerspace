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
        <div style={{padding: "2rem"}}>
            <h1 style={{marginBottom: "2rem"}}>Create Forum</h1>
            <form onSubmit={handleOnSubmit}>
                <input type={"text"} name={"title"} id={title} style={{width: "80%"}} onChange={e => setTitle(e.target.value)}></input>
                <input type={"submit"} className={"btn btn-block"}>Create</input>
            </form>
        </div>
    )
};

export default CreateForum;