import React, { useEffect } from "react";
import HomeScreen from "./HomeScreen/HomeScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Login from "./Login/Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profile from "./Profile/Profile";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return () => unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
      <Route path="/login">
              <Login />
            </Route>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
