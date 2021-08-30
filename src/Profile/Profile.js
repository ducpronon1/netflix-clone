import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../HomeScreen/Nav";
import "./Profile.css";

function Profile() {
  const user = useSelector(selectUser);
  const history = useHistory()
  return (
    <div>
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
            alt="avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans (Current Plan: premium)</h3>
              <div className="plan">
                <div className="title">Netflix Standard</div>
                <button>Subcrible</button>
              </div>
              <div className="plan">
                <div >Netflix Premium 4K+HDR</div>
                <button className="current">Current Package</button>
              </div>

              <button
                onClick={() => {
                    auth.signOut()
                    history.push("/login")
                }}
                className="profileScreen__signOut"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
