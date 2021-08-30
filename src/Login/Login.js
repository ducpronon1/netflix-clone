import React, { useState } from "react";
import "./Login.css";
import SignInScreen from "./SignInScreen";

function Login() {
  const [signIn, setSignIn] = useState(false)
  return (
    <div className="login">
      <div className="loginScreen__gradient">
        <div className="login__logo">
          <img onClick={() => setSignIn(false)}  src="/netflix_logo.png" alt="" />
        </div>
        <button onClick={() => setSignIn(true)} className="login__signInButton">Sign In</button>
        {signIn? (
          <SignInScreen />
        ) : (
          <div className="login__body">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="login__box">
              <input type="text" placeholder="Email address" />
              <button onClick={() => setSignIn(true)}>Get Start</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
