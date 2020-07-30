import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./CreateForms.scss";
import "bootstrap";
import Uploader from "../../Components/Uploader";
import DisplayImage from "../../Components/DisplayImage";

const CreateCategory = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [iconUrl, setIcon] = useState("");

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const data = {
      title,
      info,
      iconUrl,
    };

    const response = await axios.post("/api/category/create", data);
    const { _id } = response.data;
    history.push("/category/" + _id);
  };

  return (
    <div className="top-div login-bottom">
      <h1>Create Category</h1>

      <form className="forum" onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label for="title-input">Category Title</label>
          <input
            label="Title"
            itemId="title-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="info-input">Category Description</label>
          <input
            label="info"
            itemId="info-input"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="pic-input">Picture URL</label>
          <input
            label="icon"
            itemId="pic-input"
            value={iconUrl}
            onChange={(e) => setIcon(e.target.value)}
          />
        </div>
        <br />
        <div class="wrap">
          <button
            className="submit btn btn-primary btn-lg btn-block"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
