import React, {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import "./BrowseCategories.scss";
import CatLogo from "../../Images/cat-icon.png";
import HomeLogo from "../../Images/home-icon.png";
import 'bootstrap';

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
        <div className="top-div login-bottom">
        <div className="main-content">
            {category && <h3><img src={HomeLogo} className="home-logo" alt="Category Logo"/> Forum > {category.title} ></h3>}
            

            <div className="row top-row">
            <div className="col-8 top-cat"><h4><strong>Sub categories</strong></h4></div>
                <div className="col-1"></div>
                <div className="col-3 top-cat text-center"><h4><strong>Recent Posts</strong></h4></div>
            </div>
            <div className="row">
            
                 <div className="col-8 cat-left">
                {fora.map((forum, index) => (
                    <div key={index} className="row cat-find" button onClick={() => history.push(`/forum/${forum._id}`)}>
                        <div class="col-1 text-left"><img src={CatLogo} className="cat-logo" alt="Category Logo"/></div>
                            <div class="col-lg-7">
                            <h5><strong>{forum.title}</strong></h5>
                        <p>{forum.createdAt}</p>
                    </div>
                    <div class="col-1 text-center">
                    <h4>100</h4>
                    <p><strong>POSTS</strong></p>
                </div>
                <div class="col-3 text-center">
                    <h6><strong>LAST POST</strong></h6>
                    <p>1 day ago</p>
                </div>
                </div>

                ))}
             </div>
                <div className="col-1"></div>
                <div className="col-3 cat-right">
                
                
            </div>
            
            </div>
            <div class="adminOnly">
                <button onClick={() => history.push("/forum/create/"+id)}>Create Sub Category - ADMINISTRATORS ONLY</button>
            </div>
            </div>
        </div>
    )
}