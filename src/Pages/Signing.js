import React, { useState } from "react";
import styles from "./signing.module.css";
import classNames from "classnames/bind";

const SignUp = () => {
  const [isSignUpButtonClicked, setSignUpButtonClicked] = useState();

  var cx = classNames.bind(styles);
  return (
    <div className={styles.body}>
      <div
        className={cx(
          { container: true },
          { rightPanelActive: isSignUpButtonClicked }
        )}
        id="container"
      >
        <div className={cx({ formContainer: true }, { signUpContainer: true })}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h1>Create Account</h1>
  
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Cin" />
            <input type="email" placeholder="Email" />
            <input type="email" placeholder="Phone" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className={cx({ formContainer: true }, { signInContainer: true })}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h1>Sign in</h1>
         
          
            <input type="Cin" placeholder="Cin" />
            <input type="password" placeholder="Password" />
            <a href="./">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={cx({ overlayPanel: true }, { overlayLeft: true })}>
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => {
                  setSignUpButtonClicked(false);
                }}
                className={styles.ghost}
                id="signIn"
              >
                Sign In
              </button>
            </div>
            <div className={cx({ overlayPanel: true }, { overlayRight: true })}>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                onClick={() => {
                  setSignUpButtonClicked(true);
                }}
                className={styles.ghost}
                id="signUp"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
