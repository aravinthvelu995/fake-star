// Image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/logo.png";

// CSS
import "./Navbar.scss";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  const LogoutHandler = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light p-2 shadow-2xl">
      <div className="flex px-4">
        <ul className="mr-auto">
          <li>
            <img src={Logo} alt="Logo" className="logo" />
          </li>
        </ul>
        <ul className="ml-auto flex items-center justify-center">
          <li className="">
            <p className="name hidden md:block">{name}</p>
          </li>
          <li className="">
            <span className="logout">
              <button onClick={LogoutHandler}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                <p className="m-0 hidden md:block">Logout</p>
              </button>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
