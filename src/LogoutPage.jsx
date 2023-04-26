import React from "react";

function LogoutPage() {
  const logout = (e) => {
    e.preventDefault();
    console.log("asdasdasd");
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
