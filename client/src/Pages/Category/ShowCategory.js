import React, {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";

export default function BrowseCategories() {
    const history = useHistory();
    const {id} = useParams();

    const [category, setCategory] = useState(null);
    const [fora, setFora] = useState([]);

    useEffect(() => {
        const getCategory = async () => {
        const response = await axios.get('/api/category/'+id);
        setCategory(response.data);
    };

    const getFora = async () => {
      const response = await axios.get('/api/forum/category/'+id);
        setFora(response.data);
    };
        getCategory();
        getFora();
    }, 
    );



    return (
        <div>

            {category && <h3>Forum > {category.title} ></h3>}
            <div class="adminOnly">
                <button onClick={() => history.push("/forum/create/"+id)}>Create Sub Category - ADMINISTRATORS ONLY</button>
            </div>
            <ul>
                {fora.map((forum, index) => (
                    <li button onClick={() => history.push(`/forum/${forum._id}`)}>
                        <h4>{forum.title}</h4>
                        <p>{forum.createdAt}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}