import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./kegennidashboard.css";
import avatar from "../../assets/avatar.svg";
import SideBarNewDashboard from "./SideBarNewDashboard";
import Axios, { AxiosResponse } from "axios";
import { API } from "../../config";
import imgCart from "../../assets/clarity.png";
import Button from "react-bootstrap/Button";
import { CirclePie } from "salad-ui.chart";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import DashboardNav from "./DashboardNavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Components/Home/Home/animate.css";
import DashboardInfoArea from "./DashboardInfoArea";
import DashboardLargeScreenNav from "./DashboardLargeScreenNav";

class ProfileBuilder extends React.Component {
  state: any = {
    fullname: "",
    references: [],
    experiences: [],
    mountedExperience: [],
    certifications: [],
    education: [],
    socials: [],
    strongcompetencechartdata: [],
    expirationStatus: "",
    errorMessage: "",
    certificateName: "",
    industry: "",
    certificateInstitution: "",
    valid_from: "",
    valid_till: "",
    organizationname: "",
    referencename: "",
    referenceid: "",
    referenceemail: "",
    referencephone: "",
    referencerelationship: "",
    referencetitle: "",
    organizationposition: "",
    institutionname: "",
    degreeObtained: "",
    institutionLocation: "",
    jobdescription: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "",
    successMsg: false,
    about: "",
    skill: "",
    skills: [],
    isLoading: false,
    showWarning: false,
    mycurrentwork: false,
    userHasAddedExperience: false,
    startDate: "",
    endDate: "",
    width: 100,
  };

  addNewSkill = () => {
    const skillz = [
      {
        skill: this.state.skill,
      },
    ];
    const [{ skill }] = skillz;
    if (skill === "") {
      return this.notify("Please Enter Skills Information");
    }
    this.setState({
      skills: [...this.state.skills, ...skillz].reverse(),
      skill:"",
    });
  };
  addNewEducation = () => {
    const Educationz = [
      {
        institution: this.state.institutionname,
        degree: this.state.degreeObtained,
        location: this.state.institutionLocation,
      },
    ];
    const [{ degree, institution, location }] = Educationz;
    if (degree === "" || institution === "" || location === "") {
      return this.notify("Please enter all education data");
    }
    this.setState({
      education: [...this.state.education, ...Educationz].reverse(),
    });
    this.setState({
      institutionname: "",
      degreeObtained: "",
      institutionLocation: "",
    });
  };
  addNewCertification = () => {
    const certificationz = [
      {
        certificate_name: this.state.certificateName,
        institution: this.state.certificateInstitution,
        valid_from: this.state.valid_from,
        valid_till: this.state.valid_till,
        does_not_expire: this.state.expirationStatus,
      },
    ];
    const [ 
      {
        certificate_name,
        institution,
        valid_from,
        valid_till,
        does_not_expire,
      },
    ] = certificationz;
    if (certificate_name === "" || institution === "" || valid_from === "") {
      return this.notify("Please enter all certification data");
    }
    this.setState({
      certifications: [
        ...this.state.certifications,
        ...certificationz,
      ].reverse(),
    });

    this.setState({
      certificateName: "",
      valid_from: "",
      valid_till: "",
      expirationStatus: "",
    });
  };
  addNewReferences = () => {
    const References = [
      {
        name: this.state.referencename,
        phone: this.state.referencephone,
        relationship: this.state.referencerelationship,
        title: this.state.referencetitle,
        ref_email: this.state.referenceemail,
      },
    ];
    const [{ name, phone, relationship, title, ref_email }] = References;
    if (name === "" || phone === "" || title === "" || ref_email === "") {
      return this.notify("Please enter all reference information");
    }
    this.setState({
      references: [...this.state.references, ...References].reverse(),
      referencename: "",
      referencephone: "",
      referencerelationship: "",
      referencetitle: "",
      referenceemail: "",
    });
  };
  addExperience = () => {
    const Experiencez = [
      {
        organisation: this.state.organizationname,
        position: this.state.organizationposition,
        job_description: this.state.jobdescription,
        current: this.state.mycurrentwork,
        started_from: this.state.startDate,
        to: this.state.endDate,
      },
    ];
    const [
      { organisation, position, job_description, current, started_from, to },
    ] = Experiencez;
    if (
      organisation === "" ||
      position === "" ||
      job_description === "" ||
      started_from === ""
    ) {
      return this.notify("Please enter new work experience details");
    }
    this.setState({
      experiences: [...this.state.experiences, ...Experiencez].reverse(),
    });
    this.setState({
      organizationname: "",
      organizationposition: "",
      jobdescription: "",
      mycurrentwork: "",
      startDate: "",
      endDate: "",
    });
  };
  submitForm = (e) => {
    e.preventDefault();
    const {
      certifications,
      about,
      skills,
      facebook,
      linkedin,
      twitter,
      experiences,
      references,
      education,
      instagram,
      userHasAddedExperience,
    } = this.state;
    console.log(skills);
    const availableToken = sessionStorage.getItem("userToken");
    const token = availableToken ? JSON.parse(availableToken) : "";
    const data = {
      about,
      experience: experiences,
      certification: certifications,
      skills,
      education,
      reference: references,
      social_media: { instagram, facebook, linkedin, twitter },
    };
    console.log(data);
    Axios.post<any, AxiosResponse<any>>(
      `${API}/dashboard/profilebuilder`,
      data,
      {
        headers: { Authorization: `Token ${token}` },
      }
    )
      .then((res) => {
        console.log(res);
        this.notify("Successful");
      })
      .catch((err) => {
        if (err) {
          console.log(err.response);
          this.notify("Failed to send");
        }
      });
  };
  componentDidMount() {
    const availableToken = sessionStorage.getItem("userToken");
    const token = availableToken ? JSON.parse(availableToken) : "";
    Axios.get<any, AxiosResponse<any>>(`${API}/dashboard/profilebuilder`, {
      headers: { Authorization: `Token ${token}` },
    })
      .then((res) => {
        console.log(res);
        this.setState({
          skills: res.data.skills,
          about: res.data.about,
          experiences: res.data.user_experiences,
          certifications: res.data.certification,
          education: res.data.education,
          references: res.data.user_refernce,
          socials: res.data.user_social,
          facebook: res.data.user_social.facebook,
          linkedin: res.data.user_social.linkedin,
          instagram: res.data.user_social.instagram,
          twitter: res.data.user_social.twitter,
        });
      })
      .catch((err) => {
        if (err) {
          console.log(err.response);
          this.notify("Failed to fetch data");
        }
      });
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    console.log(e.target.value);
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
  openWarning = () => {
    this.setState({
      showWarning: true,
    });
  };
  onchangeCurrentWork = (e: any) => {
    this.setState({
      mycurrentwork: this.state.mycurrentwork ? false : true,
    });
    console.log(this.state.mycurrentwork);
  };
  onchange = (e: any) => {
    this.setState({
      mycurrentwork: this.state.mycurrentwork ? false : true,
    });
    console.log(this.state.mycurrentwork);
  };
  deleteExperience = (id) => {
    const Experiences = this.state.experiences;
    Experiences.splice(id, 1);
    this.setState({
      experiences: Experiences,
    });
    console.log(Experiences);
  };
  deleteReference = (id) => {
    const References = this.state.references;
    References.splice(id, 1);
    this.setState({
      references: References,
    });
  };
  deleteEducation = (id) => {
    const Education = this.state.education;
    Education.splice(id, 1);
    this.setState({
      education: Education,
    });
  };
  deleteCertification = (id) => {
    const Certifications = this.state.certifications;
    Certifications.splice(id, 1);
    this.setState({
      certifications: Certifications,
    });
    console.log(Certifications);
  };
  deleteSkill = (id): void => {
    const Skills = this.state.skills;
    console.log(Skills[id]);
    const foundIndex = Skills.indexOf(Skills[id]);
    console.log(foundIndex);
    Skills.splice(id, 1);
    this.setState({
      skills: Skills,
    });
  };
  notify = (message: string) => toast(message, { containerId: "B" });
  handleChangeB = (e) => {
    this.setState({
      mountedExperience: [{ [e.target.id]: e.target.value }],
    });
  };
  render() {
    const {
      fullname,
      education,
      isLoading,
      referencename,
      certifications,
      certificateInstitution,
      jobdescription,
      organizationname,
      referencetitle,
      referencephone,
      referenceemail,
      experiences,
      referencerelationship,
      organizationposition,
      certificateName,
      valid_from,
      valid_till,
      about,
      skill,
      skills,
      references,
      mycurrentwork,
      startDate,
      endDate,
      institutionname,
      degreeObtained,
      institutionLocation,
      expirationStatus,
      linkedin,
      twitter,
      instagram,
      facebook,
      width,
    } = this.state;
    console.log(certifications);
    return (
      <>
        <Container fluid={true} className="contann122">
          <DashboardNav builder={true}  />
          <Row>
            <SideBarNewDashboard builder={true} />
            <Col md={10} sm={12} className="prm">
              <DashboardLargeScreenNav title="Profile Builder" />
              <Row>
                <Col md={11} className="kisls">
                  <div className="kdashheader uidd11">
                    <div className="fjss">
                      <div>
                        {" "}
                        <div className="smalls">
                          <img
                            src={avatar}
                            className="avatar avar"
                            alt="avatar"
                          />
                        </div>
                        <span className="kdashheaderlight idds">
                          <span className="ksname">
                            {" "}
                            {fullname ? fullname : ""}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <Row>
                    <Col md={12}>
                      <DashboardInfoArea />
                      <hr />
                      <Row className="rowla">
                        <Col md={12}>
                          <div className="whatdoudo">About </div>
                          <input
                            type="text"
                            className="form-control jobr"
                            value={about}
                            onChange={this.handleChange}
                            id="about"
                            placeholder="Provide a description of what defines you and your process"
                          />
                        </Col>
                      </Row>
                      <hr />
                      <Row className="rowla">
                        <Col md={12}>
                          <div className="whatdoudo offpad">
                            <div className="what12">
                              Experience{" "}
                              <div
                                className="plusnew"
                                onClick={this.addExperience}
                                title="Add entry"
                              >
                                +
                              </div>
                            </div>
                          </div>
                          <Row>
                            <Col md={6}>
                              <div className="plusnew1 ">Organization</div>
                              <input
                                id="organizationname"
                                onChange={this.handleChange}
                                value={organizationname}
                                className="form-control jobr subhyt"
                                placeholder=""
                              />
                            </Col>
                            <Col md={6}>
                              <div className="whatdoudo offpad"></div>
                              <div className="plusnew1">Position</div>
                              <textarea
                                id="organizationposition"
                                value={organizationposition}
                                onChange={this.handleChange}
                                className="form-control jobr subhyt"
                                placeholder=""
                              />
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6}>
                              <div className="plusnew1">Started From</div>
                              <Form.Control
                                type="date"
                                value={startDate}
                                id="startDate"
                                className="fmc jobr subhyt"
                                onChange={this.handleChange}
                              ></Form.Control>
                            </Col>
                            <Col md={6}>
                              <div className="qflex">
                                <label className="checkcontainer">
                                  <input
                                    type="checkbox"
                                    value={mycurrentwork}
                                    onChange={this.onchangeCurrentWork}
                                    name="mycurrentwork"
                                  />
                                  <span className="checkmark"></span>
                                </label>
                                <div className="plusnew2">
                                  I currently work here
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6}>
                              <div className="plusnew1">To</div>
                              <Form.Control
                                type="date"
                                value={endDate}
                                id="endDate"
                                className="fmc jobr subhyt"
                                onChange={this.handleChange}
                                disabled={mycurrentwork ? true : false}
                              ></Form.Control>
                            </Col>
                          </Row>
                          <Row className="rowla">
                            <Col md={12}>
                              <div className="plusnew1">Job Description</div>
                              <input
                                name=""
                                id="jobdescription"
                                value={jobdescription}
                                onChange={this.handleChange}
                                className="form-control jobr"
                                onKeyPress={(e) => {
                                  console.log(e);
                                  if (e.key == "Enter") {
                                    this.addExperience();
                                  }
                                }}
                                placeholder=""
                              />
                            </Col>
                          </Row>
                        </Col>
                        {experiences.map((data, index) => (
                          <Col
                            md={12}
                            className="experience animated fadeIn"
                            key={index}
                          >
                            <div className="deleee">
                              <i
                                className="fa fa-trash"
                                onClick={() => this.deleteExperience(index)}
                              ></i>
                            </div>
                            <Row>
                              <Col md={6}>
                                <div className="plusnew1 plusnew12">
                                  Organization
                                </div>
                                <input
                                  id="organizationname"
                                  onChange={this.handleChangeB}
                                  value={data.organisation}
                                  className="form-control jobr subhyt subhyt12"
                                  placeholder={""}
                                  disabled={true}
                                />
                              </Col>
                              <Col md={6}>
                                <div className="whatdoudo offpad"></div>
                                <div className="plusnew1 plusnew12">
                                  Position
                                </div>
                                <textarea
                                  id="organizationposition"
                                  value={data.position}
                                  onChange={this.handleChange}
                                  className="form-control jobr subhyt subhyt12"
                                  placeholder=""
                                  disabled={true}
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <div className="plusnew1 plusnew12">
                                  Started From
                                </div>
                                <Form.Control
                                  value={data.started_from}
                                  id="startDate"
                                  className="fmc jobr subhyt subhyt12"
                                  disabled={true}
                                ></Form.Control>
                              </Col>
                              <Col md={6}>
                                <div className="qflex">
                                  <label className="checkcontainer">
                                    <input
                                      type="checkbox"
                                      disabled={true}
                                      checked={data.current}
                                      onChange={this.onchangeCurrentWork}
                                      name="mycurrentwork"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                  <div className="plusnew2">
                                    I currently work here
                                  </div>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <div className="plusnew1 plusnew12">To</div>
                                <input
                                  id="organizationname"
                                  value={data.to}
                                  className="form-control jobr subhyt plusnew12"
                                  placeholder=""
                                  disabled={true}
                                />
                              </Col>
                            </Row>
                            <Row className="rowla">
                              <Col md={12}>
                                <div className="plusnew1 plusnew12">
                                  Job Description
                                </div>
                                <textarea
                                  name=""
                                  id="jobdescription"
                                  value={data.job_description}
                                  onChange={this.handleChange}
                                  className="form-control jobr plusnew12"
                                  placeholder=""
                                  disabled={true}
                                />
                              </Col>
                            </Row>
                          </Col>
                        ))}
                      </Row>
                      <hr />
                      <Row className="rowla">
                        <Col md={12}>
                          <div className="whatdoudo offpad">
                            <div className="what12">
                              Education{" "}
                              <div
                                className="plusnew"
                                onClick={this.addNewEducation}
                                title="Add entry"
                              >
                                +
                              </div>
                            </div>
                          </div>
                          <Row>
                            <Col md={6}>
                              <div className="plusnew1">
                                Name Of Institution
                              </div>
                              <input
                                id="institutionname"
                                onChange={this.handleChange}
                                value={institutionname}
                                className="form-control jobr subhyt"
                                placeholder=""
                              />
                            </Col>
                            <Col md={6}>
                              <div className="whatdoudo offpad"></div>
                              <div className="plusnew1">Degree</div>
                              <textarea
                                id="degreeObtained"
                                value={degreeObtained}
                                onChange={this.handleChange}
                                className="form-control jobr subhyt"
                                placeholder=""
                              />
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6}>
                              <div className="plusnew1">Location</div>
                              <Form.Control
                                type="text"
                                value={institutionLocation}
                                id="institutionLocation"
                                className="fmc jobr subhyt"
                                onChange={this.handleChange}
                                onKeyPress={(e) => {
                                  console.log(e);
                                  if (e.key == "Enter") {
                                    this.addNewEducation();
                                  }
                                }}
                              ></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                        {education.map((data, index) => (
                          <Col md={12}>
                            <div className="deleee">
                              <i
                                className="fa fa-trash"
                                onClick={() => this.deleteEducation(index)}
                              ></i>
                            </div>
                            <Row>
                              <Col md={6}>
                                <div className="plusnew1 plusnew12">
                                  Name Of Institution
                                </div>
                                <input
                                  id={data.institution}
                                  onChange={this.handleChange}
                                  value={data.institution}
                                  className="form-control jobr subhyt subhyt12"
                                  placeholder=""
                                  disabled={true}
                                />
                              </Col>
                              <Col md={6}>
                                <div className="whatdoudo offpad"></div>
                                <div className="plusnew1 plusnew12">Degree</div>
                                <textarea
                                  id={data.degree}
                                  value={data.degree}
                                  onChange={this.handleChange}
                                  className="form-control jobr subhyt subhyt12"
                                  placeholder=""
                                  disabled={true}
                                />
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <div className="plusnew1 plusnew12">
                                  Location
                                </div>
                                <Form.Control
                                  type="text"
                                  value={data.location}
                                  id="institutionLocation"
                                  className="fmc jobr subhyt subhyt12"
                                  onChange={this.handleChange}
                                  disabled={true}
                                ></Form.Control>
                              </Col>
                            </Row>
                          </Col>
                        ))}
                      </Row>
                      <hr />
                      <Row>
                        <Col md={12}>
                          <div className="whatdoudo offpad">
                            <div className="what12 lass">
                              Skills{" "}
                              <div
                                className="plusnew"
                                onClick={this.addNewSkill}
                                title="Add entry"
                              >
                                +
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col md={12} className="">
                          <div className="plusnew1 ll122">
                            {skills.map((data, ind) => (
                              <div className="skills" key={ind}>
                                {data.skill}{" "}
                                <span
                                  className="dlete"
                                  onClick={() => this.deleteSkill(ind)}
                                >
                                  &times;
                                </span>
                              </div>
                            ))}
                          </div>
                          <input
                            type="text"
                            value={skill}
                            id="skill"
                            onKeyPress={(e) => {
                              console.log(e);
                              if (e.key == "Enter") {
                                this.addNewSkill();
                              }
                            }}
                            onChange={this.handleChange}
                            className="form-control jobr"
                          />
                        </Col>
                      </Row>
                      <hr />
                      <Row className="rowla">
                        <Col md={12}>
                          <div className="whatdoudo offpadd1">
                            <div className="what12">
                              Certification{" "}
                              <div
                                className="plusnew"
                                onClick={this.addNewCertification}
                                title="Add entry"
                              >
                                +
                              </div>
                            </div>
                          </div>
                          <Row>
                            <Col md={6}>
                              <div className="plusnew1">Certificate Name</div>
                              <textarea
                                name=""
                                className="form-control jobr subhyt"
                                value={certificateName}
                                id="certificateName"
                                onChange={this.handleChange}
                                placeholder=""
                              />
                            </Col>
                            <Col md={6}>
                              <div className="whatdoudo offpad"></div>
                              <div className="plusnew1">Institution</div>
                              <textarea
                                name=""
                                value={certificateInstitution}
                                id="certificateInstitution"
                                onChange={this.handleChange}
                                className="form-control jobr subhyt"
                                placeholder=""
                              ></textarea>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6}>
                              <div className="plusnew1">Valid From</div>
                              <Form.Control
                                type="date"
                                value={valid_from}
                                id="valid_from"
                                className="fmc jobr subhyt"
                                onChange={this.handleChange}
                              ></Form.Control>
                              <Col md={6}>
                                <div className="qflex app11">
                                  <label className="checkcontainer">
                                    <input
                                      type="checkbox"
                                      value={expirationStatus}
                                      onChange={this.onchange}
                                      id="expirationStatus"
                                    />
                                    <span className="checkmark"></span>
                                  </label>
                                  <div className="plusnew2">
                                    Does not expire
                                  </div>
                                </div>
                              </Col>
                            </Col>
                            <Col md={6}>
                              <div className="plusnew1">To</div>
                              <Form.Control
                                type="date"
                                value={valid_till}
                                id="valid_till"
                                className="fmc jobr subhyt"
                                onChange={this.handleChange}
                                onKeyPress={(e) => {
                                  console.log(e);
                                  if (e.key == "Enter") {
                                    this.addNewCertification();
                                  }
                                }}
                              ></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                        {certifications.map((data, index) => (
                          <Col md={12}>
                            <div className="whatdoudo offpadd1">
                              <div className="what12"></div>
                            </div>
                            <div className="deleee">
                              <i
                                className="fa fa-trash"
                                onClick={() => this.deleteCertification(index)}
                              ></i>
                            </div>
                            <Row>
                              <Col md={6}>
                                <div className="plusnew1 plusnew12">
                                  Certificate Name
                                </div>
                                <textarea
                                  name=""
                                  className="form-control jobr subhyt subhyt12"
                                  value={data.certificate_name}
                                  id="certificateName"
                                  onChange={this.handleChange}
                                  placeholder=""
                                />
                              </Col>
                              <Col md={6}>
                                <div className="whatdoudo offpad"></div>
                                <div className="plusnew1 plusnew12">
                                  Institution
                                </div>
                                <textarea
                                  name=""
                                  value={data.institution}
                                  id="certificateInstitution"
                                  onChange={this.handleChange}
                                  className="form-control jobr subhyt plusnew12"
                                  placeholder=""
                                ></textarea>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <div className="plusnew1">Valid From</div>
                                <Form.Control
                                  type="date"
                                  value={data.valid_from}
                                  id="valid_from"
                                  className="fmc jobr subhyt plusnew12"
                                  onChange={this.handleChange}
                                ></Form.Control>
                                <Col md={6}>
                                  <div className="qflex app11">
                                    <label className="checkcontainer">
                                      <input
                                        type="checkbox"
                                        value={expirationStatus}
                                        checked={data.status ? true : false}
                                        id="expirationStatus"
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                    <div className="plusnew2 plusnew12">
                                      Does not expire
                                    </div>
                                  </div>
                                </Col>
                              </Col>
                              <Col md={6}>
                                <div className="plusnew1">To</div>
                                <Form.Control
                                  type="date"
                                  value={data.valid_till}
                                  id="valid_till"
                                  className="fmc jobr subhyt plusnew12"
                                  onChange={this.handleChange}
                                ></Form.Control>
                              </Col>
                            </Row>
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col md={12}>
                      <div className="whatdoudo unbtm">
                        <div className="what12">
                          Reference{" "}
                          <div
                            className="plusnew"
                            onClick={this.addNewReferences}
                            title="Add entry"
                          >
                            +
                          </div>
                        </div>
                      </div>
                      <Row>
                        <Col md={6}>
                          <div className="plusnew1"> Name</div>
                          <textarea
                            name=""
                            id="referencename"
                            onChange={this.handleChange}
                            value={referencename}
                            className="form-control jobr subhyt"
                            placeholder=""
                          />
                        </Col>
                        <Col md={6}>
                          <div className="whatdoudo offpad"></div>
                          <div className="plusnew1">Title</div>
                          <textarea
                            name=""
                            id="referencetitle"
                            value={referencetitle}
                            onChange={this.handleChange}
                            className="form-control jobr subhyt"
                            placeholder=""
                          />
                        </Col>
                        <Col md={6}>
                          <div className="plusnew1">Phone Number</div>
                          <textarea
                            name=""
                            id="referencephone"
                            value={referencephone}
                            onChange={this.handleChange}
                            className="form-control jobr subhyt"
                            placeholder=""
                          />
                        </Col>
                        <Col md={6}>
                          <div className="whatdoudo offpad"></div>
                          <div className="plusnew1">Email</div>
                          <textarea
                            name=""
                            id="referenceemail"
                            value={referenceemail}
                            onChange={this.handleChange}
                            className="form-control jobr subhyt"
                            placeholder=""
                          ></textarea>
                        </Col>
                        <Col md={6}>
                          <div className="whatdoudo offpad"></div>
                          <div className="plusnew1">Relationship</div>
                          <input
                            name=""
                            id="referencerelationship"
                            value={referencerelationship}
                            onChange={this.handleChange}
                            className="form-control jobr subhyt"
                            placeholder=""
                            onKeyPress={(e) => {
                              console.log(e);
                              if (e.key == "Enter") {
                                this.addNewReferences();
                              }
                            }}
                          />
                        </Col>
                      </Row>
                    </Col>
                    {references.map((data, index) => (
                      <Col md={12}>
                        <div className="whatdoudo unbtm"></div>
                        <div className="deleee">
                          <i
                            className="fa fa-trash"
                            onClick={() => this.deleteReference(index)}
                          ></i>
                        </div>
                        <Row>
                          <Col md={6}>
                            <div className="plusnew1 plusnew12"> Name</div>
                            <textarea
                              name=""
                              id="referencename"
                              onChange={this.handleChange}
                              value={data.name}
                              className="form-control jobr subhyt plusnew12"
                              placeholder=""
                            />
                          </Col>
                          <Col md={6}>
                            <div className="whatdoudo offpad"></div>
                            <div className="plusnew1 plusnew12">Title</div>
                            <textarea
                              name=""
                              id="referencetitle"
                              value={data.title}
                              onChange={this.handleChange}
                              className="form-control jobr subhyt plusnew12"
                              placeholder=""
                            />
                          </Col>
                          <Col md={6}>
                            <div className="plusnew1 plusnew12">
                              Phone Number
                            </div>
                            <textarea
                              name=""
                              id="referencephone"
                              value={data.phone}
                              onChange={this.handleChange}
                              className="form-control jobr subhyt plusnew12"
                              placeholder=""
                            />
                          </Col>
                          <Col md={6}>
                            <div className="whatdoudo offpad"></div>
                            <div className="plusnew1 plusnew12">Email</div>
                            <textarea
                              name=""
                              id="referenceemail"
                              value={data.ref_email}
                              onChange={this.handleChange}
                              className="form-control jobr subhyt plusnew12"
                              placeholder=""
                            ></textarea>
                          </Col>
                          <Col md={6}>
                            <div className="whatdoudo offpad"></div>
                            <div className="plusnew1 plusnew12">
                              Relationship
                            </div>
                            <textarea
                              name=""
                              id="referencerelationship"
                              value={data.relationship}
                              onChange={this.handleChange}
                              className="form-control jobr subhyt plusnew12"
                              placeholder=""
                            />
                          </Col>
                        </Row>
                      </Col>
                    ))}
                  </Row>
                  <hr />
                  <Row className="rowla">
                    <Col md={12}>
                      <div className="whatdoudo offpadd1">
                        <div className="what12">Social Media Link</div>
                      </div>
                      <Row>
                        <Col md={6}>
                          <div className="plusnew1">LinkedIn</div>
                          <textarea
                            name=""
                            id="linkedin"
                            value={linkedin}
                            onChange={this.handleChange}
                            className="form-control jobr subhyt"
                            placeholder=""
                          />
                        </Col>
                        <Col md={6}>
                          <div className="whatdoudo offpad"></div>
                          <div className="plusnew1">Twitter</div>
                          <textarea
                            name=""
                            id="twitter"
                            value={twitter}
                            onChange={this.handleChange}
                            className="form-control jobr subhyt"
                            placeholder=""
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={6}>
                          <div className="plusnew1">Facebook</div>
                          <textarea
                            name=""
                            id="facebook"
                            value={facebook}
                            onChange={this.handleChange}
                            className="form-control jobr subhyt"
                            placeholder=""
                          />
                        </Col>
                        <Col md={6}>
                          <div className="whatdoudo offpad"></div>
                          <div className="plusnew1">Instagram</div>
                          <textarea
                            name=""
                            id="instagram"
                            value={instagram}
                            onChange={this.handleChange}
                            className="form-control jobr subhyt"
                            placeholder=""
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} className="printcv">
                      <div className="savebtn" onClick={this.submitForm}>
                        Save
                      </div>
                      <div className="print">Print</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <ToastContainer
              enableMultiContainer
              containerId={"B"}
              toastClassName="bg-info text-white"
              hideProgressBar={true}
              position={toast.POSITION.TOP_CENTER}
            />
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
                <Button variant="danger" className="btnws">
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
export default ProfileBuilder;
