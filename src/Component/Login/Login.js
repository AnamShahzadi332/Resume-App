import "./Login.css";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* Modal */}
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
                  {" "}
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
                  <span>
                    <TwitterIcon />
                  </span>
                  <span>
                    <GoogleIcon />
                  </span>
                  <span>
                    <InstagramIcon />
                  </span>
                  <span>
                    <LinkedInIcon />
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal>
    </>
  );
}
