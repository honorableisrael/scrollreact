import * as React from "react";
import Axios from "axios";
import { API } from "../../config";
import SideNav from "react-simple-sidenav";
import Row from "react-bootstrap/Row";
import imgCart from "../../assets/clarity.png";
import Col from "react-bootstrap/Col";
import sideimage from "../../assets/jn.png";
import overview from "../../assets/overview.png";
import { Link } from "react-router-dom";
import settings from "../../assets/settings.png";
import profilebuilder from "../../assets/profilebuilder.png";
import support from "../../assets/support.png";


const DashboardNav = (props: any) => {
  const [user, setNewState] = React.useState("");
  const [showNav, setShowNav]: any = React.useState(false);
  const logOutMobile = (e) => {
    e.preventDefault();
    const details: any = localStorage.getItem("userDetails");
    const info = JSON.parse(details);
    let token = info.token;
    Axios.get(`${API}/api/v1/none`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        window.location.pathname = "/";
        localStorage.clear();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Row>
        <div className="hnav">
          <img src={imgCart} className="imgCart" alt="imgCart" />
          <div className="hamburger" onClick={() => setShowNav(true)}>
            <div className="line2a"></div>
            <div className="line2a"></div>
            <div className="line2a"></div>
          </div>
        </div>
      </Row>
      <SideNav
        showNav={showNav}
        style={{ background: showNav ? "rgba(0, 0, 0, 0.7)" : "none" }}
        navStyle={{
          width: "70%",
          background: "#001833",
          padding: 0,
          margin: "0px",
        }}
        onHideNav={() => setShowNav(false)}
        openFromRight={true}
        titleStyle={{
          backgroundColor: "#fff",
          color: "#444444",
          paddingLeft: 0,
          paddingBottom: 0,
          paddingTop: 0,
          fontSize: 17,
          textAlign: "left",
        }}
        title={[,]}
        itemStyle={{
          backgroundColor: "#fff",
          padding: 0,
          margin: "0px",
          textAlign: "left",
        }}
        items={[
          <div className={"siddlemobile"}>
            <div className={"navitem1"}>
              <div className={props.overview ? "activegb" : "gbn"}>
                <Link to="/overview">
                  <img src={overview} className="sideimage" alt="sideimage" />{" "}
                  Overview
                </Link>
              </div>
              <div className={props.insight ? "activegb" : "gbn"}>
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
                  <img
                    src={profilebuilder}
                    className="sideimage"
                    alt="sideimage"
                  />
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
          </div>,
        ]}
      />
    </div>
  );
};
export default DashboardNav;
