import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavLink exact to="/GoogleAuth">
        <button>Google auth</button>
      </NavLink>
      <NavLink exact to="/FireBaseAuth">
        <button>Firebase auth</button>
      </NavLink>
    </div>
  );
}

export default Home;
