import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Image } from 'bootstrap';
import validator from "validator";
import axios from "axios";


function Facebook() {
  
  const [login, setLogin] = useState(false);
  const [email, setEmail] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
  
    setPicture(response.picture.data.url);
    if (response.accessToken) {
        const data = {
            login,
            email,
            picture
        }
        const loginFacebook = async event => {
            event.preventDefault();
         await axios.post("/api/auth/register", data);
         
    
           
                
            

    }      

   
    }
  }



  return (
    <div class="container">
      <div style={{ width: '600px' }}>
        <div>
          { !login && 
            <FacebookLogin
            appId="1187014124996251"
               autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook" />
          }
          { login &&
            <Image src={picture} roundedCircle />
          }
        </div>
        { login &&
          <div>
            <div>{login}</div>
            <div>
              {email}
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Facebook;