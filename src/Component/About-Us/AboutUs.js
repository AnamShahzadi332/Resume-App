import "./AboutUs.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/esm/Button";
import ScrollAnimationItem from "react-scroll-fade-animation";

const AboutUs = () => {
  return (
    <>
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
            <div className="about-us-banner ">
              <ScrollAnimationItem path={"top"} offsetHeight={-400}>
                <Image src="https://geeko.netlify.app/img/core-img/cv.png" />
              </ScrollAnimationItem>
            </div>
          </Col>
        </Row>
      </Container>

      {/* section-2 */}
      <Container>
        <Row>
          <Col lg={12} ms={12} sm={12}>
            <div className="about-us-request">
              <Row>
                <Col lg={3}>
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
                <Col lg={4} md={6}>
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
