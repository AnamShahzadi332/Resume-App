import "./Blog.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="contact-banner">
        <Container>
          <Row>
            <Col sm={12} md={12} lg={12}>
              <div className="banner">
                <h1 className="bread-crums">Blog</h1>
                <div role="presentation" className="center">
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography
                      underline="hover"
                      color="inherit"
                      onClick={() => navigate("/")}
                      className="list-style-one"
                    >
                      Home
                    </Typography>
                    <Typography color="text.primary" className="list-style-two">
                      Blog
                    </Typography>
                  </Breadcrumbs>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* cards */}
      <Container>
        <Row className="card-margin">
          <Col sm={12} md={6} lg={4} className="col-margin">
            <Card sx={{ maxWidth: 380 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn-images.zety.com/pages/counter_offer_letter_zety_us_1.jpg?fit=crop&h=260&dpr=2"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h6 className="h6">
                      Counteroffer Letter: Sample & Salary Negotiation How-Tos
                    </h6>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div className="typography">
                      Writing a counteroffer letter might feel like walking on
                      ice. But there’s a way to do it right! Find our
                      professional tips below (plus a counteroffer letter
                      example).
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="col-margin">
            <Card sx={{ maxWidth: 380 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn-images.zety.com/pages/salary_expectations_zety_us_1.jpg?fit=crop&h=260&dpr=2"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h6 className="h6">
                      How to Best Answer: What Are Your Salary Expectations?
                    </h6>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div className="typography">
                      Writing a counteroffer letter might feel like walking on
                      ice. But there’s a way to do it right! Find our
                      professional tips below (plus a counteroffer letter
                      example).
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="col-margin">
            <Card sx={{ maxWidth: 380 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn-images.zety.com/pages/how_to_find_a_job_zety_us_1.jpg?fit=crop&h=260&dpr=2"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h6 className="h6">
                      How to Find a Job? Best Ways to Look For a Good Job
                      Opening
                    </h6>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div className="typography">
                      Writing a counteroffer letter might feel like walking on
                      ice. But there’s a way to do it right! Find our
                      professional tips below (plus a counteroffer letter
                      example).
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="col-margin">
            <Card sx={{ maxWidth: 380 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn-images.zety.com/pages/counter_offer_letter_zety_us_1.jpg?fit=crop&h=260&dpr=2"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h6 className="h6">
                      Counteroffer Letter: Sample & Salary Negotiation How-Tos
                    </h6>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div className="typography">
                      Writing a counteroffer letter might feel like walking on
                      ice. But there’s a way to do it right! Find our
                      professional tips below (plus a counteroffer letter
                      example).
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="col-margin">
            <Card sx={{ maxWidth: 380 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn-images.zety.com/pages/salary_expectations_zety_us_1.jpg?fit=crop&h=260&dpr=2"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h6 className="h6">
                      How to Best Answer: What Are Your Salary Expectations?
                    </h6>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div className="typography">
                      Writing a counteroffer letter might feel like walking on
                      ice. But there’s a way to do it right! Find our
                      professional tips below (plus a counteroffer letter
                      example).
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="col-margin">
            <Card sx={{ maxWidth: 380 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn-images.zety.com/pages/how_to_find_a_job_zety_us_1.jpg?fit=crop&h=260&dpr=2"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h6 className="h6">
                      How to Find a Job? Best Ways to Look For a Good Job
                      Opening
                    </h6>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div className="typography">
                      Writing a counteroffer letter might feel like walking on
                      ice. But there’s a way to do it right! Find our
                      professional tips below (plus a counteroffer letter
                      example).
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="col-margin">
            <Card sx={{ maxWidth: 380 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn-images.zety.com/pages/counter_offer_letter_zety_us_1.jpg?fit=crop&h=260&dpr=2"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h6 className="h6">
                      Counteroffer Letter: Sample & Salary Negotiation How-Tos
                    </h6>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div className="typography">
                      Writing a counteroffer letter might feel like walking on
                      ice. But there’s a way to do it right! Find our
                      professional tips below (plus a counteroffer letter
                      example).
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="col-margin">
            <Card sx={{ maxWidth: 380 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn-images.zety.com/pages/salary_expectations_zety_us_1.jpg?fit=crop&h=260&dpr=2"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h6 className="h6">
                      How to Best Answer: What Are Your Salary Expectations?
                    </h6>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div className="typography">
                      Writing a counteroffer letter might feel like walking on
                      ice. But there’s a way to do it right! Find our
                      professional tips below (plus a counteroffer letter
                      example).
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="col-margin">
            <Card sx={{ maxWidth: 380 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn-images.zety.com/pages/how_to_find_a_job_zety_us_1.jpg?fit=crop&h=260&dpr=2"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h6 className="h6">
                      How to Find a Job? Best Ways to Look For a Good Job
                      Opening
                    </h6>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div className="typography">
                      Writing a counteroffer letter might feel like walking on
                      ice. But there’s a way to do it right! Find our
                      professional tips below (plus a counteroffer letter
                      example).
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="col-margin">
            <Card sx={{ maxWidth: 380 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn-images.zety.com/pages/counter_offer_letter_zety_us_1.jpg?fit=crop&h=260&dpr=2"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h6 className="h6">
                      Counteroffer Letter: Sample & Salary Negotiation How-Tos
                    </h6>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div className="typography">
                      Writing a counteroffer letter might feel like walking on
                      ice. But there’s a way to do it right! Find our
                      professional tips below (plus a counteroffer letter
                      example).
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="col-margin">
            <Card sx={{ maxWidth: 380 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn-images.zety.com/pages/salary_expectations_zety_us_1.jpg?fit=crop&h=260&dpr=2"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h6 className="h6">
                      How to Best Answer: What Are Your Salary Expectations?
                    </h6>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div className="typography">
                      Writing a counteroffer letter might feel like walking on
                      ice. But there’s a way to do it right! Find our
                      professional tips below (plus a counteroffer letter
                      example).
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="col-margin">
            <Card sx={{ maxWidth: 380 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn-images.zety.com/pages/how_to_find_a_job_zety_us_1.jpg?fit=crop&h=260&dpr=2"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h6 className="h6">
                      How to Find a Job? Best Ways to Look For a Good Job
                      Opening
                    </h6>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div className="typography">
                      Writing a counteroffer letter might feel like walking on
                      ice. But there’s a way to do it right! Find our
                      professional tips below (plus a counteroffer letter
                      example).
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="col-margin">
            <Card sx={{ maxWidth: 380 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn-images.zety.com/pages/counter_offer_letter_zety_us_1.jpg?fit=crop&h=260&dpr=2"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h6 className="h6">
                      Counteroffer Letter: Sample & Salary Negotiation How-Tos
                    </h6>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div className="typography">
                      Writing a counteroffer letter might feel like walking on
                      ice. But there’s a way to do it right! Find our
                      professional tips below (plus a counteroffer letter
                      example).
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="col-margin">
            <Card sx={{ maxWidth: 380 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn-images.zety.com/pages/salary_expectations_zety_us_1.jpg?fit=crop&h=260&dpr=2"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h6 className="h6">
                      How to Best Answer: What Are Your Salary Expectations?
                    </h6>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div className="typography">
                      Writing a counteroffer letter might feel like walking on
                      ice. But there’s a way to do it right! Find our
                      professional tips below (plus a counteroffer letter
                      example).
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4} className="col-margin">
            <Card sx={{ maxWidth: 380 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn-images.zety.com/pages/how_to_find_a_job_zety_us_1.jpg?fit=crop&h=260&dpr=2"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <h6 className="h6">
                      How to Find a Job? Best Ways to Look For a Good Job
                      Opening
                    </h6>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div className="typography">
                      Writing a counteroffer letter might feel like walking on
                      ice. But there’s a way to do it right! Find our
                      professional tips below (plus a counteroffer letter
                      example).
                    </div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
