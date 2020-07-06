import * as React from "react";
import "../Home/Home/Home.css";
import "../Home/Assesment/assessment.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import offcharts from "../../assets/offcharts.png";
import { Link } from "react-router-dom";
import Navbar from "../Home/HomeComponents/navbar";
import Footer from "../Home/HomeComponents/footer";

// team
type User = string | null;

const Pending = () => {
  return (
    <div>
      <Navbar />
      <Container fluid={true}>
          <Col md={6} className="mrauto">
            <Row className="firstrowcf2 cftcontent">
              <Col md={12} className="awesomewrap">
                <div>
                  <img
                    className="cherry-done"
                    src={offcharts}
                    alt="cherry-done"
                  />
                  <div className="awesome">You current payment is pending.</div>
                  <div className="awesome2">
                    <Link to="/thirdpary/dashboard">
                      <button className="awesomebtn">Continue</button>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        <Footer />
      </Container>
    </div>
  );
};

export default Pending;
