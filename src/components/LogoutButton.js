import React from "react";
import { withRouter } from "react-router-dom";

function LogoutButton({ logout, history }) {
  const handleClick = () => {
    logout();
    history.push("/");
  };
  return (
    <button className="nav-menu me-0 ms-auto" onClick={handleClick}>
      Logout
    </button>
  );
}

export default withRouter(LogoutButton);
