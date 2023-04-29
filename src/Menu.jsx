import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./auth";

function Menu() {
  const auth = useAuth();
  const rutas = [];
  if (!auth.user) {
    rutas.push({
      to: "/blog",
      text: "BLOG",
    });

    rutas.push({
      to: "/login",
      text: "LOGIN",
    });
  } else {
    rutas.push({
      to: "/blog",
      text: "BLOG",
    });

    rutas.push({
      to: "/profile",
      text: "PROFILE",
    });
    rutas.push({
      to: "/logout",
      text: "LOGOUT",
    });
  }

  return (
    <nav>
      <ul>
        {rutas.map((ruta) => (
          <li>
            <NavLink key={ruta.to} to={ruta.to}>
              {ruta.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
