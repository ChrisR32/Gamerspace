import React, { Component, useState } from 'react'
import {useHistory} from "react-router-dom";
import axios from "axios";
import 'bootstrap';

class Profile extends Component {
    render() {
        const history = useHistory();
        const [content, setContent] = useState("");
        const userName = {userName};
        const location = 'Australia';
        const handleImageUpload = e => {
          const [file] = e.target.files;
          if (file) {
            console.log(file);
          }
        };

        const comments = [
          {
            userName: {userName},
            createdAt: 1543858000000
          }
        ]

        return (
        <div>
        <div className="About-Me">
          <label for="content-input">About Me</label>
             <textarea placeholder="Content"
                      rows="5"
                      cols="40"
                      itemId="content-input"
                      value={content}
                      style={{width: "100%", height: 250}}
                      onChange={e => setContent(e.target.value)}>
             </textarea>
        </div>
        <div>
          <div className="Profile">
            <input type="file" accept="image/*" onChange={handleImageUpload} multiple = "false" />
              <div
                style={{
                  height: "60px",
                  width: "60px",
                  border: "1px dashed black"
                }}
              >

            <img
              style={{
                width: "100%",
                height: "100%",
                position: "absolute"
              }}
            />
            </div>

          </div>      
        </div>    
      </div>

        )
      }
    }

export default Profile;