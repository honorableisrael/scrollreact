import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./kegennidashboard.css";
import axios, { AxiosResponse } from "axios";
import { API } from "../../config";
import firstlogo from "../../assets/image 1.png";
import secondlogo from "../../assets/image 2.png";
import { CirclePie } from "salad-ui.chart";

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
  width: number;
}
class KigenniPartResult extends React.Component<React.Props<any>> {
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
    width: 100,
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    const availableToken = sessionStorage.getItem("userToken");
    const token = availableToken
      ? JSON.parse(availableToken)
      : window.location.assign("/signin");
    const data = {};
    axios
      .get<any, AxiosResponse<any>>(`${API}/paiddashboard`, {
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
  capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
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
    console.log(averagecompetencechartdata);
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const data = [
      { text: "Man", value: 500 },
      { text: "Woman", value: 300 },
    ];

    console.log(client);
    return (
      <>
        <Col md={10} className="">
          <div className="kdashheader">
            {fullname ? fullname : ""}{" "}
            <span className="kdashheaderlight"> Clarity Report</span>
          </div>
          <div className="kdash1">
            It seems you're presently not on the right career track.{" "}
            <span className="kdash1light"> see details below</span>
          </div>
          <div className="kdasharea">
            <div>
              <img src={firstlogo} className="kfirstlogo" alt="firstlogo" />
            </div>
            <div className="kprofilewrap">
              <div className="kprofile">Profile</div>
              <div className="kprofile2">{client.profile}</div>
              {/* <div className="kprofile3">Growing Business</div> */}
            </div>
          </div>
          <hr />
          <div className="resultsec2">
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
              <div className="csfitscore1">Your Career Fitness Score</div>
              <div className="csbody">{client?.career_fitness?.body}</div>
            </div>
          </div>
          <hr />
          <div className="resultsec3">
            <div className="reskwrap">
              <div className="csfitscore1 reskheader">
                Your Career Personality type
              </div>
              <div className="">
                {client?.career_personality_type?.short_description}
              </div>
            </div>
            <div>
              <img src={secondlogo} className="secondlogo" alt="secondlogo" />
            </div>
          </div>
          <div className="resultsec3">
            <div className="resultt">
              {client?.career_personality_type?.full_body}
            </div>
          </div>
        </Col>
      </>
    );
  }
}

export default KigenniPartResult;
