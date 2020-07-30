import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import "../Pages/Category/CreateForms.scss";
import "bootstrap";
import ReactTimeAgo from "react-time-ago";

export default function ShowTotals() {
  const history = useHistory();
  const { id } = useParams();
  const [thread, setThread] = useState(null);
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getThread = async () => {
      const response = await axios.get("/totalthreads/");
      setThread(response.data);
    };

    const getPost = async () => {
      const response = await axios.get("/totalposts/");
      setPost(response.data);
    };
    const getUser = async () => {
      const response = await axios.get("/totalusers/");
      setUser(response.data);
    };

    getThread();
    getPost();
    getUser();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-3 center-content">
          <p className="total-heading">STATISTICS : </p>
        </div>
        <div className="col-3 center-content">
          {thread && (
            <p className="total-border">
              THREADS : <strong>{thread}</strong>
            </p>
          )}
        </div>
        <div className="col-3 center-content">
          {post && (
            <p className="total-border">
              POSTS : <strong>{post}</strong>
            </p>
          )}
        </div>
        <div className="col-3 center-content">
          {user && (
            <p className="total-border">
              USERS : <strong>{user}</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
