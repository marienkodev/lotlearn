import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, logOut } from "../features/session/sessionSlice"


// Import the NavLink component.
import { NavLink } from "react-router-dom";

export default function Header () {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogout = e => {
    dispatch(logOut())
  }

  // Replace the 4 <a> tags with <NavLink> components
  return (
    <div className="header">
      <NavLink to="/categories"className="headerarticles">Categories</NavLink>
      <NavLink to="/articles"   >Articles</NavLink>
      <NavLink to="/alcohol">Alcohol</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/about" >About</NavLink>
      {
        currentUser.username
        ? <>
              <NavLink to="/profile" >Profile</NavLink>
              <button onClick={handleLogout} className="logout"> Log Out </button>
            </>
          : <NavLink to="/sign-up" className="headersignup">Sign Up</NavLink>
        }
    </div>
  )
}
