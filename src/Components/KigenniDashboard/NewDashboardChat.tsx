import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./kegennidashboard.css";
import avatar from "../../assets/avatar.svg";
import SideBarNewDashboard from "./SideBarNewDashboard";
import Axios, { AxiosResponse } from "axios";
import { API } from "../../config";
import DashboardUsernameheader from "./DashboardUsernameheader";
import DashboardNav from "./DashboardNavBar";


class NewDashboardChat extends React.Component {
  state: any = {
    fullname: "",
    message: "",
    user: "",
    successMsg: false,
    isLoading: false,
    showWarning: false,
    width: 100,
  };
  submitForm = (e) => {
    e.preventDefault();
    const availableToken = sessionStorage.getItem("userToken");
    const token = availableToken ? JSON.parse(availableToken) : "";
    const data = {
      message: this.state.message,
    };
    Axios.post<any, AxiosResponse<any>>(`${API}/dashboard/chat`, data, {
      headers: { Authorization: `Token ${token}` },
    })
      .then((res) => {
        console.log(res.data);
        this.componentDidMount();
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    const availableToken = sessionStorage.getItem("userToken");
    const token = availableToken
      ? JSON.parse(availableToken)
      : window.location.assign("/signin");
    this.checkIfUserHasMadePaymentForFullResult(token);
    const data = {};
    Axios.get<any, AxiosResponse<any>>(`${API}/dashboard/chat`, {
      headers: { Authorization: `Token ${token}` },
    })
      .then((response) => {
        console.log(response);
        this.setState({
          user: response.data,
          message:""
        });
      })
      .catch((error) => {
        console.log(error.response);
        if (error && error.response && error.response.data) {
          this.setState({
            errorMessage: error.response.data[0].message,
            isLoading: false,
          });
        }
        this.setState({
          errorMessage: "failed",
          isLoading: false,
        });
      });
  }
  checkIfUserHasMadePaymentForFullResult = (token: string) => {};
  onchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  render() {
    const { fullname, message, isLoading, width, user } = this.state;
    return (
      <>
        <Container fluid={true} className="contann122">
          <DashboardNav  chat={true} />
          <Row>
            <SideBarNewDashboard chat={true}/>
            <Col md={10} sm={12} className="prm">
              <div className="navdash">
                <div className="overview ovf">Chat with a counsellor</div>
                <div className="prm111">
                  <span>{fullname ? fullname : ""}</span>
                  <span>
                    <img src={avatar} className="avatar11" alt="avatar" />
                  </span>
                </div>
              </div>
              <Row>
                <Col md={12} className="kisls">
                  <div className="kdashheader npps">
                    <DashboardUsernameheader
                      welcomeText={
                        " Need some clarification about your Career Insights? leave a message for your counsellor"
                      }
                    />
                    <div>
                      <hr />
                    </div>
                    <Col md={12} className="youwss">
                      {user &&
                        user.map((data, ind) => (
                          <>
                            <div className="usersentwrap1" key={ind}>
                              <div className="youwrap">
                                <span className="you11">You</span>
                                <span className="youdate">June 8, 2020</span>
                              </div>
                              <div className="councellors_response">
                                {data.message}
                              </div>
                            </div>
                            <div className="hihh">
                              {data.response && (
                                <div className="couselorsentwrap2">
                                  <div className="youwraprev">
                                    <span className="youdate">
                                      June 8, 2020
                                    </span>
                                    <span className="you11b">
                                      Counsellor IBK
                                    </span>
                                  </div>

                                  <div className="councellors_response1">
                                    {data.response}
                                  </div>
                                </div>
                              )}
                            </div>
                          </>
                        ))}
                      <div>
                        <textarea
                          className="form-control sendtcont"
                          placeholder="Enter text"
                          name="message"
                          value={message}
                          onChange={this.onchange}
                        />
                      </div>
                      <div className="text-right">
                        <div
                          className="sendmeess col-md-11"
                          onClick={this.submitForm}
                        >
                          Send Message
                        </div>
                      </div>
                    </Col>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default NewDashboardChat;
