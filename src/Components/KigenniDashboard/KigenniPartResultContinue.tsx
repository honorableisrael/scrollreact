import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import "./kegennidashboard.css";
import axios, { AxiosResponse } from "axios";
import { API } from "../../config";
import firstlogo from "../../assets/image 1.png";
import secondlogo from "../../assets/image 2.png";
import thdlogo from "../../assets/gift.png";
import vector1 from "../../assets/whiteicon1.png";
import vector2 from "../../assets/whiteicon2.png";
import notice from "../../assets/notice.png";
import { CirclePie } from "salad-ui.chart";
import { Chart } from "react-google-charts";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";

interface State {
  fullname: string;
  careerbussines: any;
  jobfunctionchartdata: any;
  averagecompetencechartdata: any;
  strongcompetencechartdata: any;
  weakcompetencechartdata: any;
  client: any;
  successMsg: boolean;
  errorMessage: string;
  isLoading: boolean;
  width: number;
}
class KigenniRemainingResult extends React.Component<React.Props<any>> {
  state: State = {
    fullname: "",
    client: [],
    careerbussines: [],
    jobfunctionchartdata: [],
    weakcompetencechartdata: [],
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
            weakcompetencechartdata:
              response?.data[0]?.weak_career_competences?.graph,
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
  };
  render() {
    const {
      fullname,
      client,
      careerbussines,
      jobfunctionchartdata,
      averagecompetencechartdata,
      weakcompetencechartdata,
      strongcompetencechartdata,
      isLoading,
      width,
    } = this.state;
    console.log(careerbussines);
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    console.log(client);
    return (
      <>
        {!isLoading ? (
          <Col md={10} className="">
            <div className="kdashheader">
              {fullname ? fullname : ""}{" "}
              <span className="kdashheaderlight"> Clarity Report</span>
            </div>
            <div className="kdash1">
              {client?.career_fitness?.heading}{" "}
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
            <div>
              <div className="kz1">
                <div className="contkflex">
                  <div className="kz2">
                    <img src={vector1} className="kl3" alt="vector2" />
                    <div>Your Strengths</div>
                  </div>
                  <div className="kz12">
                    <ul className="grapwrap">
                      {client?.strengths?.map((strength, index) => (
                        <li className="grapssin" key={index}>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="contkflex">
                  <div className="kz2a">
                    <img src={vector2} className="kl3" alt="vector2" />
                    <div>Your Weaknesses</div>
                  </div>
                  <div className="kz12">
                    <ul className="grapwrap">
                      {client?.weaknesses?.map((weakness, index) => (
                        <li className="grapssin" key={index}>
                          {weakness}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div className="competence">Your Strong Competences</div>
            </div>
            <div>
              <Chart
                width={"100%"}
                height={"500px"}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Skills", "Score"],
                  [
                    client?.strong_career_competences?.graph?.[0]?.name,
                    client?.strong_career_competences?.graph?.[0]?.value,
                  ],
                  [
                    strongcompetencechartdata[0]?.name,
                    strongcompetencechartdata[0]?.value,
                  ],
                  [
                    strongcompetencechartdata[1]?.name,
                    strongcompetencechartdata[1]?.value,
                  ],
                  [
                    strongcompetencechartdata[2]?.name,
                    strongcompetencechartdata[2]?.value,
                  ],
                  [
                    strongcompetencechartdata[3]?.name,
                    strongcompetencechartdata[3]?.value,
                  ],
                  [
                    strongcompetencechartdata[4]?.name,
                    strongcompetencechartdata[4]?.value,
                  ],
                  [
                    strongcompetencechartdata[5]?.name,
                    strongcompetencechartdata[5]?.value,
                  ],
                  [
                    strongcompetencechartdata[6]?.name,
                    strongcompetencechartdata[6]?.value,
                  ],
                  [
                    strongcompetencechartdata[7]?.name,
                    strongcompetencechartdata[7]?.value,
                  ],
                  [
                    strongcompetencechartdata[8]?.name,
                    strongcompetencechartdata[8]?.value,
                  ],
                  [
                    strongcompetencechartdata[8]?.name,
                    strongcompetencechartdata[8]?.value,
                  ],
                  [
                    strongcompetencechartdata[9]?.name,
                    strongcompetencechartdata[9]?.value,
                  ],
                  [
                    strongcompetencechartdata[10]?.name,
                    strongcompetencechartdata[10]?.value,
                  ],
                ]}
                options={{
                  backgroundColor: "red",
                  chart: {
                    title: "",
                  },
                  colors: ["#001833"],
                }}
                rootProps={{ "data-testid": "2" }}
              />
            </div>
            <div className="otherinfo">
              {client?.strong_career_competences?.fields?.map((data, index) => (
                <div>
                  <span className="ikls">{data.name} </span> {data.value}
                  <br />
                </div>
              ))}
            </div>
            <hr />
            {/* Average Competence Starts Here */}
            <div>
              {averagecompetencechartdata &&
              averagecompetencechartdata.length > 0 ? (
                <div className="competence">Average Competences</div>
              ) : (
                ""
              )}
            </div>
            <div>
              {averagecompetencechartdata &&
              averagecompetencechartdata.length > 0 ? (
                <Chart
                  width={"100%"}
                  height={"500px"}
                  chartType="Bar"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Skills", "Score"],
                    [
                      averagecompetencechartdata[0]?.name,
                      averagecompetencechartdata[0]?.value,
                    ],
                    [
                      averagecompetencechartdata[1]?.name,
                      averagecompetencechartdata[1]?.value,
                    ],
                    [
                      averagecompetencechartdata[2]?.name,
                      averagecompetencechartdata[2]?.value,
                    ],
                    [
                      averagecompetencechartdata[3]?.name,
                      averagecompetencechartdata[3]?.value,
                    ],
                    [
                      averagecompetencechartdata[4]?.name,
                      averagecompetencechartdata[4]?.value,
                    ],
                    [
                      averagecompetencechartdata[5]?.name,
                      averagecompetencechartdata[5]?.value,
                    ],
                    [
                      averagecompetencechartdata[6]?.name,
                      averagecompetencechartdata[6]?.value,
                    ],
                    [
                      averagecompetencechartdata[7]?.name,
                      averagecompetencechartdata[7]?.value,
                    ],
                  ]}
                  options={{
                    backgroundColor: "red",
                    chart: {
                      title: "",
                    },
                    colors: ["#001833"],
                  }}
                  rootProps={{ "data-testid": "2" }}
                />
              ) : (
                ""
              )}
            </div>
            <div className="otherinfo">
              <span className="ikls">
                {client?.average_career_competences?.fields?.name && ":"}{" "}
              </span>{" "}
              {client?.average_career_competences?.fields?.value}
              <br />
            </div>
            <hr />
            <br />
            {/* Average Competence Starts Here */}
            <div>
              {averagecompetencechartdata &&
              averagecompetencechartdata.length > 0 ? (
                <div className="competence">Average Competences</div>
              ) : (
                ""
              )}
            </div>
            <div>
              {weakcompetencechartdata && weakcompetencechartdata.length > 0 ? (
                <Chart
                  width={"100%"}
                  height={"500px"}
                  chartType="Bar"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Skills", "Score"],
                    [
                      weakcompetencechartdata[0]?.name,
                      weakcompetencechartdata[0]?.value,
                    ],
                    [
                      weakcompetencechartdata[1]?.name,
                      weakcompetencechartdata[1]?.value,
                    ],
                    [
                      weakcompetencechartdata[2]?.name,
                      weakcompetencechartdata[2]?.value,
                    ],
                    [
                      weakcompetencechartdata[3]?.name,
                      weakcompetencechartdata[3]?.value,
                    ],
                    [
                      weakcompetencechartdata[4]?.name,
                      weakcompetencechartdata[4]?.value,
                    ],
                    [
                      weakcompetencechartdata[5]?.name,
                      weakcompetencechartdata[5]?.value,
                    ],
                    [
                      weakcompetencechartdata[6]?.name,
                      weakcompetencechartdata[6]?.value,
                    ],
                    [
                      weakcompetencechartdata[7]?.name,
                      weakcompetencechartdata[7]?.value,
                    ],
                  ]}
                  options={{
                    backgroundColor: "red",
                    chart: {
                      title: "",
                    },
                    colors: ["#001833"],
                  }}
                  rootProps={{ "data-testid": "2" }}
                />
              ) : (
                ""
              )}
            </div>
            <div className="otherinfo">
              <span className="ikls">
                {client?.weak_career_competences?.fields?.name && ":"}{" "}
              </span>{" "}
              {client?.weak_career_competences?.fields?.value}
              <br />
            </div>
            <hr />
            <br />
            <div>
              <div className="competence">
                Most Suitable Career-Business Expression
              </div>
              {client?.career_business_expression?.map((doc, index) => (
                <div className="resultsec2" key={index}>
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
                      percent={70}
                      padding={0}
                    />
                  </div>
                  <div className="csfitscore">
                    <div className="csfitscore1">
                      {this.capitalize(doc?.industry)}
                    </div>
                    {doc?.fields?.map((item, index) => (
                      <div className="csbody" key={index}>
                        <span className="competence1">
                          {this.capitalize(item.name)}
                        </span>
                        :{this.capitalize(item.value)} <br />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="nlodd">
                <div className="resultsec13">
                  <div className="reskwrap13">
                    <div className="csfitscore1 reskheader">
                      Your Top Career Drivers
                    </div>

                    {client?.career_drivers?.highlights?.map((data, index) => (
                      <div className="" key={index}>
                        <div>{data}</div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <img
                      src={thdlogo}
                      className="secondlogo img-fluid"
                      alt="secondlogo"
                    />
                  </div>
                </div>
              </div>
              {/* white background section */}
              {client?.career_drivers?.fields?.map((data, index) => (
                <div>
                  <div className="stbly">
                    <div className="stbly1">{data.heading}</div>
                    <div>{data.body}</div>
                  </div>
                  <div className="tipswrapper">
                    <div>
                      <div className="stbly1">
                        Tips to Harnessing This Motivator:
                      </div>
                      {data?.tips?.map((dataindata, index) => (
                        <div key={index}>
                          {index + 1}.{"  "}
                          {dataindata}
                        </div>
                      ))}
                    </div>
                    <div className="notice">
                      <img src={notice} className="noticee" alt="notice" />
                    </div>
                  </div>
                </div>
              ))}
              {/* dark blue background section */}
              {/* Your work style */}
              <div className="competence">Your Work Style</div>
              <div>
                <div className="kz1">
                  {client?.work_style?.map((data, index) => (
                    <div className="contkflex" key={index}>
                      <div className="kz2">
                        <img src={vector1} className="kl3" alt="vector2" />
                        <div>{data.name}</div>
                      </div>
                      <div className="kz12">
                        <ul className="grapwrap">
                          {data.value.map((dataindata, index) => (
                            <li className="grapssin">{dataindata}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <hr />
              {/* Your Job Function Fit style barchart */}
              <div className="competence">Your Job Function Fit</div>
              <div className="chartss">
                <Chart
                  width={"100%"}
                  height={"500px"}
                  chartType="Bar"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Skills", "Score"],
                    [
                      jobfunctionchartdata[0]?.name,
                      jobfunctionchartdata[0]?.value,
                    ],
                    [
                      jobfunctionchartdata[1]?.name,
                      jobfunctionchartdata[1]?.value,
                    ],
                    [
                      jobfunctionchartdata[2]?.name,
                      jobfunctionchartdata[2]?.value,
                    ],
                    [
                      jobfunctionchartdata[3]?.name,
                      jobfunctionchartdata[3]?.value,
                    ],
                    [
                      jobfunctionchartdata[4]?.name,
                      jobfunctionchartdata[4]?.value,
                    ],
                    [
                      jobfunctionchartdata[5]?.name,
                      jobfunctionchartdata[5]?.value,
                    ],
                    [
                      jobfunctionchartdata[6]
                        ? jobfunctionchartdata[6].name
                        : 0,
                      jobfunctionchartdata[6]
                        ? jobfunctionchartdata[6].value
                        : 0,
                    ],
                    [
                      jobfunctionchartdata[7]?.name,
                      jobfunctionchartdata[7]?.value,
                    ],
                  ]}
                  options={{
                    backgroundColor: "red",
                    chart: {
                      title: "",
                    },
                    colors: ["#001833"],
                  }}
                  rootProps={{ "data-testid": "2" }}
                />
              </div>
              <hr />
              <div className="otherinfo">
                {client?.job_function_fit?.field?.map((dataindata, index) => (
                  <div key={index}>
                    <span className="ikls">{dataindata.name} </span>{" "}
                    <div> {dataindata.value}. </div>
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </Col>
        ) : (
          <div>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        )}
      </>
    );
  }
}

export default KigenniRemainingResult;
