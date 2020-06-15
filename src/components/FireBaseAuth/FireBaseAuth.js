import React, { useState } from "react";
import firebaseConfig from "../../config/firebase.config";
import * as firebase from "firebase";
import app from "firebase/app";
import "./FireBaseAuth.css";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";

function FireBaseAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState(false);

  const fire = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

  console.log(state);
  const register = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        alert(error.message);
        console.log(error.code);
        return error;
      })
      .then((err) => {
        console.log(err);
        if (!err.code) setState(true);
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
        <button onClick={register}>Register</button>
        <NavLink exact to="/FireBaseLogin">
          <button className="butt">Login</button>
        </NavLink>
      </form>
      {state ? <Redirect to="/FireBaseLogin" /> : null}
    </div>
  );
}

export default FireBaseAuth;
