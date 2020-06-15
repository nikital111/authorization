import React, { useState } from "react";
import firebaseConfig from "../../config/firebase.config";
import * as firebase from "firebase";
import "./FireBaseAuth.css";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router";

function FireBaseMain() {
  const [state, setState] = useState(false);

  const fire = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

  function getCookie(name) {
    let matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
          "=([^;]*)"
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  const signOut = () => {
    fire.auth().signOut();
    document.cookie = "user=queen.queen6556@gmail.com;path=/;max-age=0";
    setState(true);
  };

  return (
    <div className="cont">
      {getCookie("user") ? (
        <div>
          <h1>Hello {getCookie("user")}!</h1>
          <p>
            <button onClick={signOut}>Sign out</button>
          </p>
        </div>
      ) : (
        <NavLink exact to="/FireBaseAuth">
          <h1>Go to the registation</h1>
        </NavLink>
      )}
      {state ? <Redirect to="/FireBaseLogin" /> : null}
    </div>
  );
}

export default FireBaseMain;
