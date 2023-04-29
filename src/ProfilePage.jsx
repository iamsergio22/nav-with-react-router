import React from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

function ProfilePage() {
  const auth = useAuth();
  
  return (
    <>
      <h1>Profile</h1>
      <p>Bienvenido, {auth.user.username}</p>
    </>
  );
}

export default ProfilePage;
