import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import AuthContext from "../../Contexts/AuthContext";
import { Editor } from "@tinymce/tinymce-react";
import "../Category/CreateForms.scss";
import "bootstrap";

const CreatePost = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const history = useHistory();
  const [content, setPost] = useState("");

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log("Hererere")
    const data = {
      content,
      userId: user._id,
      threadId: id,
      userName: user.name,
      userAvatar: user.avatar,
    };
    const response = await axios.post("/api/post/create", data);
    const { _id } = response.data;
    console.log("Rerloadiing")
    window.location.reload(true)
    // history.push("/thread/" + id);
  };

  return (
    <div>
      <div className="forum-new">
        <div className="form-group forum-new">
          <label for="content-input">Reply to thread</label>

          <Editor
            selector="textarea#premiumskinsandicons-jam"
            skin="jam"
            icons="jam"
            plugins="code image link lists"
            toolbar="undo redo | styleselect | bold italic underline forecolor backcolor | link image code | align | bullist numlist"
            menubar="false"
            key={content}
            value={content}
            id="content-input"
            outputFormat="text"
            type="text"
            apiKey="dg479guj522x2tikjfvn3pqyuovquznic0sj4s95sfxd99rg"
            itemId="content input"
            submit_patch="true"
            onMouseLeave={(event, Post) => {
              const data = Post.getContent();
              setPost(data);
            }}
          />
        </div>
        <br />
        <div class="wrap wrap-main">
          <button
            className="submit btn btn-primary btn-lg btn-block"
            type="submit"
            onClick={handleOnSubmit}
          >
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
