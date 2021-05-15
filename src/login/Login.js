import react from "react";
import classes from "./Login.module.css";
import logo from "../assets/logo.svg";
import { Redirect } from "react-router";

export default function Login() {
  const renderDashboard = () => {
    fetch("http://localhost:8888/dashboard").then(() => console.log("hello"));
  };
  return (
    <section className={classes.loginPage}>
      <div className={classes.loginPageContainer}>
        <div className={classes.loginPageSection}>
          <div className={classes.loginpageDivider}>
            <div className={classes.loginPageLogo}>
              <img src={logo} className={classes.loginPageLogoImage}></img>
              <h3 className={classes.loginPageLogoText}>
                fikraCamps dashboard
              </h3>
            </div>
            <div className={classes.form}>
              <label for="">User Name</label>
              <input type="text" value="admin" />
              <label for="">password</label>
              <input type="password" value="admin123" />
              <button onClick={renderDashboard} formMethod="POST">
                Login
              </button>
              <input type="checkbox" name="Remember" />
              <label for="Remember">Remember me</label>
            </div>
          </div>
          <div className={classes.loginpageDivider}>
            <div className={classes.loginPageCopyright}>
              {" "}
              A system by <a href="">saif faisal</a>
            </div>
          </div>
        </div>
        <div className={classes.loginPageSection}>
          <h2 className={classes.loginPagepromo}>
            the favorite dashboard in the ares
          </h2>
          <div className={classes.loginpageBackground}></div>
        </div>
      </div>
    </section>
  );
}

// <div className="main">
{
  /* <div className="login-page-logo-div">
  <img style="width: 40px; height: 40px" src="./images/a.jpg" />
  <span className="login-page-logo-text">FikraCamps Dashboard</span>
</div>
<div className="form">
  <label for="">User Name</label>
  <input type="text" value="admin" />
  <label for="">password</label>
  <input type="password" value="admin123" />
  <button>Login</button>
  <input type="checkbox" name="Remember" />
  <label for="Remember">Remember me</label>
</div> */
}
// </div>
