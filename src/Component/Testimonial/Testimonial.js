import "./Testimonial.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className="testimonial">
              <div className="testimonial-dots">
                <span className="first-clr"></span>
                <span className="scnd-clr"></span>
                <span className="third-clr"></span>
                <span className="four-clr"></span>
                <span className="five-clr"></span>
                <span className="six-clr"></span>
                <span className="seven-clr"></span>
              </div>
              <h2 className="testimonial-creative">
                Your Success, Our Inspiration
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Testimonial start */}
      <Container>
        <Slider {...settings}>
          <div>
            <div className="testimonial-card">
              <div className="testimonial-img">
                <Image
                  src="https://geeko.netlify.app/img/test-img/1.jpg"
                  className="test-img"
                />
              </div>

              <p className="p">
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla
                neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum
                adipiscing elit.
              </p>
              <h6>Sunny Khan</h6>
              <p className="p2">One of our Clients</p>
            </div>
          </div>
          <div>
            <div className="testimonial-card">
              <div className="testimonial-img">
                <Image
                  src="https://geeko.netlify.app/img/test-img/3.jpg"
                  className="test-img"
                />
              </div>

              <p className="p">
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla
                neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum
                adipiscing elit.
              </p>
              <h6>Jebin Khan</h6>
              <p className="p2">One of our Clients</p>
            </div>
          </div>
          <div>
            <div className="testimonial-card">
              <div className="testimonial-img">
                <Image
                  src="https://geeko.netlify.app/img/test-img/2.jpg"
                  className="test-img"
                />
              </div>

              <p className="p">
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla
                neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum
                adipiscing elit.
              </p>
              <h6>Ajoy Das</h6>
              <p className="p2">One of our Clients</p>
            </div>
          </div>
          <div>
            <div className="testimonial-card">
              <div className="testimonial-img">
                <Image
                  src="https://geeko.netlify.app/img/test-img/1.jpg"
                  className="test-img"
                />
              </div>

              <p className="p">
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla
                neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum
                adipiscing elit.
              </p>
              <h6>Sunny Khan</h6>
              <p className="p2">One of our Clients</p>
            </div>
          </div>
          <div>
            <div className="testimonial-card">
              <div className="testimonial-img">
                <Image
                  src="https://geeko.netlify.app/img/test-img/3.jpg"
                  className="test-img"
                />
              </div>

              <p className="p">
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla
                neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum
                adipiscing elit.
              </p>
              <h6>Jebin Khan</h6>
              <p className="p2">One of our Clients</p>
            </div>
          </div>
          <div>
            <div className="testimonial-card">
              <div className="testimonial-img">
                <Image
                  src="https://geeko.netlify.app/img/test-img/2.jpg"
                  className="test-img"
                />
              </div>

              <p className="p">
                Lorem ipsum dolor sit amet, consecte adipiscing elit. Nulla
                neque quam, maxim us ut accumsan ut, posuere sit Lorem ipsum
                adipiscing elit.
              </p>
              <h6>Ajoy Das</h6>
              <p className="p2">One of our Clients</p>
            </div>
          </div>
        </Slider>
      </Container>
    </>
  );
};

export default Testimonial;
