import React from "react";
import { useAuth } from "./auth";

function LogoutPage() {
  const auth=useAuth()
  const logout = (e) => {
    e.preventDefault();
    auth.logout()
  };
  return (
    <div>
      <h1>Logout</h1>
      <form action="">
        <label htmlFor="">¿Seguro que deseas salir?</label>

        <button type="submit" onClick={logout}>
          Salir
        </button>
      </form>
    </div>
  );
}

export default LogoutPage;
