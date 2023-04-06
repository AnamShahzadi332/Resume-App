import React from "react";
import "./Price.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Button from "react-bootstrap/esm/Button";
import Image from "react-bootstrap/Image";

function Price() {
  return (
    <>
      <div className="price-banner">
        <Container>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <div className="banner">
                <h1 className="bread-crums">Our Pricing</h1>
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
                      Pricing
                    </Typography>
                  </Breadcrumbs>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* section-1 */}
      <Container>
        <Row className="price-list-margin">
          <Col lg={4} md={6} sm={12}>
            <div className="price-list-box1">
              <div className="price-list-dots">
                <span className="first-clr"></span>
                <span className="scnd-clr"></span>
                <span className="third-clr"></span>
                <span className="four-clr"></span>
                <span className="five-clr"></span>
                <span className="six-clr"></span>
                <span className="seven-clr"></span>
              </div>
              <h4 className="price-list-h4">Our Pricing</h4>
              <p className="price-list-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
                sit amet convallis nunc scelerisque in.
              </p>
              <div className="price-list-box">
                <span>Lets Build CV</span>
                <p>with 7days of Free Trial</p>
              </div>
              <div className="price-list-btn">
                <span>Terms & Conditions</span>
                <p>subject to change with perior notice</p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="price-list-card">
              <div className="price-list-text">
                <h1>$9.99</h1>
                <h5>/ month</h5>
              </div>
              <div className="price-list-detail">
                <h3>Monthly Pack</h3>
                <p>
                  You will be billed per month, and get unlimited access to all
                  resume Templates and new added ones
                </p>
              </div>
              <div className="price-list-btnn">
                <Button className="price-list-button">Get Started</Button>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="price-list-card">
              <div className="price-list-text">
                <h1>$7.99</h1>
                <h5>/ month</h5>
              </div>
              <div className="price-list-detail">
                <div className="price-list-span">
                  <h3>Yearly Pack</h3>
                  <span>Save 20%</span>
                </div>
                <p>
                  You will be billed per month, and get unlimited access to all
                  resume Templates and new added ones
                </p>
              </div>
              <div className="price-list-btnn">
                <Button className="price-list-button">Get Started</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* section-2 */}
      <Container>
        {/* row-one */}
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="price-row-2">
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

export default Price;
