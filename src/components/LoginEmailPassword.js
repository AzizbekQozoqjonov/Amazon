import React, { useState } from "react";
import "../styles/LoginEmailPassword.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link, useHistory } from "react-router-dom";
import {auth, provider} from "../firebase";

function LoginEmailPassword() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signInWithEmail = (e) => {
    auth.signInWithEmailAndPassword(email, password)
    .then((user) => {
      if(user){
        history.push("/")
      }
    })
    .catch(err => alert(err.messege));
    e.preventDefault();
  }

  const createAccountWithEmail = (e) => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(user => console.log(user))
    .catch(err => console.log(err));
    e.preventDefault();
  }

  const [dropped, setDropped] = useState(false);
  const dropDown = (e) => {
    const dropLinks = document.querySelector(".dropDownLinks");
    const dropIcon = document.querySelector(".dropIcon");
    if (!dropped) {
      dropLinks.style.display = "flex";
      setDropped(true);
    } else {
      dropLinks.style.display = "none";
      setDropped(false);
    }
  };
  return (
    <div className="loginEmailPassword">
     <Link to="/">
     <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG6.png"
        alt="Amazon Logo"
        className="header_logo"
      />
      </Link>
      <div className="loginContainer">
        <h1>Sign-In</h1>
        <form action="#" id="form">
          <label htmlFor="email">Email or mobile phone number</label>
          <input type="email" id="email" onChange={e => setEmail(e.target.value)}/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={e => setPassword(e.target.value)}/>
          <button type="submit" onClick={signInWithEmail}>Continue</button>
          <p>
            By continuing, you agree to Amazon's <Link>Conditions of Use</Link>{" "}
            and <Link>Privacy Notice.</Link>
          </p>
          <div className="help" onClick={dropDown}>
            {!dropped ? (
              <ArrowRightIcon className="dropIcon" />
            ) : (
              <ArrowDropDownIcon className="dropIcon" />
            )}
            <Link>Need help?</Link>
          </div>
          <div className="dropDownLinks">
            <Link>Forgot your Password?</Link>
            <Link>Other issuse with Sign-In</Link>
          </div>
        </form>
      </div>
      <button onClick={createAccountWithEmail} id="create_account">Create your Amazon Account</button>
    </div>
  );
}

export default LoginEmailPassword;
