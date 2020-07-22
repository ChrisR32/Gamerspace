import React, {useState, useContext} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import AuthContext from "../../Contexts/AuthContext";
import { Editor } from '@tinymce/tinymce-react';
import "../Category/CreateForms.scss";
import 'bootstrap';

const CreatePost = () => {
    const {user} = useContext(AuthContext);
    const {id} = useParams();
    const history = useHistory();
    const [content, setPost] = useState("");



    const handleOnSubmit = async event => {
        event.preventDefault();

        const data = {
            content,
            userId: user._id,
            threadId: id,
            userName: user.name,
            userAvatar: user.avatar,
        };
        const response = await axios.post("/api/post/create", data);
        const {_id} = response.data;
        history.push('/post/'+_id);
    };

    return (

        <div>        
            

            <form className="forum" onSubmit={handleOnSubmit}>
    
            <div className="form-group">  

            <label for="content-input">Thread Content</label>

            <Editor 
            key={content}
            value={content}
            id="content-input"
            outputFormat='text'   
            type="text"
            apiKey="dg479guj522x2tikjfvn3pqyuovquznic0sj4s95sfxd99rg"
            itemId="content input"
            plugins="save a11ychecker advcode casechange formatpainter linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable"
            toolbar="save a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed permanentpen table"
            toolbar_mode='floating'
            submit_patch='true'
             onMouseLeave={(event, Post) => {
               const data = Post.getContent()
               setPost(data)
           }
        }

            />
               </div>
            <br/>
            <div class="wrap wrap-main">

                <button className="submit btn btn-primary btn-lg btn-block" type="submit">Reply</button>
                </div>
            </form>


        </div>


    )
};

export default CreatePost;