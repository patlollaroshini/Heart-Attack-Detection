import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";


import img1 from "../assest/img1.jpg";
import img2 from "../assest/img2.jpg";
import img3 from "../assest/img3.jpg";
import img4 from "../assest/img4.jpg";
import sideimp from "../assest/sideimp.jpg";
import "./home.css";

function Home() {
  return (
    <div>
      <section className="carousel-section py-5 text-black">
        <Container className="carousel-container text-black">
          <Carousel className="caraousel-img text-black">
            <Carousel.Item className="text-black"text-black>
              <img
                className="d-block  carousel-img"
                src={img1}
                alt="First slide"
              />
              <Carousel.Caption>
                {/* <h3>First Slide</h3>
                <p>Description for the first slide.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block carousel-img"
                src={img2}
                alt="Second slide"
              />
              <Carousel.Caption>
                {/* <h3>Second Slide</h3>
                <p>Description for the second slide.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block  carousel-img"
                src={img3}
                alt="Third slide"
              />
              <Carousel.Caption>
                {/* <h3>Third Slide</h3>
                <p>Description for the third slide.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
      <br />
      <br />

      <div id="passa" class="container my-6">
        <div class="row">
          <div class="col-md-6">
            <h2 className="tee">
              <strong>My Heart Check</strong>
            </h2>
            <br />
            <h4>
              My Heart Check is a free online heart health check. It raises
              awareness of heart health and offers tips to manage the risk of
              heart disease.
            </h4>
            <br />
            <p className="p1">
              Use My Heart Check to get an idea of your heart health get tips
              for how to improve your heart health talk about your heart health
              with a healthcare professional. When you use My Heart Check, we'll
              ask you about your: age height and weight cholesterol levels blood
              pressure medical history. Don't worry if you don't know the answer
              to some of the questions. If you leave a question blank, we can
              base your results on an estimate. To get the most accurate view of
              your heart health you should ask your GP or nurse for a heart and
              diabetes check.
            </p>
            <p className="p1">
              My Heart Check is designed for Kiwis because it's based on local
              data. The tool uses information about your medical history, where
              you live and your ethnicity to give an estimate of your heart
              health.
            </p>
            <br />
            <h5 className="tee2">Use My Heart Check to:</h5>
            <div>
              <ul>
                <li>get an idea of your heart health</li>
                <li>get tips for how to improve your heart health</li>
              </ul>
            </div>
          </div>

          <br />
          <br />
          <br />
          <div
            id="img4"
            class="col-md-1 offset-md-1

"
          >
            <img src={img4} alt="HEart Image" height={"500px"} />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div id="passa" class="container my-6">
        <div class="row">
          <div class="col-6 col-md-6">
            <img
              src={sideimp}
              alt="HEart Image"
              height={"500px"}
              width={"610px"}
            />
          </div>

          <br />

          <div
            id="img4"
            class="col-6 col-md-6

"
          >
            <h2 className="tee">
              <strong>Steps to keep Heart Healthy</strong>
            </h2>
            <br />
            <p>
              
                <ul class="p1">
                  <li>
                    Eat a balanced diet with fruits, vegetables, whole grains,
                    and lean proteins.
                  </li>
                  <li>
                    Exercise regularly, aiming for at least 150 minutes of
                    moderate activity each week.
                  </li>
                  <li>
                    Avoid smoking, as it significantly increases the risk of
                    heart disease.
                  </li>
                  <li>
                    Limit alcohol consumption to reduce the risk of heart
                    problems.
                  </li>
                  <li>
                    Manage stress through relaxation techniques like deep
                    breathing, meditation, or yoga.
                  </li>
                  <li>
                    Monitor blood pressure and cholesterol levels with regular
                    check-ups.
                  </li>
                  <li>
                    Maintain a healthy weight to reduce strain on your heart.
                  </li>
                  <li>Ensure you get 7-9 hours of quality sleep each night.</li>
                  <li>Stay hydrated by drinking enough water daily.</li>
                  <li>
                    Consider heart-healthy supplements like Omega-3 fatty acids,
                    but consult your doctor first.
                  </li>
                </ul>
              {/* </strong> */}
            </p>
            <br />
            <p className="p1"></p>
            <p className="p1"></p>
            <br />
            {/* <h5 className="tee2">Use My Heart Check to:</h5> */}
            {/* <div>
              <ul>
                <li>get an idea of your heart health</li>
                <li>get tips for how to improve your heart health</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <br />
      <br />
      <footer className="" class="footer p-5">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <h2>Heart Check</h2>
            </div>
            <div class="col-md-3">
              <h5>About Us</h5>
              <p>
                Heart Check to get an idea of your heart health get tips for how
                to improve your heart health talk about your heart health with a
                healthcare professional.
              </p>
            </div>
            <div class="col-md-3">
              <h5>Contact Us</h5>
              <ul class="list-unstyled">
                <li>Email: info@example.com</li>
                <li>Phone: +1233567890</li>
                <li>Address: 123 Street, City, Country</li>
              </ul>
            </div>
            <div class="col-md-3">
              <h5>Follow Us</h5>
              <ul class="list-inline footer-links">
                <li class="list-inline-item">
                  <a href="#">
                  <FaFacebookSquare />

                    <i class="fab fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                  <  FaTwitter/>

                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#">
                  < IoLogoInstagram />

                    <i class="fab fa-instagram"></i>
                  </a>
                </li>
                <li class="list-inline-item ">
                  <a href="#">
                  <FaLinkedin />

                    <i class="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <p>&copy; 2024 Your Website. All rights reserved.</p>
            </div>
            <div class="col-md-6 text-end">
              <ul class="list-inline footer-links">
                <li class="list-inline-item">
                  <a href="#" class="text-white">
                    Privacy Policy
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="text-white">
                    Terms of Service
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#" class="text-white">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Home;
