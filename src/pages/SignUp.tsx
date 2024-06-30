import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// CSS
import "./Signup.scss";

// Image
import Logo from "../assets/logo.png";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(defaultFormData);

  const [formError, setFormError] = useState(defaultFormErros);

  const onChangeHandler = (e: React.SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;

    setFormError({ ...formError, [name]: !value });

    setFormData({ ...formData, [name]: value });
  };

  const onSignUpHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!formData.name) {
      setFormError({ ...formError, name: true });
      return;
    }

    if (!formData.email) {
      setFormError({ ...formError, email: true });
      return;
    }

    if (!formData.password) {
      setFormError({ ...formError, password: true });
      return;
    }

    localStorage.setItem("registeredName", formData.name);
    localStorage.setItem("registeredEmail", formData.email);
    localStorage.setItem("registeredPassword", formData.password);

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <main className="signup">
      <div className="signup-wrapper">
        <img src={Logo} alt="Logo" className="logo m-auto md:m-0" />
        <div className="signup-container">
          <div className="signup-content w-full md:w-1/3">
            <div className="card p-0 md:p-6">
              <h1 className="title">Sign Up</h1>
              <form onSubmit={onSignUpHandler}>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={onChangeHandler}
                  />
                  {formError.email ? (
                    <p className="error">Name is invalid</p>
                  ) : (
                    <></>
                  )}
                </div>
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
              <hr className="my-4" />
              <div className="button-container">
                <Link to="/login">Have an account? Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default SignUp;

const defaultFormErros = {
  name: false,
  email: false,
  password: false,
  submit: false,
};

const defaultFormData = {
  name: "",
  email: "",
  password: "",
};
