import React from 'react'
import { Edit, TextInput } from 'admin-on-rest'

import tinymce from 'tinymce/tinymce'


import TinyMCEInput from 'aor-tinymce-input'

// react-tinymce use global ref
window.tinymce = tinymce

export const PostEdit = (props) => (
  <Edit>
    <TextInput source="title" />
    <TinyMCEInput source="content" />
  </Edit>
)

export default PostEdit;