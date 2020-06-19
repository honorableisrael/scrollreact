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

interface State {
  email: string;
  errorMessage: string;
  password: string;
  isLoading: boolean;
  kigenni: boolean;
  message: string;
}
const ForgotPassword: React.FunctionComponent = (props: any) => {
  const [state, setFormState] = React.useState<State>({
    email: "",
    errorMessage: "",
    isLoading: false,
    kigenni: true,
    password: "",
    message: "",
  });
  const { email, kigenni, errorMessage, isLoading, password, message } = state;
  const sendFormData = (e) => {
    e.preventDefault();
    setFormState({ ...state, isLoading: true });
    const data = {
      email,
    };
    axios
      .post<any, AxiosResponse<any>>(`${API}/passwordresetemail`, data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setFormState({
            ...state,
            isLoading: false,
            message: response?.data[0]?.message,
          });
        }
      })
      .catch((error) => {
        console.log(error.response);
        if (error && error.response && error.response.status === 500) {
          return setFormState({
            ...state,
            errorMessage: error?.response?.data[0]?.message,
            isLoading: false,
          });
        }
        if (error && error.response && error.response.status === 500) {
          return setFormState({
            ...state,
            errorMessage: error?.response?.data?.split(" ")[0],
            isLoading: false,
          });
        }
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
          errorMessage: "failed to send",
          isLoading: false,
        });
      });
  };

  const changeActionOnFormData = (e: any) => {
    setFormState({
      ...state,
      [e.target.name]: e.target.value,
      errorMessage: "",
      message:"",
    });
  };
  return (
    <>
      {/* <Navbar/> */}
      <Container fluid={true}>
        <Row className="kli bcbv">
          <Col md={4} className="">
            <div className="kigenni1">clarity</div>
            <div className="kigenni3">
              {" "}
              Take the Clarity Assessment to find direction
            </div>
            <div>
              <Link to="/" className="clscc">
                Not registered ? Sign Up
              </Link>
            </div>
          </Col>
          <Col md={4}>
            <div className=" mjcn">Forgot Password</div>
            {errorMessage && (
              <Alert key={2} variant="danger">
                {errorMessage}
              </Alert>
            )}
            {message && (
              <Alert key={2} variant="info">
                {message}
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
              <Form.Group></Form.Group>
              <Button variant="primary" className="subbtn ncn" type="submit">
                {!isLoading ? "Submit" : "Submitting ..."}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ForgotPassword;
