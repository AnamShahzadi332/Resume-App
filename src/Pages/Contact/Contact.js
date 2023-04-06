import React from "react";
import "./Contact.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Contact = () => {
  return (
    <>
      <div className="contact-banner">
        <Container>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <div className="banner">
                <h1 className="bread-crums">Contact Us</h1>
                <div role="presentation" className="center">
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link
                      underline="hover"
                      color="inherit"
                      to="/home"
                      className="list-style-one"
                    >
                      Home
                    </Link>
                    <Typography color="text.primary" className="list-style-two">
                      Contact Us
                    </Typography>
                  </Breadcrumbs>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="contact-row-one">
              <div className="contact-dots">
                <span className="first-clr"></span>
                <span className="scnd-clr"></span>
                <span className="third-clr"></span>
                <span className="four-clr"></span>
                <span className="five-clr"></span>
                <span className="six-clr"></span>
                <span className="seven-clr"></span>
              </div>
              <h2 className="creative">Contact with Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="contact-margin">
          <Col sm={1} md={2} lg={2}></Col>
          <Col sm={10} md={4} lg={4}>
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
                  "& .MuiTextField-root": { m: 1, width: "46ch" },
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
          <Col sm={10} md={4} lg={4}>
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
                  "& .MuiTextField-root": { m: 1, width: "46ch" },
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
          <Col sm={1} md={2} lg={2}></Col>
        </Row>

        <Row className="contact-margin">
          <Col sm={1} md={2} lg={2}></Col>
          <Col sm={10} md={8} lg={8}>
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
                  "& .MuiTextField-root": { m: 1, width: "96ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-search"
                  label="Subject"
                  type="search"
                  variant="standard"
                />
              </Box>
            </div>
          </Col>
          <Col sm={1} md={2} lg={2}></Col>
        </Row>

        <Row className="contact-margin">
          <Col sm={1} md={2} lg={2}></Col>
          <Col sm={10} md={8} lg={8}>
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
                  "& .MuiTextField-root": { m: 1, width: "96ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-search"
                  label="Message"
                  variant="standard"
                  multiline
                  rows={4}
                  maxRows={4}
                />
              </Box>
            </div>
          </Col>
          <Col sm={1} md={2} lg={2}></Col>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={12}>
          <div className="send-btn">
                <Link to="/" className="send-msg">
                  Send message
                </Link>
              </div>
          </Col>
        </Row>
      </Container>
   
    </>
  );
};

export default Contact;
