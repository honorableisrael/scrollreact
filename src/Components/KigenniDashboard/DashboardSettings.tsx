import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./kegennidashboard.css";
import avatar from "../../assets/avatar.svg";
import SideBarNewDashboard from "./SideBarNewDashboard";
import Axios, { AxiosResponse } from "axios";
import { API } from "../../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardNav from "./DashboardNavBar";

class NewDashboardSettings extends React.Component {
  state: any = {
    last_name: "",
    first_name: "",
    errorMessage: "",
    email: "",
    address: "",
    phone: "",
    job_description: "",
    website_link: "",
    successMsg: false,
    isLoading: false,
    showWarning: false,
    width: 100,
  };
  validateForm = (e) => {
    const {
      first_name,
      last_name,
      email,
      address,
      phone,
      job_description,
      website_link,
    } = this.state;
    if (
      first_name === "" ||
      last_name === "" ||
      email === "" ||
      address === "" ||
      phone === "" ||
      job_description === "" ||
      website_link === ""
    ) {
      return this.notify("All fields are required");
    }
    else{
      this.submitForm(e)
    }
  };
  submitForm = (e) => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      email,
      address,
      phone,
      job_description,
      website_link,
    } = this.state;
    const availableToken = sessionStorage.getItem("userToken");
    const token = availableToken ? JSON.parse(availableToken) : "";
    const data = {
      first_name,
      last_name,
      email,
      address,
      phone,
      job_description,
      website_link,
    };
    Axios.post<any, AxiosResponse<any>>(`${API}/dashboard/profile`, data, {
      headers: { Authorization: `Token ${token}` },
    })
      .then((res) => {
        console.log(res.data);
        this.notify("Successful");
      })
      .catch((err) => {
        console.log(err.response);
        this.notify("failed");
        if (err) {
          console.log(err);
        }
      });
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    const availableToken = sessionStorage.getItem("userToken");
    const token = availableToken
      ? JSON.parse(availableToken)
      : window.location.assign("/signin");
    const data = {};
    Axios.get<any, AxiosResponse<any>>(`${API}/dashboard/profile`, {
      headers: { Authorization: `Token ${token}` },
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          this.setState({
            ...response.data,
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

  notify = (message: string) => toast(message, { containerId: "B" });
  render() {
    const {
      fullname,
      email,
      address,
      phone,
      first_name,
      last_name,
      job_description,
      website_link,
    } = this.state;
    return (
      <>
        <Container fluid={true} className="contann122">
          <DashboardNav />
          <Row>
            <SideBarNewDashboard settings={true} />
            <Col md={10} sm={12} className="prm">
              <div className="navdash">
                <div className="overview ovf">Settings</div>
                <div className="prm111">
                  <span>
                    <img src={avatar} className="avatar11" alt="avatar" />
                  </span>
                </div>
              </div>
              <Row>
                <Col md={11} className="kisls">
                  <div className="kdashheader uidd11">
                    <div className="floo">
                      <div>
                        {" "}
                        <div className="smalls">
                          <img
                            src={avatar}
                            className="avatar avar"
                            alt="avatar"
                          />
                        </div>
                      </div>
                      <div className="picic">
                        <input type="file" name="image" />
                      </div>
                    </div>
                    <div></div>
                  </div>
                  <Row>
                    <Col md={12}>
                      <hr />
                      <Row className="rowla">
                        <Col md={6}>
                          <div className="whatdoudo">First Name </div>
                          <textarea
                            name="first_name"
                            value={first_name}
                            onChange={this.handleChange}
                            className="form-control jobr"
                            placeholder=""
                          ></textarea>
                        </Col>
                        <Col md={6}>
                          <div className="whatdoudo">Last Name </div>
                          <textarea
                            name="last_name"
                            value={last_name}
                            onChange={this.handleChange}
                            className="form-control jobr"
                            placeholder=""
                          ></textarea>
                        </Col>
                      </Row>
                      <Row className="rowla">
                        <Col md={6}>
                          <div className="whatdoudo">Address </div>
                          <textarea
                            name="address"
                            value={address}
                            onChange={this.handleChange}
                            className="form-control jobr"
                            placeholder=""
                          ></textarea>
                        </Col>
                      </Row>
                      <Row className="rowla">
                        <Col md={6}>
                          <div className="whatdoudo">Email </div>
                          <textarea
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            className="form-control jobr"
                            placeholder=""
                          />
                        </Col>
                        <Col md={6}>
                          <div className="whatdoudo">Phone Number </div>
                          <textarea
                            name="phone"
                            value={phone}
                            onChange={this.handleChange}
                            className="form-control jobr"
                            placeholder=""
                          />
                        </Col>
                      </Row>
                      <Row className="rowla">
                        <Col md={6}>
                          <div className="whatdoudo">Occupation </div>
                          <textarea
                            name="job_description"
                            value={job_description}
                            onChange={this.handleChange}
                            className="form-control jobr"
                            placeholder=""
                          ></textarea>
                        </Col>
                        <Col md={6}>
                          <div className="whatdoudo">Website Link </div>
                          <textarea
                            name="website_link"
                            value={website_link}
                            onChange={this.handleChange}
                            className="form-control jobr"
                            placeholder=""
                          ></textarea>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <div className="text-right">
                    <div
                      className="kskthin col-md-11"
                      onClick={this.validateForm}
                    >
                      Submit
                    </div>
                  </div>
                </Col>
                <ToastContainer
                  enableMultiContainer
                  containerId={"B"}
                  toastClassName="bg-info text-white"
                  hideProgressBar={true}
                  position={toast.POSITION.TOP_CENTER}
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default NewDashboardSettings;
