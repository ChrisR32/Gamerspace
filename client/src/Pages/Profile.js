import React, { Component, Fragment } from 'react';
import {useHistory} from "react-router-dom";
import 'bootstrap';

class Profile extends Component {
    render() {
        const history = useHistory();
        const { avatar, username } = this.props
        const handleImageUpload = e => {
          const [file] = e.target.files;
          if (file) {
            console.log(file);
          }
        };

        return (
        <div>
          {/* <Fragment>
            <UserAvatar src={avatar} />
            <UserProfile username={username} />
          </Fragment> */}
        
      
        <div className="avatar">
            <input type="file" accept="image/*" onChange={handleImageUpload} multiple = "false" />
              <div
                style={{
                  height: "60px",
                  width: "60px",
                  border: "1px solid black"
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
          )     
        };
      }

export default Profile;