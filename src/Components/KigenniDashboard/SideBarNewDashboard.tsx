import * as React from "react";
import Col from "react-bootstrap/Col";
import imgCart from "../../assets/clarity.png";
import sideimage from "../../assets/jn.png";
import settings from "../../assets/settings.png";
import profilebuilder from "../../assets/profilebuilder.png";
import support from "../../assets/support.png";
import overview from "../../assets/overview.png";
import "../Home/Home/Home.css";
import { Link } from "react-router-dom";
import Axios, { AxiosResponse } from "axios";
import { API } from "../../config";

const SideBarNewDashboard = (props: any) => {
  const [hidemobile, sethidemobile] = React.useState(false);
  const changeHideStatus = () => {
    sethidemobile(hidemobile ? false : true);
  };
  const checkIfUserHasMadePaymentForFullResult = () => {
    const availableToken = sessionStorage.getItem("userToken");
    const token = availableToken
      ? JSON.parse(availableToken)
      : window.location.assign("/signin");
    Axios
      .get<any, AxiosResponse<any>>(`${API}/paymentstatus`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((response) => {
        console.log(response);
        console.log(props);
        if (
          response?.data[0]?.direction_plan ||
          response?.data[0]?.growth_plan ||
          response?.data[0]?.insight_plan === true
        ) {
          return window.location.assign("/thirdpary/fullresult");
        }
        if (
          response?.data[0]?.direction_plan &&
          response?.data[0]?.growth_plan &&
          response?.data[0]?.insight_plan === false
        ) {
          return window.location.assign("/paymentsummary");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Col md={2} className={hidemobile ? "siddle siddlenone" : "siddle"}>
        <div className="dlex">
          <img src={imgCart} className="imgCart" alt="imgCart" />
        </div>{" "}
        <div className={hidemobile ? "navitemnone" : "navitem1"}>
          <div className={props.overview ? "activegb" : "gbn"}>
            <Link to="/overview">
              <img src={overview} className="sideimage" alt="sideimage" />{" "}
              Overview
            </Link>
          </div>
          <div onClick={checkIfUserHasMadePaymentForFullResult} className={props.insight ? "activegb" : "gbn"}>
            {" "}
            <img src={sideimage} className="sideimage" alt="sideimage" />
            Career Insight
          </div>
          <div className={props.chat ? "activegb" : "gbn"}>
            {" "}
            <Link to="/councellorchat">
              <img src={sideimage} className="sideimage" alt="sideimage" />
              Chat with a Counsellor
            </Link>
          </div>
          <div className={props.councrec ? "activegb" : "gbn"}>
            {" "}
            <Link to="/counsellorsrecommendation">
              <img src={sideimage} className="sideimage" alt="sideimage" />
              Counsellors Recommendation
            </Link>
          </div>
          <div className={props.jobrec ? "activegb" : "gbn"}>
            {" "}
            <Link to="/jobopportunities">
              <img src={sideimage} className="sideimage" alt="sideimage" />
              Job Recommendation
            </Link>
          </div>
          <div className={props.builder ? "activegb" : "gbn"}>
            {" "}
            <Link to="/profilebuilder">
              <img src={profilebuilder} className="sideimage" alt="sideimage" />
              Profile Builder
            </Link>
          </div>
          <div className="divide_thro"></div>
          <div className={props.settings ? "activegb" : "gbn"}>
            {" "}
            <Link to="/dashboardsettings">
              <img src={settings} className="sideimage" alt="sideimage" />
              Settings
            </Link>
          </div>
          <div className={props.subscription ? "activegb" : "gbn"}>
            {" "}
            <Link to="/dashboardsubsriptionplan">
              <img src={sideimage} className="sideimage" alt="sideimage" />
              Supscription
            </Link>
          </div>
          <div className={props.support ? "activegb" : "gbn"}>
            {" "}
            <Link to="dashboardsupport">
              <img src={support} className="sideimage" alt="sideimage" />
              Support
            </Link>
          </div>
        </div>
      </Col>
    </>
  );
};
export default SideBarNewDashboard;
