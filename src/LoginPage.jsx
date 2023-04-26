import React,{useState} from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const login = (e) => {
    e.preventDefault();
    console.log("adasd");
  };
  return (
    <div>
      <h1>Login</h1>
      <form action="">
        <label htmlFor="">Escrieb tu nombre de usuario:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" onClick={login}>Entrar</button>
      </form>
    </div>
  );
}

export default LoginPage;
