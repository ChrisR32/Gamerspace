import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

export default function BrowseCategories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const response = await axios.get('/api/category');
        setCategories(response.data);
    };

    const history = useHistory();
    return (
        <div>
            <h3>Forum ></h3>
            <div class="adminOnly">
                <button onClick={() => history.push('/category/create')}>Create Category - ADMINISTRATORS ONLY</button>
            </div>
            <br/>

            <ul>
                {categories.map((cat, index) => (
                    <li key={index} onClick={() => history.push(`/category/${cat._id}`)}>
                        <h4>{cat.title}</h4>
                         <p>{cat.createdAt}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}