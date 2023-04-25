import React from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  const rutas = [];
  rutas.push({
    to: '/blog',
    text: 'BLOG',
  })
    rutas.push({
      to: '/profile',
      text: 'PROFILE',
    })
  return (
    <nav>
      <ul>
        {rutas.map(ruta=>(
          <li><NavLink to={ruta.to}>{ruta.text}</NavLink></li>
        ))}
      </ul>
    </nav>
  );
}


export default Menu;
