import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import "./signup.css";
import axios, { AxiosResponse } from "axios";
import { API } from "../../../config";
import formavatar from "../../../assets/formavatar.png";
import formemail from "../../../assets/formemail.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../HomeComponents/footer";
import Navbar from "../HomeComponents/navbar";
import demoLogo from "../../../assets/clarity.png";

interface State {
  firstname: string;
  email: string;
  lastname: string;
  successMsg: string;
  errorMessage: string;
  password: string;
  isLoading: boolean;
  kigenni: boolean;
  profession: string;
  token: string;
}
const SignUpKigenni: React.FunctionComponent = (props: any) => {
  const [state, setFormState] = useState<State>({
    firstname: "",
    email: "",
    lastname: "",
    errorMessage: "",
    successMsg: "",
    isLoading: false,
    kigenni: true,
    password: "",
    profession: "",
    token: "",
  });
  const {
    firstname,
    email,
    lastname,
    kigenni,
    errorMessage,
    successMsg,
    isLoading,
    password,
    profession,
    token,
  } = state;

  const professions = [
    { name: "Entrepreneur - Start-up phase" },
    { name: "Entrepreneur - Growing Business" },
    { name: "Entrepreneur - Established Business" },
    { name: "Working professional - Entry level" },
    { name: "Working professional - Mid-level" },
    { name: "Working professional - Senior level" },
    { name: "Student - Postgraduate" },
    { name: "Student - Undergraduate" },
    { name: "Student - Secondary school" },
  ];
  const sendFormData = (e) => {
    e.preventDefault();
    setFormState({ ...state, isLoading: true });
    const data = {
      first_name: firstname,
      last_name: lastname,
      email,
      password,
      profession,
      password2: password,
      thirdparty: "saedconnect",
      info: "Not Available",
    };
    axios
      .post<any, AxiosResponse<any>>(`${API}/accounts/signupthirdparty/`, data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setFormState({
            ...state,
            successMsg: response?.data[0]?.message,
            isLoading: false,
            token: response?.data[0].token,
          });
        }
      })
      .catch((error) => {
        console.log(error.response);
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
          errorMessage: "Signup failed",
          isLoading: false,
        });
      });
  };

  const changeActionOnFormData = (e: any) => {
    setFormState({
      ...state,
      [e.target.name]: e.target.value,
      errorMessage: "",
      successMsg: "",
    });
  };
  const handleSelectChange = (e) => {
    setFormState({
      ...state,
      profession: e.target.value,
    });
  };

  return (
    <>
      <Navbar />
      <Container fluid={true}>
        <Row className="kli bcbv">
          <Col md={4} className="">
            <div className="kigenni1">
              <img src={demoLogo} className="uysh" alt="clarity_logo" />
            </div>
            <div className="kigenni2">
              Increase your career appeal with the right insight
            </div>
            <div className="kigenni3">
              {" "}
              Take the Clarity assessment to discover your career advantage
            </div>
            <div>
              <Link to="/signin" className="clscc">
                Already have an account? Sign in
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <div className=" mjcn">Let’s get started </div>
            {errorMessage && (
              <Alert key={2} variant="danger">
                {errorMessage}
              </Alert>
            )}
            {successMsg && (
              <Alert key={2} variant="info">
                {successMsg}
              </Alert>
            )}
            <Form onSubmit={sendFormData}>
              <Row>
                <Col>
                  <Form.Group className="bvbcm" controlId="formBasicCheckbox">
                    <img
                      src={formavatar}
                      className="formavatar"
                      alt="formavatar"
                    />
                    <Form.Control
                      className="field3"
                      value={firstname}
                      onChange={changeActionOnFormData}
                      name="firstname"
                      placeholder="First Name"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="bvbcm" controlId="formBasicPassword">
                <img src={formavatar} className="formavatar" alt="formavatar" />
                <Form.Control
                  type="text"
                  className="field3"
                  value={lastname}
                  name="lastname"
                  onChange={changeActionOnFormData}
                  placeholder="Last Name"
                />
              </Form.Group>
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
              <Form.Group className="selectprof">
                <img src={formavatar} className="formavatar" alt="formavatar" />
                <Form.Control
                  as="select"
                  className="selecss"
                  onChange={handleSelectChange}
                >
                  <option>Select Profile</option>
                  {professions.map((x, index) => (
                    <option value={x.name} key={x.name}>
                      {x.name}
                    </option>
                  ))}
                </Form.Control>
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

export default SignUpKigenni;
