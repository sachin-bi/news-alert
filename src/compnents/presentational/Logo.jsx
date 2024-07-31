import { Link, NavLink } from "react-router-dom";
import React from 'react';

export default function Logo() {
  return (
    <Link to="/"> 
      <span>
        <h2 className="font-extrabold font-sans text-2xl text-red-800 ">
          NEWS ALERT
        </h2>
      </span>
    </Link>
  );
}
