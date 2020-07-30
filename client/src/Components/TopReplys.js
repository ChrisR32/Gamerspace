import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import "../Pages/Category/CreateForms.scss";
import "bootstrap";

export default function ShowTopReplyThread() {
  // eslint-disable-next-line
  const history = useHistory();
  // eslint-disable-next-line
  const { id } = useParams();
  // eslint-disable-next-line
  const [thread, setThread] = useState(null);
  const [reply, setReply] = useState([]);
  // eslint-disable-next-line
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getTopReply = async () => {
      const response = await axios.get("/topreply/");
      setReply(response.data);
    };

    getTopReply();
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-3 bottom-border">
          {reply && (
            <p>
              <img
                src={reply.userAvatar}
                className="recent-post"
                alt="User Profile"
              />
            </p>
          )}
        </div>
        <div className="col-9 bottom-border">
          {reply && <h4 className="">{reply.userName}</h4>}
          {reply && (
            <p className="min-line-height">
              at: <strong>{reply.createdAt}</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
