import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import "../Category/CreateForms.scss";
import "bootstrap";
import parse from "html-react-parser";

export default function ShowThread() {
  const history = useHistory();
  const { id } = useParams();

  const [thread, setThread] = useState(null);
  const [replys, setPosts] = useState([]);
  // eslint-disable-next-line
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getThread = async () => {
      const response = await axios.get("/api/thread/" + id);
      setThread(response.data);
      history.push("/thread/" + id);
    };

    const getPosts = async () => {
      const response = await axios.get("/api/post/thread/" + id);
      setPosts(response.data);
      history.push("/thread/" + id);
    };
    getThread();
    getPosts();
    // eslint-disable-next-line
  }, []);

  const handleDelete = (id) => {
    axios.delete(`/api/post/thread/`, {
      params: { id },
    })
    .then(() =>{
      console.log("here")
      setPosts(replys.filter(reply => reply._id !== id))
    }) 
    .catch(() => {
      console.log("Errored")
    })
  };

  return (
    <div>
      {replys.map((reply, index) => (
        <div className="main-content">
          <div className="row top-row" key={index}>
            {thread && (
              <div className="col-12 top-cat">
                <h4>
                  <strong>Re: {thread.title}</strong>
                </h4>
              </div>
            )}
          </div>
          <div className="row">
            <div className="col-12 cat-left">
              <div className="row">
                <div className="col-2 center-content">
                  <p>
                    <img
                      src={reply.userAvatar}
                      className="avatar"
                      alt="User Profile"
                    />
                  </p>
                  <p>
                    Posted by: <strong>{reply.userName}</strong>
                  </p>
                  <p>{reply.niceDate}</p>
                  <div
                    key={index}
                    className="delete"
                    button
                    onClick={() => handleDelete(`${reply._id}`)}
                  >
                    DELETE
                  </div>
                </div>
                <div className="col-10">
                  <p>{parse(reply.content)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
