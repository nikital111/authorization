import React, { useState } from "react";
import firebaseConfig from "../../config/firebase.config";
import * as firebase from "firebase";
import "./FireBaseAuth.css";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";

function FireBaseLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState(false);

  const fire = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

  const login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        alert(error.message);
        console.log(error.code);
        return error;
      })
      .then((err) => {
        console.log(err);
        if (!err.code) {
          document.cookie = `user=${
            fire.auth().currentUser.email
          }; max-age=3600; path=/`;
          setState(true);
        }
      });
  };

  return (
    <div className="cont">
      <form className="fireForm">
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
        <NavLink exact to="/FireBaseAuth">
          <button className="butt">Registration</button>
        </NavLink>
      </form>
      {state ? <Redirect to="/FireBaseMain" /> : null}
    </div>
  );
}

export default FireBaseLogin;
