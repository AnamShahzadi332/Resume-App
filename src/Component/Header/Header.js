import "./Header.css";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Outlet, Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Footer from "../Footer/Footer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
  // login
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //signup
  const [showone, setShowOne] = useState(false);
  const handleCloseOne = () => setShowOne(false);
  const handleShowOne = () => setShowOne(true);

  // background - sticky-with-color;
  window.addEventListener("scroll", () => {
    const scrollHeight = document.body.scrollHeight;
    const clientHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const scrollPercent = (scrollY / (scrollHeight - clientHeight)) * 100;
    console.log(scrollPercent);
    if (scrollPercent > 1.5) {
      document.getElementById("mynav").className =
        "navbar navbar-expand navbar-light fixed-top bg-sticky";
    } else {
      document.getElementById("mynav").className =
        "navbar navbar-expand navbar-light fixed-top";
    }
  });

  return (
    <>
      <div>
        <Navbar id="mynav" fixed="top">
          <Container>
            <Image src="https://geeko.netlify.app/img/core-img/logo.png" />
            <Navbar.Brand href="#home" className="navbar">
              CV Builder.
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="nav">
                <div className="header-links">
                  <Link to="/" className="navlink">
                    Home
                  </Link>
                  <Link to="/aboutus" className="navlink">
                    About Us
                  </Link>
                  <Link to="/blog" className="navlink">
                    Blog
                  </Link>
                  <Link to="/price" className="navlink">
                    Pricing
                  </Link>
                  <Link to="/templates" className="navlink">
                    Templates
                  </Link>
                  <Link to="/contact" className="navlink">
                    Contact
                  </Link>
                </div>
                <div className="register-btn">
                  <Link
                    className="login"
                    variant="primary"
                    onClick={handleShow}
                  >
                    Log IN
                  </Link>
                  <Link
                    onClick={handleShowOne}
                    variant="primary"
                    className="login"
                  >
                    SignUp
                  </Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Modal-login */}
      <Modal show={show} onHide={handleClose}>
        <Container>
          <Modal.Header closeButton>
            <h3>Login Form</h3>
          </Modal.Header>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "50ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-search"
                    label="Email"
                    type="email"
                    variant="standard"
                  />
                </Box>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "13px",
                }}
              >
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "50ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                  />
                </Box>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={4} md={4} lg={4}>
              <div>
                <Link to="/" className="modal-login">
                  Login
                </Link>
              </div>
            </Col>
            <Col sm={8} md={8} lg={8}>
              <p className="dont">
                Don't have an account?{" "}
                <span>
                  <Link to="/">Sign up</Link>
                </span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={12} className="other-margin">
              <div className="other-accounts">
                <p className="other-p">Login with other account</p>
                <div className="social-links">
                  <span>
                    <FacebookIcon />
                  </span>
                  {/* <span>
                    <TwitterIcon />
                  </span> */}
                  <span>
                    <GoogleIcon />
                  </span>
                  {/* <span>
                    <InstagramIcon />
                  </span>
                  <span>
                    <LinkedInIcon />
                  </span> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal>

      {/* Modal-signup */}
      <Modal show={showone} onHide={handleCloseOne}>
        <Container>
          <Modal.Header closeButton>
            <h3>Signup Form</h3>
          </Modal.Header>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "50ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-search"
                    label="Name"
                    type="search"
                    variant="standard"
                  />
                </Box>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "50ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-search"
                    label="Email"
                    type="email"
                    variant="standard"
                  />
                </Box>
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={12} lg={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "13px",
                }}
              >
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "50ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                  />
                </Box>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "13px",
                }}
              >
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "50ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-password-input"
                    label="Confirm Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                  />
                </Box>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={4} md={4} lg={4}>
              <div>
                <Link to="/" className="modal-login">
                  SignUp
                </Link>
              </div>
            </Col>
            <Col sm={8} md={8} lg={8}>
              <p className="have">
                <span> If you have an account. </span>
                <span className="color">
                  <Link to="/">Login</Link>
                </span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={12} lg={12} className="other-margin">
              <div className="other-accounts">
                <p className="other-p">Login with other account</p>
                <div className="social-links">
                  <span>
                    <FacebookIcon />
                  </span>
                  {/* <span>
                    <TwitterIcon />
                  </span> */}
                  <span>
                    <GoogleIcon />
                  </span>
                  {/* <span>
                    <InstagramIcon />
                  </span>
                  <span>
                    <LinkedInIcon />
                  </span> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal>

      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
