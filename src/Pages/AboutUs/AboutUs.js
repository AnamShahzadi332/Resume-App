import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./AboutUs.css";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const AboutUs = () => {
  return (
    <>
      <div className="about-banner">
        <Container>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <div className="banner">
                <h1 className="bread-crums">About Us</h1>
                <div role="presentation" className="center">
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link
                      underline="hover"
                      color="inherit"
                      to="/templates"
                      className="list-style-one"
                    >
                      Home
                    </Link>
                    <Typography color="text.primary" className="list-style-two">
                      About Us
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
        <Row className="about-us-margin">
          <Col lg={6} md={12} sm={12}>
            <div className="about-us-content">
              <div className="about-us-dots">
                <span className="first-clr"></span>
                <span className="scnd-clr"></span>
                <span className="third-clr"></span>
                <span className="four-clr"></span>
                <span className="five-clr"></span>
                <span className="six-clr"></span>
                <span className="seven-clr"></span>
              </div>
              <h4 className="about-us-h4">We Deliver The Best</h4>
              <div className="list-wrap">
                <div className="flex">
                  <div className="about-us-icon">
                    <Image src="https://geeko.netlify.app/img/icons/check.png" />
                  </div>
                  <div className="about-us-text">
                    Proven CV Templates to increase Hiring Chance
                  </div>
                </div>

                <div className="flex">
                  <div className="about-us-icon">
                    <Image src="https://geeko.netlify.app/img/icons/check.png" />
                  </div>
                  <div className="about-us-text">
                    Creative and Clean Templates Design
                  </div>
                </div>

                <div className="flex">
                  <div className="about-us-icon">
                    <Image src="https://geeko.netlify.app/img/icons/check.png" />
                  </div>
                  <div className="about-us-text">
                    Easy and Intuitive Online CV Builder
                  </div>
                </div>

                <div className="flex">
                  <div className="about-us-icon">
                    <Image src="https://geeko.netlify.app/img/icons/check.png" />
                  </div>
                  <div className="about-us-text">
                    Free to use. Developed by hiring professionals.
                  </div>
                </div>
                <div className="flex">
                  <div className="about-us-icon">
                    <Image src="https://geeko.netlify.app/img/icons/check.png" />
                  </div>
                  <div className="about-us-text">
                    Fast Easy CV and Resume Formatting
                  </div>
                </div>
                <div className="flex">
                  <div className="about-us-icon">
                    <Image src="https://geeko.netlify.app/img/icons/check.png" />
                  </div>
                  <div className="about-us-text">
                    Recruiter Approved Phrases.
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className="about-us-banner">
              <Image src="https://geeko.netlify.app/img/core-img/cv.png" />
            </div>
          </Col>
        </Row>
      </Container>
      {/* section-2 */}
      <div className="home-bg">
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <div className="services-1">
                {/* box-1 */}
                <div className="inner-box">
                  <div className="inner-box-icon">
                    <Image src="https://geeko.netlify.app/img/icons/d1.png" />
                  </div>
                  <div className="text">
                    <h3 className="inner-box-h3">Easy Online Resume Builder</h3>
                    <p className="inner-box-p">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Laudantium modi assumenda.
                    </p>
                  </div>
                </div>
              </div>
              {/* box-2 */}
              <div className="services-2">
                <div className="inner-box">
                  <div className="inner-box-icon">
                    <Image src="https://geeko.netlify.app/img/icons/d2.png" />
                  </div>
                  <div className="text">
                    <h3 className="inner-box-h3">Step by Step Expert Tips</h3>
                    <p className="inner-box-p">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                      skaj gjska consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              </div>
              {/* box-3 */}
              <div className="services-2">
                <div className="inner-box">
                  <div className="inner-box-icon">
                    <Image src="https://geeko.netlify.app/img/icons/d3.png" />
                  </div>
                  <div className="text">
                    <h3 className="inner-box-h3">Recruiter Approved Phrases</h3>
                    <p className="inner-box-p">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Laudantium modi.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="home-content">
                <div className="home-content-dots">
                  <span className="first-clr"></span>
                  <span className="scnd-clr"></span>
                  <span className="third-clr"></span>
                  <span className="four-clr"></span>
                  <span className="five-clr"></span>
                  <span className="six-clr"></span>
                  <span className="seven-clr"></span>
                </div>
                <h4 className="home-content-h4">Why Choose Our Platform?</h4>
                <p className="home-content-p1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  at dictum risus, non suscipit arcu. Quisque aliquam posuere
                  tortor, sit amet convallis nunc scelerisque in.
                </p>
                <p className="home-content-p2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Labore eius molestiae facere, natus reprehenderit eaque eum,
                  autem ipsam. Magni, error. Tempora odit laborum iure inventore
                  possimus laboriosam qui nam. Fugit!
                </p>
                <div className="welcome-content-btn">
                  <Button className="btn-1">LETS BUILD YOUR CV</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
       {/* section-3 */}
       <Container>
        <Row>
          <Col lg={12} ms={12} sm={12}>
            <div className="about-us-request">
            <Row>
                <Col lg={3} >
                <Image
                  src="https://geeko.netlify.app/img/core-img/custom.png"
                  className="about-img"
                />
                </Col>
                <Col lg={5} md={6}>
                <h2 className="about-box-h2">
                    Do you Need a Complete Custom CV Template?
                  </h2>
                </Col>
                <Col lg={4} md={6} >
                <div className="about-box-btn">
                    <Button className="about-box-button">Send a Rquest</Button>
                    </div>
                </Col>
            </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
