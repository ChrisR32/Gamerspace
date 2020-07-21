import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import "./BrowseCategories.scss";
import CatLogo from "../../Images/cat-icon.png";
import HomeLogo from "../../Images/home-icon.png";
import 'bootstrap';

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

    const history = useHistory();
    return (
        <div className="top-div login-bottom">
        <div className="main-content">
            <h3 className="mini-text"><img src={HomeLogo} className="home-logo" alt="Category Logo"/> Forum ></h3>

            
            <div className="row top-row">
            <div className="col-8 top-cat"><h4><strong>Main Categories</strong></h4></div>
                <div className="col-1"></div>
                <div className="col-3 top-cat text-center"><h4><strong>Recent Posts</strong></h4></div>
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
                <button onClick={() => history.push('/category/create')}>Create Category - ADMINISTRATORS ONLY</button>
            </div>
        </div>
        </div>
    )
}