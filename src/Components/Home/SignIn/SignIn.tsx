import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import axios, { AxiosResponse } from "axios";
import { API } from "../../../config";
import formemail from "../../../assets/formemail.png";
import { Link } from "react-router-dom";
import Footer from "../HomeComponents/footer";
import Navbar from "../HomeComponents/navbar";
import demoLogo from "../../../assets/clarity.png";

interface State {
  email: string;
  errorMessage: string;
  password: string;
  isLoading: boolean;
  kigenni: boolean;
  token: string;
}
const SignInKigenni: React.FunctionComponent = (props: any) => {
  const [state, setFormState] = React.useState<State>({
    email: "",
    errorMessage: "",
    isLoading: false,
    kigenni: true,
    password: "",
    token: "",
  });
  const { email, kigenni, errorMessage, isLoading, password, token } = state;
  const sendFormData = (e) => {
    e.preventDefault();
    setFormState({ ...state, isLoading: true });
    const data = {
      email,
      password,
    };
    axios
      .post<any, AxiosResponse<any>>(`${API}/accounts/loginthirdparty/`, data)
      .then((response) => {
        console.log(response);
        if (response?.data?.token) {
          sessionStorage.setItem(
            "userToken",
            JSON.stringify(response?.data?.token)
          );
          setFormState({
            ...state,
            isLoading: false,
            token: response?.data.token,
          });
          getUserInfo(response?.data?.token);
          getCurrentAssessmentPosition(response?.data?.token);
        }
      })
      .catch((error) => {
        if (error?.response?.data?.error) {
          return setFormState({
            ...state,
            errorMessage: error.response.data.error,
            isLoading: false,
          });
        }
        if (error && error.response && error.response.data) {
          return setFormState({
            ...state,
            errorMessage: error.response.data[0].message,
            isLoading: false,
          });
        }
        if (error && error.response && error.response.status === 400) {
          return setFormState({
            ...state,
            errorMessage: error.response.data[0].message,
            isLoading: false,
          });
        }
        setFormState({
          ...state,
          errorMessage: "Login failed",
          isLoading: false,
        });
      });
  };

  const changeActionOnFormData = (e: any) => {
    setFormState({
      ...state,
      [e.target.name]: e.target.value,
      errorMessage: "",
    });
  };
  const getCurrentAssessmentPosition = (token: string): void => {
    axios
      .get(`${API}/progress`, { headers: { Authorization: `Token ${token}` } })
      .then((response) => {
        console.log(response);
        if (
          (response.status === 200 &&
            response.data[0].next === "phase_four_nature") ||
          response.data[0].next === "phase_four_health" ||
          response.data[0].next === "phase_four_building" ||
          response.data[0].next === "phase_four_creative"
        ) {
          return props.history.push(`/assessmentphasefour`);
        }
        if (
          (response.status === 200 &&
            response.data[0].next === "phase_four_sports") ||
          response.data[0].next === "phase_four_business" ||
          response.data[0].next === "phase_four_stem" ||
          response.data[0].next === "phase_four_humanitarian"
        ) {
          return props.history.push(`/assessmentphasefour1`);
        }
        if (response.status === 200 && response.data[0].next === "phase_one") {
          return props.history.push(`/assessmentphaseone`);
        }
        if (response.status === 200 && response.data[0].next === "phase_two") {
          return props.history.push(`/assessmentphasetwo`);
        }
        if (
          response.status === 200 &&
          response.data[0].next === "phase_three"
        ) {
          return props.history.push(`/assessmentphasethree`);
        }
        if (response.status === 200 && response.data[0].next === "phase_five") {
          return props.history.push(`/assessmentphasefive`);
        }
        if (response.status === 200 && response.data[0].next === "phase_six") {
          return props.history.push(`/assessmentphasesix`);
        }
        if (
          response.status === 200 &&
          response.data[0].next === "phase_seven"
        ) {
          return props.history.push(`/assessmentphaseseven`);
        }
        if (response.status === 200 && response.data[0].next === "home") {
          return props.history.push(`/overview`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getUserInfo = (token: string): any => {
    axios
      .get(`${API}/currentuser`, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          sessionStorage.setItem("user", JSON.stringify(response?.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Navbar />
      <Container fluid={true}>
        <Row className="kli bcbv">
          <Col md={4} className="">
            <div className="kigenni1">
              {" "}
              <img src={demoLogo} className="uysh" alt="clarity_logo" />
            </div>
            <div className="kigenni3">
              {" "}
              Take the Clarity Assessment to find direction
            </div>
            <div>
              <Link to="/thirdparty/signup" className="clscc">
                Not registered ? Sign Up
              </Link>
            </div>
            <hr />
            <span>
              <Link to="/forgotpassword" className="clscc">
                Forgot Password?
              </Link>
            </span>
          </Col>
          <Col md={4}>
            <div className=" mjcn">Let’s get started</div>
            {errorMessage && (
              <Alert key={2} variant="danger">
                {errorMessage}
              </Alert>
            )}
            <Form onSubmit={sendFormData}>
              <Form.Group className="bvbcm" controlId="formBasicEmail">
                <img src={formemail} className="formavatar" alt="formavatar" />
                <Form.Control
                  type="email"
                  className="field3"
                  value={email}
                  name="email"
                  onChange={changeActionOnFormData}
                  placeholder="Email Address"
                />
              </Form.Group>
              <Form.Group className="bvbcm" controlId="formBasicEmail">
                <img src={formemail} className="formavatar" alt="formavatar" />
                <Form.Control
                  type="password"
                  className="field3"
                  value={password}
                  name="password"
                  onChange={changeActionOnFormData}
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group></Form.Group>
              <Button variant="primary" className="subbtn ncn" type="submit">
                {!isLoading ? "Start Assessment" : "Starting ..."}
              </Button>
            </Form>
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
};

export default SignInKigenni;
