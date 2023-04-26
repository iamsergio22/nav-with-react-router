import React from "react";
import {blogdata} from "./blogdata";
import { useNavigate, useParams } from "react-router-dom";

function BlogPost() {
  const { slug } = useParams();
  const navegate = useNavigate()
  const blogpost = blogdata.find(post => post.slug === slug);
const ReturnToBlog = ()=>{
    navegate('/Blog')
}
  return (
    <div>
      <h2>{blogpost.title}</h2>
      <button onClick={ReturnToBlog}>Volver a Blog</button>
      <p>Content</p>
      <p>Author</p>
    </div>
  );
}

export default BlogPost;
