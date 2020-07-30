import HomeLogo from "../../Images/home-icon.png";
import "./forumLink.scss";
import React, { useState, useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import axios from "axios";

export default withRouter(({ history }) => {
  const { id } = useParams();
  const [category, setCategory] = useState();
  const [forum, setForum] = useState([]);
  const [thread, setThread] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      const response = await axios.get("/api/category/" + id);
      setCategory(response.data);
    };

    const getForum = async () => {
      const response = await axios.get("/api/forum/" + id);
      setForum(response.data);
    };

    const getThread = async () => {
      const response = await axios.get("/api/thread/" + id);
      setThread(response.data);
    };
    getCategory();
    getForum();
    getThread();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="forum-nav">
      <h3 className="forum_h3">
        <img src={HomeLogo} className="home-logo" alt="Category Logo" />
        &nbsp;
        <a className="forum_a" href="/category/" target="">
          Forum
        </a>{" "}
        -&nbsp;
      </h3>
      <h3 className="back-to" onClick={() => history.goBack()}>
        Return to Previous
      </h3>
      <h3 className="forum_h3">&nbsp;-&nbsp;</h3>
      {category && <h3 className="current">{category.title}</h3>}{" "}
      {thread && <h3 className="current">{thread.title}</h3>}{" "}
      {forum && <h3 className="current">{forum.title}</h3>}
    </div>
  );
});
