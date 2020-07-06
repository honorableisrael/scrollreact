import * as React from "react";
//bstp
import "./footer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// footer statics
import facebook from "../../../assets/facebook.png";
import twitter from "../../../assets/twitter.png";
import instagram from "../../../assets/instagram.png";
import { Link } from "react-router-dom";
import linkedin from "../../../assets/linkedin.png";
import nysc from "../../../assets/nysc.png";
import Yudimy from "../../../assets/Yudimy.png";
import saed from "../../../assets/saedconnect.png";

const Footer: React.FC = (props) => {
  return (
    <div>
      <Row>
        <Col md={12} className="jsmc">
          <div className="ncb">
            <div className="shiys">
              {" "}
              Clarity by Yudimy. All rights reserved.
            </div>
          </div>
          <div className="reserved">
            <div className="powerdby">
              Powered by{" "}
              <span className="style11">
                <img src={Yudimy} className="yudimynysc" alt="nysc logo" />{" "}
              </span>{" "}
              In partnership with{" "}
              <span className="">
                <img src={saed} className="yudimynysc1" alt="nysc logo" />{" "}
              </span>{" "}
              <span className="">
                <img src={nysc} className="yudimynysc" alt="nysc logo" />{" "}
              </span>{" "}
            </div>
            <div className="textleft">Contact email: careers@saedconnect.org</div>
          </div>
        </Col>
      </Row>
      {/* footer starts here */}
    </div>
  );
};

export default Footer;
