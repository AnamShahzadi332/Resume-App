import "./Footer.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <>
      <div className="footer-bg">
        <div className="footer-area">
          <Container className="container">
            <Row className="footer-row">
              <Col lg={4} md={6} sm={12}>
                <div className="footer-section-one">
                  <div className="footer-logo">
                    <Image
                      src="https://geeko.netlify.app/img/core-img/logo.png"
                      className="footer-img"
                    />
                    <h6>CV Builder</h6>
                  </div>
                  <p className="footer-p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Velit ducimus voluptatibus neque illo id repellat quisquam?
                    Autem expedita earum quae laborum ipsum ad.
                  </p>
                  <div className="social-icons">
                  <span><FacebookIcon/></span>
                  <span><TwitterIcon/></span>
                  <span><GoogleIcon/></span>
                  <span><InstagramIcon/></span>
                  <span><LinkedInIcon/></span>
                    
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <div className="footer-section-two">
                  <h5>PRIVACY & TOS</h5>
                  <a href="#">
                    <p>Advertiser Agreement</p>
                  </a>
                  <a href="#">
                    <p>Acceptable Use Policy</p>
                  </a>
                  <a href="#">
                    <p>Privacy Policy</p>
                  </a>
                  <a href="#">
                    <p>Technology Privacy</p>
                  </a>
                  <a href="#">
                    <p>Developer Agreement</p>
                  </a>
                </div>
              </Col>
              <Col lg={2} md={6} sm={12}>
                <div className="footer-section-two ">
                  <h5 className="media-h6">NAVIGATE</h5>
                  <a href="#">
                    <p>Advertisers</p>
                  </a>
                  <a href="#">
                    <p>Developers</p>
                  </a>
                  <a href="#">
                    <p>Resources</p>
                  </a>
                  <a href="#">
                    <p>Company</p>
                  </a>
                  <a href="#">
                    <p>Connect</p>
                  </a>
                </div>
              </Col>
              <Col lg={3} md={6} sm={!2}>
              <div className="footer-section-two ">
                  <h5 className="media-h6">CONTACT US</h5>
                <p className="footer-p">Mailing Address:xx00 E. Union Ave</p>
                <p className="footer-p">Suite 1100. Denver, CO 80237</p>
                <p className="footer-p">+999 90932 627</p>
                <p className="footer-p">support@yourdomain.com</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Footer;
