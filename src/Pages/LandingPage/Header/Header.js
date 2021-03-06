import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, admin, logOut } = useAuth();
  return (
    <div>
      <Navbar className="" bg="" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/home">
              <img
                src={logo}
                width="100"
                height="50"
                className="d-inline-block align-top"
                alt="MedSev"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse className="justify-content-end">
            <Nav
              className="mx-auto my-2 my-lg-0 justify-content-end "
              navbarScroll
            >
              <Link
                className="nav-bar  mx-2 text-yellow-600 hover:text-yellow-400 "
                to="/home"
              >
                Home
              </Link>

              <Link
                className="nav-bar  mx-2 text-yellow-600 hover:text-yellow-400 "
                to="/explore"
              >
                Explore
              </Link>

              {admin ? (
                <Link
                  className="nav-bar mx-2 text-yellow-600 hover:text-yellow-400 "
                  to="/dashboard/manageorders"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  className="nav-bar  mx-2 text-yellow-600 hover:text-yellow-400 "
                  to="/dashboard/myorders"
                >
                  Dashboard
                </Link>
              )}

              <Link
                className="nav-bar  mx-2 text-yellow-600 hover:text-yellow-400 "
                to="/about"
              >
                About us
              </Link>
              <Link
                className="nav-bar  mx-2 text-yellow-600 hover:text-yellow-400 "
                to="/contact"
              >
                Contact us
              </Link>
            </Nav>
            <Navbar.Text className="ps-5">
              {user?.email ? (
                <Link
                  to="/login"
                  onClick={logOut}
                  className="btn btn-warning font-extrabold hover:bg-yellow-400  hover:text-yellow-400  font-bold"
                >
                  Logout
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="btn  btn-warning hover:bg-yellow-300  hover:text-yellow-400 font-bold"
                >
                  Login
                </Link>
              )}
            </Navbar.Text>
            <Navbar.Text className="ps-2">
              {user?.email ? (
                <p className="text-dark fw-bold pt-3">{user?.displayName}</p>
              ) : (
                <Link
                  to="/register"
                  className="btn  btn-warning hover:bg-yellow-400 hover:text-yellow-400  mx-3"
                >
                  Signup
                </Link>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
