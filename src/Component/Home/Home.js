import "./Home.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const Home = () => {
  return (
    <>
      <Container>
        <Row className="home-margin">
          <Col lg={6} md={12} sm={12}>
            <div className="welcome-content">
              <div className="promo-section">
                <span className="itergraiot-icon">
                  <Image
                    src="https://geeko.netlify.app/img/svg/img-dollar.svg"
                    alt
                  />
                </span>
                <span className="integration-text">
                  Discover the Easiest ways to Build Your CV!
                </span>
              </div>
              <div className="animated animatedFadeInUp fadeInUp">
                <h1 className="welcome-content-h1">
                  Online CV Builder With Creative Templates
                </h1>
                <p className="welcome-content-p">
                  Our Perfect resume builder takes the hassle out of resume
                  writing. Choose from several templates and follow easy prompts
                  to create the perfect job-ready resume.
                </p>
                <div className="welcome-content-btn">
                  <Button className="btn-1">CHOOSE TEMPLATE</Button>
                  <Button className="btn-2">CONTACT US</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className="welcome-content-image">
              <Image
                src="https://geeko.netlify.app/img/core-img/banner2.png"
                className="image"
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* //About Us */}
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
    </>
  );
};

export default Home;
