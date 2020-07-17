import React, {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
export default function ShowForum() {
    const history = useHistory();
    const {id} = useParams();

    const [forum, setForum] = useState(null);
    const [threads, setThreads] = useState([]);
    useEffect(() => {
    const getForum = async () => {
        const response = await axios.get('/api/forum/'+id);
        setForum(response.data);
    };

    const getThreads = async () => {
        const response = await axios.get('/api/thread/forum/'+id);
        setThreads(response.data);
    };        
        getForum();
        getThreads();
    }, 
    );



    return (
        <div>

            {forum && <h3>Forum > GET CATEGORY > {forum.title} ></h3>}

            <button onClick={() => history.push("/thread/create/"+id)}>Create Thread</button>
            <ul>
                {threads.map((thread, index) => (
                    <li key={index} button onClick={() => history.push(`/thread/${thread._id}`)}>
                        <h4>{thread.title}</h4>
                        <p>{thread.createdAt}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}