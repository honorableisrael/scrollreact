import * as React from "react";
import "../Home/Home.css";
import "./assessment.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../HomeComponents/footer";
import Navbar from "../HomeComponents/navbar";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import { AssessmentFirstSection } from "./AssessmentComponents/AssessmentFirstSection";
import offcharts from "../../../assets/offcharts.png";
import { Link } from "react-router-dom";

// team
type User = string | null;

const AssessmentSeventhPhaseComplete = () => {
  const [name, setName] = React.useState("");
  React.useEffect((): any => {
    window.scrollTo(-0, -0);
    const user: User = sessionStorage.getItem("user");
    const currentUser = JSON.parse(user ? user : "");
    setName(currentUser[0].first_name);
    console.log(currentUser[0].first_name);
  }, []);
  return (
    <div>
      <Navbar />
      <Container fluid={true}>
        <Row className="firstrowcf cftcontent">
          <AssessmentFirstSection
            progressBar={100}
            phase="Phase 7"
            nextPhase="Results"
            time={10}
          />
          <Col md={7}>
            <Row className="firstrowcf2 cftcontent">
              <Col md={12} className="awesomewrap">
                <div>
                  {/* <img
                    className="cherry-done"
                    src={offcharts}
                    alt="cherry-done"
                  /> */}
                  <div className="awesome">
                    {" "}
                    Yay! You did it The free result you're about to see will
                    impact your life in three quick dimensions.{" "}It’s going to show you
                  </div>
                  <div className="awesome1">
                    If you are on the right career track
                    or not and to what degree that is.
                  </div>
                  <div className="awesome1">
                    {" "}
                    Your unique career mission and advantage.
                  </div>
                  <div className="awesome1">
                    You will also get to see career paths you should never
                    embark on. Your least suitable career paths.{" "}
                  </div>
                  <div className="awesome1">
                    And guess what? You also get a bonus to immediately chat
                    with a counsellor about your career dilemma at a 50%
                    discount. It's our first time gift to you, for taking this
                    bold step.
                  </div>
                  <div className="awesome1">
                    Click get result to view your free evaluation report right
                    now
                  </div>
                  <div className="awesome1">
                    {" "}
                    See you on the other side.
                  </div>
                  <div className="awesome2">
                    <Link to="/overview">
                      <button className="awesomebtn">Get Results</button>
                    </Link>
                    <Link to="/">
                      {" "}
                      <button className="awesomebtnsubmit">
                        Save Progress
                      </button>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
};

export default AssessmentSeventhPhaseComplete;
