import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import useAuth from "../../../Hooks/useAuth";
import logo from "../../../images/logo.png";

const Header = () => {
  //   const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar className="" bg="light" expand="lg">
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
              className="mx-auto my-2 my-lg-0 justify-content-end"
              // style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="nav-bar text-primary mx-2" to="/home">
                Home
              </Link>

              <Link className="nav-bar text-primary mx-2" to="/explore">
                Explore
              </Link>
              <Link className="nav-bar text-primary mx-2" to="/about">
                About us
              </Link>
              <Link className="nav-bar text-primary mx-2" to="/contact">
                Contact us
              </Link>
            </Nav>

            <Navbar.Text className="ps-5">
              <Link to="/register" className="btn btn-info mx-3">
                Signup
              </Link>{" "}
              <Link to="/login" className="btn btn-info">
                Login
              </Link>
              {/* {user?.displayName || user?.email ? (
                <Link to="/login" onClick={logOut} className="btn btn-info">
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="btn btn-info">
                  Login
                </Link>
              )}
              {user?.displayName || user?.email ? (
                <p>
                  Signed in as: <a href="#login">{user?.displayName} </a>
                </p>
              ) : (
                <Link to="/signup" className="btn btn-info mx-3">
                  Signup
                </Link>
              )} */}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
