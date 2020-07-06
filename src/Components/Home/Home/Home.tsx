import * as React from "react";
import "./Home.css";
import Navbar from "../HomeComponents/navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RightTopImage from "../../../assets/2.png";
import testimonial from "../../../assets/feyin.jpg";
import likegoogle from "../../../assets/1.png";
import howitwk from "../../../assets/3.jpg";
import Footer from "../HomeComponents/footer";
import TakeAssessment from "../HomeComponents/TakeAssesment/takeAssessment";
import stepgood from "../../../assets/stepgood.png";
import stepone from "../../../assets/steptwo.png";
import steptwo from "../../../assets/stepthree.png";
import { Link } from "react-router-dom";
import demoLogo from "../../../assets/clarity.png";

const Home: React.FC = () => {
  const [name, setName] = React.useState("");
  React.useEffect((): any => {
    window.scrollTo(-0, -0);
  }, []);
  return (
    <div>
      <Navbar />
      <Container fluid={true}>
        <Row className="firstrow">
          <Col
            md={5}
            sm={{ span: 12, order: 1 }}
            xs={{ span: 12, order: 12 }}
            className="firstrowtxt"
          >
            <div className="txtheavy">
              Match your talent to the right career path with{" "}
              <img src={demoLogo} className="uysh" alt="clarity_logo" />
            </div>
            <div className="Clarity-is-the-solution">
              Take the clarity assessment to discover your strengths & define
              your career path.
            </div>
            <Link to="/signup">
              <div className="firstassesbtn">Take Assessment</div>
            </Link>
          </Col>
          <Col
            md={7}
            sm={{ span: 12, order: 12 }}
            className="kissa"
            xs={{ span: 12, order: 1 }}
          >
            <img src={RightTopImage} className="homebanner0" alt="homebanner" />
          </Col>
        </Row>
        <Row className="secondRow Rectangle-8">
          <Col md={12} className="We-are-like">
            Your dream career starts with a step in the right direction
          </Col>
          <Col md={12} className="secondimagearea">
            <Row>
              <Col md={{ span: 3, offset: 1 }}>
                <div>
                  <img
                    src={likegoogle}
                    className="homebanner1"
                    alt="homebanner1"
                  />
                </div>
              </Col>
              <Col md={7}>
                <div className="cards-section1">
                  <div className="clarity-card">
                    <div className="Ellipse-4">
                      <div id="">
                        <div className="wraper22">
                          <div className="inner21">One</div>
                        </div>
                        <div className="line-top"></div>
                      </div>
                    </div>
                    <div className="Clarity-of-Thought">Sign Up</div>
                    <div className="Clairty-lorem"></div>
                  </div>
                  <div className="clarity-card">
                    <div className="Ellipse-4">
                      <div id="">
                        <div className="wraper22">
                          <div className="inner21">Two</div>
                        </div>
                        <div className="line-top secondline"></div>
                      </div>
                    </div>
                    <div className="Clarity-of-Thought">Take Assessment</div>
                    <div className="Clairty-lorem"></div>
                  </div>
                  <div className="clarity-card">
                    <div className="Ellipse-4">
                      <div id="">
                        <div className="wraper22">
                          <div className="inner21">Three</div>
                        </div>
                        <div className="line-top"></div>
                      </div>
                    </div>
                    <div className="Clarity-of-Thought">Get</div>
                    <div className="Clarity-of-Thought">Insights</div>
                    <div className="Clairty-lorem"></div>
                  </div>
                  <div className="clarity-card">
                    <div className="Ellipse-4">
                      <div className="wraper22">
                        <div className="inner21">Four</div>
                      </div>
                    </div>
                    <div className="Clarity-of-Thought">Define your path</div>
                    <div className="Clairty-lorem"></div>
                  </div>
                </div>
                <div className="giveaa">
                  <div>" Discovering your path gives you a</div>
                  <div>better chance of succeeding."</div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="thirdrow">
          <Col sm={{ span: 6, offset: 6 }} md={{ span: 6, offset: 6 }}>
            <div className="How-it-works">Benefits</div>
          </Col>
          <Col md={12}>
            <Row>
              <Col md={{ span: 5, offset: 1 }}>
                <div>
                  <img
                    src={howitwk}
                    className="homebanner3"
                    alt="homebanner1"
                  />
                </div>
              </Col>
              <Col md={4}>
                <div className="cards-section1">
                  <div className="howcardwrapper">
                    <div className="Assess jsj">
                      <img src={stepgood} className="stepgood" alt="imggood" />
                      <div>
                        Know the right industry to channel your job search
                      </div>
                    </div>
                    <div className="straight_line"></div>{" "}
                  </div>
                  <div className="howcardwrapper">
                    <div className="Assess jsj">
                      <img src={stepgood} className="steptwo" alt="imggood" />
                      <div>
                        Get better perspective of your skills and abilities to
                        articulate it at interviews
                      </div>
                    </div>
                  </div>
                  <div className="howcardwrapper">
                    <div className="Assess jsj">
                      <img src={stepgood} className="steptwo" alt="imggood" />
                      <div>
                        Spot areas of competencies you still need to develop
                      </div>
                    </div>
                  </div>
                  <div className="howcardwrapper">
                    <div className="Assess jsj">
                      <img src={stepgood} className="steptwo" alt="imggood" />
                      <div>Get to understand yourself a lot better</div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="fourthsecrow">
          <Col md={{ span: 5, offset: 1 }}>
            <img src={testimonial} className="homebanner5" alt="homebanner1" />
          </Col>
          <Col md={5} className="shii11">
            <div className="I-found">
              <h6>From Jobseeker to Gainfully Employed</h6>
              "I was very unclear on how to approach my career; I wasn’t even
              sure what path to take. Going through the career clarity and
              assessment solution everything changed, I knew exactly how to
              approach my career, define my job- search strategy and before my
              NYSC passing out I got a job. Clarity gave me the confidence I
              needed.”
            </div>
            <div className="--Marta-Vaughn">- Fiyinfoluwa Olatubosun</div>
            <div className="--Marta-Vaughn"></div>
          </Col>
        </Row>
        <Row className="fifthsecrow ">
          <Col md={12}>
            <p className="Knowing-yourself">
              Knowing yourself is the first step to clarity.
            </p>
          </Col>
          <TakeAssessment background="#9c1258" />
          <Col md={5}>
            <div className="I-found"></div>
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
