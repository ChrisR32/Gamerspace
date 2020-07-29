import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import "./BrowseCategories.scss";
import CatLogo from "../../Images/cat-icon.png";
import HomeLogo from "../../Images/home-icon.png";
import 'bootstrap';
import ShowTopPostThread from "../../Components/TopPosts.js";
import ShowTopReplyThread from "../../Components/TopReplys.js";
import ShowTotals from "../../Components/Totals.js";

export default function BrowseCategories() {
    console.log("Browser Categories")
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        const response = await axios.get('/api/category');
        setCategories(response.data);
    };

    const handleDelete = (id => {
        axios.delete(`/api/category/`, {
            params: { id }
        })});
    

    const history = useHistory();
    return (
        <div className="top-div login-bottom">
        <div className="main-content">
            <h3 className="mini-text"><img src={HomeLogo} className="home-logo" alt="Category Logo"/> Forum -</h3>

            
            <div className="row top-row">
            <div className="col-8 top-cat"><h4><strong>Main Categories</strong></h4></div>
                <div className="col-1"></div>
                <div className="col-3">
                    <div className="top-cat text-center">
                    <h4><strong>Latest thread</strong></h4>
                    </div>
            </div>
            </div>
            <div className="row">
            
                 <div className="col-8 cat-left">
                   
                    
                            
                        {categories.map((cat, index) => (

                            <div key={index} className="row cat-find" onClick={() => history.push(`/category/${cat._id}`)}>
                                
                                    
                                        <div class="col-1 text-left"><img src={cat.iconUrl} className="cat-logo" alt="Category Logo"/></div>
                                        <div class="col-lg-7">
                                        <h5><strong>{cat.title}</strong></h5>
                                        <p><strong>{cat.info}</strong></p>
                                        </div>
                                        <div class="col-lg-2 text-center">
                    <h4></h4>
                    <div key={index} className="delete" button onClick={() =>  handleDelete(`${cat._id}`)}>
DELETE</div>
                </div>
                <div class="col-lg-2 text-center">
                    <h6><strong>LAST POST</strong></h6>
                    <p>1 day ago</p>
                </div>
                                    
                               
                                
                                
                  
                            </div>
              
                        ))}
                    
              
                </div>
                <div className="col-1"></div>
                <div className="col-3">
                    <div className="cat-right">
                <ShowTopPostThread />
                </div>
                <div className="top-cat text-center">
                    <h4><strong>Latest post</strong></h4>
                </div>
                <div className="cat-right">
                <ShowTopReplyThread />
                </div>
                <div className="top-cat text-center">
                    <h4><strong>Statistics</strong></h4>
                </div>
                <div className="cat-right">
                <ShowTotals />
                </div>
            
            </div>
            </div>
            <div class="adminOnly">
                <button onClick={() => history.push('/category/create')}>Create Category - ADMINISTRATORS ONLY</button>
            </div>
        </div>
        </div>
    )
}