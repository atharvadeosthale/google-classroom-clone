import { Avatar, IconButton } from "@material-ui/core";
import { Add, Apps, Menu } from "@material-ui/icons";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../firebase";
import "./Navbar.css";

function Navbar() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          alt="Google Logo"
          className="navbar__logo"
        />{" "}
        <span>Classroom</span>
      </div>
      <div className="navbar__right">
        <IconButton>
          <Add />
        </IconButton>
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton onClick={logout}>
          <Avatar src={user?.photoURL} />
        </IconButton>
      </div>
    </nav>
  );
}

export default Navbar;
