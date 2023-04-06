import React from "react";
import "./Templates.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/Image";

function Templates() {
  return (
    <>
      <div className="templates-banner">
        <Container>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <div className="banner">
                <h1 className="bread-crums">Our Templates</h1>
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
                      Our Templates
                    </Typography>
                  </Breadcrumbs>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* section-1 */}
      <div className="template-bg">
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="template-row-1">
                <div className="template-dots">
                  <span className="first-clr"></span>
                  <span className="scnd-clr"></span>
                  <span className="third-clr"></span>
                  <span className="four-clr"></span>
                  <span className="five-clr"></span>
                  <span className="six-clr"></span>
                  <span className="seven-clr"></span>
                </div>
                <h2 className="creative">Our Creative Templates</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </Col>
          </Row>

          <Row className="template-margin">
            <Col lg={4} md={6} sm={12}>
              <div className="template-box-one">
                <Image
                  src="https://geeko.netlify.app/img/demos/demo-1.png"
                  className="img-responsive"
                />
                <div className="template-btn">
                  <Button className="template-button-one">
                    See Template →
                  </Button>
                  <Button className="template-button-two">
                    Use Template →
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="template-box-one">
                <Image
                  src="https://geeko.netlify.app/img/demos/demo-2.png"
                  className="img-responsive"
                />
                <div className="template-btn">
                  <Button className="template-button-one">
                    See Template →
                  </Button>
                  <Button className="template-button-two">
                    Use Template →
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="template-box-one">
                <Image
                  src="https://geeko.netlify.app/img/demos/demo-3.png"
                  className="img-responsive"
                />
                <div className="template-btn">
                  <Button className="template-button-one">
                    See Template →
                  </Button>
                  <Button className="template-button-two">
                    Use Template →
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        {/* row-one */}
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="template-row-2">
              <div className="template-dots">
                <span className="first-clr"></span>
                <span className="scnd-clr"></span>
                <span className="third-clr"></span>
                <span className="four-clr"></span>
                <span className="five-clr"></span>
                <span className="six-clr"></span>
                <span className="seven-clr"></span>
              </div>
              <h2 className="creative">Our Main Features</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </Col>
        </Row>
        {/* row-two */}
        <Row className="card-margin">
          <Col lg={4} md={6} sm={12}>
            <div className="template-card">
              <div className="template-icon">
                <Image src="https://geeko.netlify.app/img/icons/f1.png" />
              </div>
              <h6 className="template-card-h6">
                Proven CV Templates to increase Hiring Chance
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla
                neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum
                adipiscing elit.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="template-card">
              <div className="template-icon">
                <Image src="https://geeko.netlify.app/img/icons/f2.png" />
              </div>
              <h6 className="template-card-h6">
                Creative, Modern and Clean Templates Design
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla
                neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum
                adipiscing elit.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="template-card">
              <div className="template-icon">
                <Image src="https://geeko.netlify.app/img/icons/f3.png" />
              </div>
              <h6 className="template-card-h6">
                Easy and Intuitive Online CV and Resume Builder
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla
                neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum
                adipiscing elit.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="template-card">
              <div className="template-icon">
                <Image src="https://geeko.netlify.app/img/icons/f4.png" />
              </div>
              <h6 className="template-card-h6">
              Free to use. Developed by hiring professionals.
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla
                neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum
                adipiscing elit.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
          <div className="template-card">
              <div className="template-icon">
                <Image src="https://geeko.netlify.app/img/icons/f5.png" />
              </div>
              <h6 className="template-card-h6">
              Recruiter Approved Phrases with Module Notification
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla
                neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum
                adipiscing elit.
              </p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
          <div className="template-card">
              <div className="template-icon">
                <Image src="https://geeko.netlify.app/img/icons/f6.png" />
              </div>
              <h6 className="template-card-h6">
              Fast Easy CV and Resume Formatting
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla
                neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum
                adipiscing elit.
              </p>
            </div>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default Templates;
