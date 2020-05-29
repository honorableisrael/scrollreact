import * as React from "react";
import "../Home/Home.css";
import "./clarityforteams.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../HomeComponents/footer";
import Navbar from "../HomeComponents/navbar";
// team

import oneofour from "../../../assets/cutelady.png";
import oneofour1 from "../../../assets/joinhands.png";
import oneofour2 from "../../../assets/shakehand.png";
import oneofour3 from "../../../assets/typehand.png";
import firstImage from "../../../assets/7.png";


export const ClarityForTeams = (props: any) => {
  
  return (
    <div>
      <Navbar />
      <Container fluid={true}>
        <Row className="firstrowcf cftcontent">
          <Col md={8} className="text-center">
            <div>
              <img src={firstImage} className="xcv1" alt="clarityforteams" />
            </div>
          </Col>
          <Col md={8}>
            <div className="Clarity-for-Teams">Clarity for Teams</div>
            <div className="seccfr">
              People produce the best work when they love what they do!
            </div>
            <div className="seccfr">
              {" "}
              Passionate people are critical in helping your organization
              improve your bottom line.
            </div>
            <div className="seccfr">Clarity helps you achieve four things </div>
          </Col>
          <Col md={8} className="lko11wr">
            <Row className="lko11">
              <Col md={6}>
                <img src={oneofour} alt="oneofour" className="oneofour" />
                <div className="understand">Understand your people </div>
                <div className="Byhelping">
                  By helping you see their strengths, weaknesses, motivators,
                  mental state, strong and weak leadership competencies. This
                  data helps you as a manger tailor a personal development or
                  team bonding activities, leadership and soft-skill competency
                  trainings that will help improve workplace productivity.
                </div>
              </Col>
              <Col md={6}>
                <img src={oneofour1} alt="oneofour" className="oneofour" />
                <div className="understand">
                  Align team roles with their strengths & aspirations{" "}
                </div>
                <div className="Byhelping">
                  Square pegs in round holes leads to reduced efficiency, high
                  turnover and make managing people frustrating. With Clarity
                  you are able to see what work-functions your team functions in
                  best, their work style and industries they are likely to
                  thrive in most. This data informs you on where best to place
                  team members to produce their best work.
                </div>
              </Col>
              <Col md={6}>
                <img src={oneofour2} alt="oneofour" className="oneofour" />
                <div className="understand">
                  Build high performing individuals{" "}
                </div>
                <div className="Byhelping">
                  Counselling and coaching is a great tool in keeping your team
                  self-motivated, emotionally stable, in the best frame of mind
                  and actively improving their leadership competencies.
                </div>
              </Col>
              <Col md={6}>
                <img src={oneofour3} alt="oneofour" className="oneofour" />
                <div className="understand">
                  Increase employee loyalty and engagement{" "}
                </div>
                <div className="Byhelping">
                  Need we say more; people don’t care about what you do until
                  they know how much you care. Investing in your teams’ personal
                  development and using the data we provide to create rooms for
                  growth within your organizations.
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="firstrowcf cftcontent bgwcf">
          <Col md={10}>Choose the plan that’s right for your team.</Col>
          <div className="pricewraper">
            <div className="plan_">Understanding Plan</div>
            <div className="plancost">15$</div>
            <div className="perteam">Per Team Member</div>
            <div className="personality dd11">Personality</div>
            <div className="Strengths dd11">Strengths </div>
            <div className="Weaknesses dd11">Weaknesses </div>
            <div className="Strongw dd11">Strong & Weak </div>
            <div className="Leadership dd11">Leadership Competencies </div>
            <div>
              <button className="getstarted">
                Get Started
              </button>
            </div>
          </div>
          <div className="pricewraper">
            <div className="plan_">Understanding Plan</div>
            <div className="plancost">18$</div>
            <div className="perteam">Per Team Member</div>
            <div className="personality dd11">Personality</div>
            <div className="Strengths dd11">Strengths </div>
            <div className="Weaknesses dd11">Weaknesses </div>
            <div className="Strongw dd11">Strong & Weak </div>
            <div className="Leadership dd11">Leadership Competencies </div>
            <div className="Strongw dd11">Work function</div>
            <div className="Strongw dd11">Work style</div>
            <div className="Strongw dd11">Industry Match</div>
            <div className="Strongw dd11">Comprehensive Talent</div>
            <div className="">Management Insight& </div>
            <div>Strategy Report</div>
            <div className="Strongw dd11">
              <button className="getstarted1">Get Started</button>
            </div>
          </div>
          <div className="pricewraper">
            <div className="plan_">Understanding Plan</div>
            <div className="plancost">18$</div>
            <div className="perteam">Per Team Member</div>
            <div className="personality dd11">Personality</div>
            <div className="Strengths dd11">Strengths </div>
            <div className="Weaknesses dd11">Weaknesses </div>
            <div className="Strongw dd11">Strong & Weak </div>
            <div className="Leadership dd11">Leadership Competencies </div>
            <div className="Strongw dd11">Work function</div>
            <div className="Strongw dd11">Work style</div>
            <div className="Strongw dd11">Industry Match</div>
            <div className="Strongw dd11">
              6 months Virtual coaching and career accountability for staff
            </div>
            <div className="Strongw dd11">
              <button className="getstarted1">Get Started</button>
            </div>
          </div>
        </Row>
        <Footer />
      </Container>
    </div>
  );
};
