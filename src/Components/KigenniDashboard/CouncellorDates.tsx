import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import "./kegennidashboard.css";
import axios, { AxiosResponse } from "axios";
import { API } from "../../config";
import Navbar from "../Home/HomeComponents/navbar";
import Footer from "../Home/HomeComponents/footer";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

class CouncellorDates extends React.Component<React.Props<any>> {
  state: any = {
    fullname: "",
    date: new Date(),
    availabledate: "",
    phone: "",
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    const availableToken = sessionStorage.getItem("userToken");
    const token = availableToken
      ? JSON.parse(availableToken)
      : window.location.assign("/signin");
    axios
      .get<any, AxiosResponse<any>>(`${API}/paiddashboard`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((response) => {
        console.log(response);
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
  onchange = (e) => {
    this.setState({
      feedbacktext: e.target.value,
    });
  };

  onChange = (date) => this.setState({ date });
  render() {
    console.log(this.state.date);
    const {
      fullname,
      phone,
      careerbussines,
      availabledate,
      feedbacktext,
    } = this.state;
    const startDate = new Date("2020,7,10");
    return (
      <>
        <Navbar />
        <Container fluid={true}>
          <Row className="kli6 bcbv">
            <Col md={12} className="scheduleheader">
              Schedule a meeting
            </Col>
            <Col md={7}>
              <Calendar
                onChange={this.onChange}
                value={this.state.date}
                minDate={new Date()}
                maxDate={new Date("2020,7,22")}
              />
            </Col>
            <Col md={3} className="availabledatewrapper">
              <div>
                <div className="availabledate notop">
                  <input
                    type="radio"
                    name="availabledate"
                    value={availabledate}
                  />
                  {"  "}
                  <div>09:00 am - 09:30am</div>
                </div>
                <div className="availabledate">
                  <input
                    type="radio"
                    name="availabledate"
                    value={availabledate}
                  />
                  {"  "}
                  <div>09:00 am - 09:30am</div>
                </div>
                <div className="availabledate">
                  <input
                    type="radio"
                    name="availabledate"
                    value={availabledate}
                  />
                  {"  "}
                  <div>09:00 am - 09:30am</div>
                </div>
                <div className="availabledate">
                  <input
                    type="radio"
                    name="availabledate"
                    value={availabledate}
                  />
                  {"  "}
                  <div>09:00 am - 09:30am</div>
                </div>
                <div className="availabledate">
                  <input
                    type="radio"
                    name="availabledate"
                    value={availabledate}
                  />
                  {"  "}
                  <div>09:00 am - 09:30am</div>
                </div>
                <div className="availabledate">
                  <input
                    type="radio"
                    name="availabledate"
                    value={availabledate}
                  />
                  {"  "}
                  <div>09:00 am - 09:30am</div>
                </div>
                <div className="availabledate">
                  <input
                    type="radio"
                    name="availabledate"
                    value={availabledate}
                  />
                  {"  "}
                  <div>09:00 am - 09:30am</div>
                </div>
              </div>
            </Col>
            <Col md={10} className="fw2">
              <textarea
                className="form-control whatdou"
                id=""
                cols={30}
                name="feedbacktext"
                onChange={this.onchange}
                value={feedbacktext}
                placeholder="What would you like to speak about"
                rows={10}
              ></textarea>
            </Col>
            <Col md={10} className="fw2">
              <Row className="shex">
                <Col md={5}>
                  <div className="enter11">Enter your phone number</div>
                  <input
                    className="form-control whatdou"
                    id=""
                    name="phone"
                    onChange={this.onchange}
                    value={phone}
                    placeholder="Phone number"
                  />
                </Col>
                <Col md={3} className="text-right">
                  <div className="booksession">
                    Book Session <span className="text-white">&#8594;</span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default CouncellorDates;
