import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../Contexts/AuthContext";
import "../Category/CreateForms.scss";
import "bootstrap";
import PostView from "./Posts";
import CreatePost from "./CreatePost";
import ForumLink from "../../Components/navigator/forumLink.js";
import parse from "html-react-parser";
import ShowTotals from "../../Components/Totals.js";

export default function ShowThread() {
  console.log("Show Thread");
  const { user } = useContext(AuthContext);
  const [thread, setThread] = useState(null);
  const [posts, setPosts] = useState([]);
  // eslint-disable-next-line
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [hasMore, setHasMore] = useState(false);
  // eslint-disable-next-line
  const [isReplying, setIsReplying] = useState(false);
  // eslint-disable-next-line
  const [replyContent, setReplyContent] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const getThread = async () => {
      const response = await axios.get("/api/thread/" + id);
      setThread(response.data);
      history.push("/thread/" + id);
    };
    getThread();
    // eslint-disable-next-line
  }, []);
  // eslint-disable-next-line
  const handleReply = async (event) => {
    event.preventDefault();
    if (!replyContent) return;
    const data = {
      userId: user._id,
      threadId: thread._id,
      content: replyContent,
      threadUser: user.name,
      threadAvatar: user.avatar,
    };

    const response = await axios.post("/api/post/create", data);
    setPosts([...posts, response.data]);
  };

  const history = useHistory();

  const handleDelete =  (id) => {
    console.log("in handle delete")
    axios.delete(`/api/thread/forum/`, {
      params: { id },
    })
    .then(() =>{
      console.log("here")
      setPosts(posts.filter(post => post.id !== id))
    }) 
    .catch(() => {
      console.log("Errored")
    })

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
          {thread && (
            <div className="col-12 top-cat">
              <h4>
                <strong>{thread.title}</strong>
              </h4>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-12 cat-left">
            <div className="row">
              <div className="col-2 center-content">
                {thread && (
                  <p>
                    <img
                      src={thread.threadAvatar}
                      className="avatar"
                      alt="User Profile"
                    />
                  </p>
                )}
                {thread && (
                  <p>
                    Posted by: <strong>{thread.threadUser}</strong>
                  </p>
                )}
                {thread && <p>{thread.createdAt}</p>}
                <div
                  className="delete"
                  button
                  onClick={() => handleDelete(`${thread._id}`)}
                >
                  DELETE
                </div>
              </div>
              <div className="col-10">
                {thread && <div>{parse(thread.content)}</div>}
              </div>
            </div>
          </div>
        </div>

        <div>
          <PostView />
        </div>
      </div>
      <CreatePost />
    </div>
  );
}
