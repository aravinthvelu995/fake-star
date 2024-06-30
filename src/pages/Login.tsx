import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// CSS
import "./Login.scss";

// Image
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(defaultFormData);

  const [formError, setFormError] = useState(defaultFormErros);

  const onChangeHandler = (e: React.SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;

    setFormError({ ...formError, [name]: !value });

    setFormData({ ...formData, [name]: value });
  };

  const onSignInHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!formData.email) {
      setFormError({ ...formError, email: true });
      return;
    }

    if (!formData.password) {
      setFormError({ ...formError, password: true });
      return;
    }

    const registeredName = localStorage.getItem("registeredName");
    const registeredEmail = localStorage.getItem("registeredEmail");
    const registeredPassword = localStorage.getItem("registeredPassword");

    if (
      formData.email === registeredEmail &&
      formData.password === registeredPassword
    ) {
      localStorage.setItem("name", registeredName ?? "");
      localStorage.setItem("email", registeredEmail);
      localStorage.setItem("password", registeredPassword);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      setFormError({ ...formError, submit: true });
    }
  };

  return (
    <main className="login">
      <div className="login-wrapper">
        <img src={Logo} alt="Logo" className="logo m-auto md:m-0" />
        <div className="login-container">
          <div className="login-content w-full md:w-1/3">
            <div className="card p-0 md:p-6">
              <h1 className="title">Sign In</h1>
              <h6 className="sub-title">
                Ready to watch? Enter your email to login
              </h6>
              <form onSubmit={onSignInHandler}>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="E-Mail"
                    name="email"
                    value={formData.email}
                    onChange={onChangeHandler}
                  />
                  {formError.email ? (
                    <p className="error">E-Mail is invalid</p>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={onChangeHandler}
                  />
                  {formError.password ? (
                    <p className="error">Password is invalid</p>
                  ) : (
                    <></>
                  )}
                </div>
                {formError.submit ? (
                  <p className="error">Invalid Credentials</p>
                ) : (
                  <></>
                )}
                <div className="button-container">
                  <button className="button" type="submit">
                    Sign In
                  </button>
                </div>
              </form>
              <div className="button-container">
                <button className="button google-button">
                  <FontAwesomeIcon icon={faGoogle} className="brand-icon" />
                  Sign In with Google
                </button>
              </div>
              <hr className="my-4" />
              <div className="button-container">
                <Link to="/signup">Dont have an account? Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Login;

const defaultFormErros = {
  email: false,
  password: false,
  submit: false,
};

const defaultFormData = {
  email: "",
  password: "",
};
