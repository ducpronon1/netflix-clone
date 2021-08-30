import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import "./SignInScreen.css";

function SignInScreen() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const signIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((e) => alert(e.message));
  };
  const signUp = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="signIn">
      <h1>Sign In</h1>
      <input
        className="signIn__email"
        type="email"
        placeholder="Email or phone number"
        ref={emailRef}
      />
      <input
        className="signIn__password"
        type="password"
        placeholder="Password"
        ref={passwordRef}
      />
      <button className="signIn_button" onClick={signIn}>
        Sign In
      </button>

      <div className="option">
        <input type="checkbox" className="option__checkbox" />
        <span>Remember me</span>
        <Link to="#">Need help?</Link>
      </div>

      <div className="signIn__question">--New to Netflix?--</div>
      <button className="signIn_button" onClick={signUp}>
        Sign Up Now
      </button>
      <p className="captcha">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
        <Link to="#">Learn more</Link>
      </p>
    </div>
  );
}

export default SignInScreen;
