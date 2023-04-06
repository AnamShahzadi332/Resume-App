import "./PriceList.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";

const PriceList = () => {
  return (
    <>
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
    </>
  );
};

export default PriceList;
