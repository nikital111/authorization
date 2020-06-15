import React from "react";
import { useGoogleLogin } from "react-use-googlelogin";

function GoogleAuth() {
  const { signIn, signOut, googleUser, isSignedIn } = useGoogleLogin({
    clientId:
      "43700484165-m8rubl74lm2sb2p8lu6b04jraj02qsj9.apps.googleusercontent.com",
  });

  return (
    <div style={{ padding: "1rem" }}>
      <button onClick={signIn} style={{ marginRight: "1rem" }}>
        Sign in
      </button>
      <button onClick={signOut}>Sign Out</button>

      {isSignedIn ? (
        <div>
          <h1>{googleUser.profileObj.name}</h1>
          <img src={googleUser.profileObj.imageUrl} alt="Avatar." />
        </div>
      ) : null}
    </div>
  );
}

export default GoogleAuth;
