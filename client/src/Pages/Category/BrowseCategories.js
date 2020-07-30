import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./BrowseCategories.scss";
import CatLogo from "../../Images/cat-icon.png";
import HomeLogo from "../../Images/home-icon.png";
import "bootstrap";
import ShowTopPostThread from "../../Components/TopPosts.js";
import ShowTopReplyThread from "../../Components/TopReplys.js";
import ShowTotals from "../../Components/Totals.js";

export default function BrowseCategories() {
  console.log("Browser Categories");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await axios.get("/api/category");
    setCategories(response.data);
  };

  const handleDelete = (id) => {
    axios.delete(`/api/category/`, {
      params: { id },
    });
  };

  const history = useHistory();
  return (
    <div className="top-div login-bottom">
      <div className="main-content-form">
        <div className="row">
          <div className="col-6">
            <h3 className="mini-text">
              <img src={HomeLogo} className="home-logo" alt="Category Logo" />{" "}
              Forum
            </h3>
          </div>
          <div className="col-6">
            <ShowTotals />
          </div>
        </div>
        <div className="row top-row">
          <div className="col-12 top-cat">
            <h4>
              <strong>Main Categories</strong>
            </h4>
          </div>
        </div>

        <div className="row">
          <div className="col-12 cat-left">
            {categories.map((cat, index) => (
              <div
                key={index}
                className="row cat-find"
                onClick={() => history.push(`/category/${cat._id}`)}
              >
                <div class="col-1 center-inside">
                  <img
                    src={cat.iconUrl}
                    className="cat-logo"
                    alt="Category Logo"
                  />
                </div>
                <div class="col-lg-9">
                  <h2>
                    <strong>{cat.title}</strong>
                  </h2>
                  <h5>
                    <strong>{cat.info}</strong>
                  </h5>
                </div>
                <div class="col-lg-2 text-center">
                  <h4></h4>
                  <div
                    key={index}
                    className="delete"
                    button
                    onClick={() => handleDelete(`${cat._id}`)}
                  >
                    DELETE
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="adminOnly">
            <button onClick={() => history.push("/category/create")}>
              Create Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
