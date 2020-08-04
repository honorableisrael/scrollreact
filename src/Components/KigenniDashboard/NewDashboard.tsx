import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./kegennidashboard.css";
import avatar from "../../assets/avatar.svg";
import SideBarNewDashboard from "./SideBarNewDashboard";
import Axios, { AxiosResponse } from "axios";
import { API } from "../../config";
import firstlogo from "../../assets/image 1.png";
import Button from "react-bootstrap/Button";
import { CirclePie } from "salad-ui.chart";
import Modal from "react-bootstrap/Modal";
import DashboardNav from "./DashboardNavBar";
import DashboardLargeScreenNav from "./DashboardLargeScreenNav";

interface State {
  fullname: string;
  careerbussines: any;
  jobfunctionchartdata: any;
  averagecompetencechartdata: any;
  strongcompetencechartdata: any;
  client: any;
  successMsg: boolean;
  errorMessage: string;
  isLoading: boolean;
  showWarning: boolean;
  width: number;
}
class NewDashboard extends React.Component {
  state: State = {
    fullname: "",
    client: [],
    careerbussines: [],
    jobfunctionchartdata: [],
    averagecompetencechartdata: [],
    strongcompetencechartdata: [],
    errorMessage: "",
    successMsg: false,
    isLoading: false,
    showWarning: false,
    width: 100,
  };
  submitRetakeAssessment = (e) => {
    e.preventDefault();
    const availableToken = sessionStorage.getItem("userToken");
    const token = availableToken ? JSON.parse(availableToken) : "";
    const data = {};
    Axios.get<any, AxiosResponse<any>>(`${API}/retakeassessment`, {
      headers: { Authorization: `Token ${token}` },
    })
      .then((res) => {
        console.log(res.data);
        window.location.assign("/assessmentphaseone");
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
    const data = {};
    Axios.get<any, AxiosResponse<any>>(`${API}/paiddashboard`, {
      headers: { Authorization: `Token ${token}` },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          this.setState({
            client: response.data[0],
            careerbussines: response?.data[0]?.career_business_expression[0],
            jobfunctionchartdata: response?.data[0]?.job_function_fit?.graph,
            averagecompetencechartdata:
              response?.data[0]?.average_career_competences?.graph,
            strongcompetencechartdata:
              response?.data[0].strong_career_competences.graph,
            fullname: response.data[0].full_name,
            successMsg: true,
            isLoading: false,
          });
        }
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
  checkIfUserHasMadePaymentForFullResult = () => {
    const availableToken: string | null = sessionStorage.getItem("userToken");
    const token: string = availableToken
      ? JSON.parse(availableToken)
      : window.location.assign("/signin");
    Axios.get<any, AxiosResponse<any>>(`${API}/paymentstatus`, {
      headers: { Authorization: `Token ${token}` },
    })
      .then((response) => {
        console.log(response);
        if (
          response?.data[0]?.direction_plan ||
          response?.data[0]?.growth_plan ||
          response?.data[0]?.insight_plan === true
        ) {
          return window.location.assign("/thirdpary/fullresult");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  CloseWarning = () => {
    this.setState({
      showWarning: false,
    });
  };
  capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  handleChatCheck = () => {
    this.setState({ isLoading: true });
    const availableToken = sessionStorage.getItem("userToken");
    const token = availableToken
      ? JSON.parse(availableToken)
      : window.location.assign("/signin");
    Axios.get<any, AxiosResponse<any>>(`${API}/paymentstatus`, {
      headers: { Authorization: `Token ${token}` },
    })
      .then((response) => {
        if (response?.data[0]?.direction_plan === true) {
          return window.location.assign("/councellordates");
        }
        if (response?.data[0]?.direction_plan === false) {
          return window.location.assign("/councellorfee");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  openWarning = () => {
    this.setState({
      showWarning: true,
    });
  };
  render() {
    const {
      fullname,
      client,
      careerbussines,
      jobfunctionchartdata,
      averagecompetencechartdata,
      strongcompetencechartdata,
      isLoading,
      width,
    } = this.state;
    return (
      <>
        <Container fluid={true} className="contann122">
          <DashboardNav overview={true} />
          <Row>
            <SideBarNewDashboard overview={true} />
            <Col md={10} sm={12} className="prm">
              <DashboardLargeScreenNav title="Overview" />
              <Row>
                <Col md={12} className="kisls">
                  <div className="kdashheader npps">
                    <div className="fjss">
                      <div>
                        {" "}
                        <span className="kdashheaderlight idds">
                          Hi{" "}
                          <span className="ksname">
                            {" "}
                            {fullname ? fullname : ""}
                          </span>
                        </span>
                        <div className="smalls">
                          {/* {client?.career_fitness?.heading}{" "}
                          <a href="#seek">
                            <b>see details below</b>{" "}
                          </a> */}
                        </div>
                      </div>
                      <div className="">
                        <div className="kprofile psdd">
                          Profile
                          <div className="kprofile2 idds sowws psdd">
                            {client.profile}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <Button
                        className="retaketest"
                        onClick={this.handleChatCheck}
                      >
                        Speak with a counsellor
                      </Button>
                      <Button
                        className="retaketest2"
                        onClick={this.openWarning}
                      >
                        Retake Assessment
                      </Button>
                    </div>
                    <div className="caerr">Career Insight</div>
                    <div className="resultsec2 col-md-11 psdd" id="seek">
                      <div className="csfitscore2">
                        Your Career Fitness Score
                      </div>
                      <div className="resultsec22">
                        <CirclePie
                          width={190}
                          height={190}
                          strokeWidth={5}
                          labelColor={"#fff"}
                          labelFontSize={"38px"}
                          strokeColor={"#fff"}
                          railColor={"#17375c77"}
                          fillColor={"#001833"}
                          percent={client?.career_fitness?.score}
                          padding={0}
                        />
                        {/* <img src={firstChart} className="firstChart" alt="firstChart" /> */}
                      </div>
                      <div className="csfitscore">
                        <div className="csfitscore1">
                          Your Career Fitness Score
                        </div>
                        <div className="vbnc1">
                          {" "}
                          {client?.career_fitness?.heading}{" "}
                        </div>
                        <div className="csbody">
                          {client?.career_fitness?.body}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="resultsec3 col-md-11 psdd1">
                    <div className="reskwrap">
                      <div className="csfitscore1  reskheader">
                        Career Personality type
                      </div>
                      <div className="career221">
                        {client?.career_personality_type?.short_description}
                      </div>
                    </div>
                  </div>
                  <div className="kdash1">
                    {/* {client?.career_fitness?.heading}{" "} */}
                    <span className="kdash1light"> </span>
                  </div>
                  <div
                    className="insightss col-md-11"
                    onClick={() => this.checkIfUserHasMadePaymentForFullResult()}
                  >
                    View Full Insight
                  </div>
                </Col>
              </Row>
            </Col>
            <Modal show={this.state.showWarning} onHide={this.CloseWarning}>
              <Modal.Body>
                Please note that retaking the assessment would require you to
                make payment to view the result
              </Modal.Body>
              <Modal.Footer>
                <Button
                  className="btnws"
                  variant="secondary"
                  onClick={this.CloseWarning}
                >
                  Back
                </Button>
                <Button
                  variant="danger"
                  className="btnws"
                  onClick={this.submitRetakeAssessment}
                >
                  Continue
                </Button>
              </Modal.Footer>
            </Modal>
          </Row>
        </Container>
      </>
    );
  }
}
export default NewDashboard;
