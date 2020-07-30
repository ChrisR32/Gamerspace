import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import "./BrowseCategories.scss";
import CatLogo from "../../Images/cat-icon.png";
import HomeLogo from "../../Images/home-icon.png";
import "bootstrap";
import ForumLink from "../../Components/navigator/forumLink.js";
import PostLength from "../Thread/PostsRecent.js";
import ShowTopPostThread from "../../Components/TopPosts.js";
import ShowTopReplyThread from "../../Components/TopReplys.js";
import ShowTotals from "../../Components/Totals.js";

export default function BrowseCategories() {
  console.log("Show Category");
  const history = useHistory();
  const { id } = useParams();

  const [category, setCategory] = useState(null);
  const [fora, setFora] = useState([]);

  useEffect(() => {
    console.log("In use effect");
    const getCategory = async () => {
      const response = await axios.get("/api/category/" + id);
      setCategory(response.data);
    };
    const getFora = async () => {
      const response = await axios.get("/api/forum/category/" + id);
      setFora(response.data);
    };
    getCategory();
    getFora();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/forum/category/`, {
      params: { id },
    });
  };

  return (
    <div className="top-div login-bottom">
      <div className="main-content-form">
        <div className="row">
          <div className="col-6">
            <ForumLink />
          </div>
          <div className="col-6">
            <ShowTotals />
          </div>
        </div>
        <div className="row top-row">
          {category && (
            <div className="col-12 top-cat">
              <h4>
                <strong>{category.title} sub categories</strong>
              </h4>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-12 cat-left">
            {fora.map((forum, index) => (
              <div
                key={index}
                className="row cat-find"
                button
                onClick={() => history.push(`/forum/${forum._id}`)}
              >
                <div class="col-1 text-left">
                  <img
                    src={forum.iconUrl}
                    className="cat-logo"
                    alt="Category Logo"
                  />
                </div>
                <div class="col-lg-9">
                  <h2>
                    <strong>{forum.title}</strong>
                  </h2>
                  <h5>
                    <strong>{forum.info}</strong>
                  </h5>
                </div>
                <div class="col-lg-2 text-center">
                  <h4></h4>
                  <div
                    key={index}
                    className="delete"
                    button
                    onClick={() => handleDelete(`${forum._id}`)}
                  >
                    DELETE
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="adminOnly">
            <button onClick={() => history.push("/forum/create/" + id)}>
              Create Sub Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
