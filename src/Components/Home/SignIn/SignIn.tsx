import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import axios, { AxiosResponse } from "axios";
import { API } from "../../../config";
import formavatar from "../../../assets/formavatar.png";
import formemail from "../../../assets/formemail.png";
import { Link } from "react-router-dom";


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
  const {
    email,
    kigenni,
    errorMessage,
    isLoading,
    password,
    token,
  } = state;
  const sendFormData = (e) => {
    e.preventDefault();
    setFormState({ ...state, isLoading: true });
    const data = {
      email,
      password2: password,
      kigenni,
    };
    axios
      .post<any, AxiosResponse<any>>(`${API}/accounts/loginthirdparty/`, data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          sessionStorage.setItem(
            "userToken",
            JSON.stringify(response?.data[0].token)
          );
          setFormState({
            ...state,
            isLoading: false,
            token: response?.data[0].token,
          });
          getUserInfo(response?.data[0].token);
          setInterval(props.history.push("/assessmentphaseone"), 5000);
        }
      })
      .catch((error) => {
        console.log(error.response);
        if (error && error.response && error.response.data) {
        return  setFormState({
            ...state,
            errorMessage: error.response.data[0].message,
            isLoading: false,
          });
        }
        if (error && error.response && error.response.status===400) {
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
    });
  };
  const getUserInfo = (token:string): any => {
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
      {/* <Navbar/> */}
      <Container fluid={true}>
        <Row className="kli bcbv">
          <Col md={4} className="">
            <div className="kigenni1">clarity</div>
            <div className="kigenni2">
              Not feeling in control of your life, career or business?
            </div>
            <div className="kigenni3">
              {" "}
              Take the Clarity Assessment to find direction
            </div>
            <div>
                <Link to="/" className="clscc">Not registered ? Sign Up</Link>
              </div>
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
        {/* <Footer/> */}
      </Container>
    </>
  );
};

export default SignInKigenni;
