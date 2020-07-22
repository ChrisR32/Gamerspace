import React, {useState, useContext} from "react";
import axios from "axios";
import {useHistory, useParams} from "react-router-dom";
import AuthContext from "../../Contexts/AuthContext";
import "../Category/CreateForms.scss";
import 'bootstrap';
import { Editor } from '@tinymce/tinymce-react';

const CreateForum = () => {
    const {user} = useContext(AuthContext);
    const {id} = useParams();
    const {forum} = useHistory();
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const handleOnSubmit = async event => {
        event.preventDefault();

        const data = {
            title,
            content,
            threadUser: user.name,
            threadAvatar: user.avatar,
            userId: user._id,
            forumId: id
            };

        const response = await axios.post('/api/thread/create', data);
        const {_id} = response.data;
        history.push('/thread/'+_id);

        
                
    };

    return (

        
        <div className="top-div login-bottom">        
            <h1>Create Thread</h1>

            <form className="forum" onSubmit={handleOnSubmit}>
            <div className="form-group">
            <label for="title-input">Thread Title</label>

                <input label="Title"
                        placeholder="Title"
                        itemId="title-input"
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}/>
            </div>
            <br/>
            <div class="wrap wrap-main">

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
            
            onMouseLeave={(event, Editor) => {
                const data = Editor.getContent()
                setContent(data)}
  
               
            
         }
            />
            
               </div>
            <br/>
                <button className="submit btn btn-primary btn-lg btn-block" type="submit">Create</button>
                
                </div>
                
            </form>
          
        </div>
    )
};

export default CreateForum;