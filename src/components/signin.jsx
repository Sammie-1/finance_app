import React from 'react';
import styles from '../styles/SignIn.module.css';
import logo from '../assets/logo.svg';
import google from '../assets/Google.svg';
import vector11 from '../assets/Vector 11.svg';
import elips from '../assets/Elips.svg';
import image from '../assets/image.png';

const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <div className={styles.signIn1}>
        <div className={styles.titel}>
          <div className={styles.welcomeBack}>Welcome back</div>
          <div className={styles.welcomeBackPlease}>Welcome back! Please enter your details</div>
        </div>
        <div className={styles.main}>
          <div className={styles.inputParent}>
            <div className={styles.input}>
              <div className={styles.emailWrapper}>
                <div className={styles.email}>Email</div>
              </div>
              <div className={styles.enterYourEmailWrapper}>
                <div className={styles.email}>Enter your email</div>
              </div>
            </div>
            <div className={styles.input1}>
              <div className={styles.passwordWrapper}>
                <div className={styles.email}>Password</div>
              </div>
              <div className={styles.elipsWrapper}>
                <img className={styles.elipsIcon} alt="" src={elips} />
              </div>
            </div>
          </div>
          <div className={styles.rememberParent}>
            <div className={styles.remember}>
              <div className={styles.rememberChild} />
              <div className={styles.email}>Remember for 30 Days</div>
            </div>
            <div className={styles.forgotPassword}>Forgot password</div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.buttons}>
            <div className={styles.button}>
              <div className={styles.welcomeBack}>Sign in</div>
            </div>
            <div className={styles.button1}>
              <img className={styles.icongoogle} alt="" src={google} />
              <div className={styles.welcomeBack}>Sign in with google</div>
            </div>
          </div>
          <div className={styles.dontHaveAnAccountSignUpParent}>
            <div className={styles.dontHaveAnContainer}>
              <span>
                <span>Don't have an account?</span>
                <span className={styles.span}>{` `}</span>
              </span>
              <span className={styles.signUpFor}>Sign up for free</span>
            </div>
            <img className={styles.frameChild} alt="" src={vector11} />
          </div>
        </div>
      </div>
      <div className={styles.image}>
        <img className={styles.imageIcon} alt="" src={image} />
        <div className={styles.overlay} />
      </div>
      <div className={styles.logo}>
        <img className={styles.excludeIcon} alt="" src={logo} />
        <b className={styles.maglo}>Maglo.</b>
      </div>
    </div>
  );
};

export default SignIn;
                								