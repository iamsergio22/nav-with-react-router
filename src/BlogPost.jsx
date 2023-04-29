import React from "react";
import { blogdata } from "./blogdata";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "./auth";

function BlogPost() {
  const { slug } = useParams();
  const navegate = useNavigate();
  const auth = useAuth();
  const blogpost = blogdata.find((post) => post.slug === slug);
  const canDelete =
    auth.user?.isAdmin || blogpost.author === auth.user?.username;
  const ReturnToBlog = () => {
    navegate("/Blog");
  };
  return (
    <div>
      <h2>{blogpost.title}</h2>
      <button onClick={ReturnToBlog}>Volver a Blog</button>
      <p>{blogpost.content}</p>
      <p>{blogpost.author}</p>
      {auth.user?.isAdmin && <button>Eliminar post</button>}
    </div>
  );
}

export default BlogPost;
