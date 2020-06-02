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
import { useEffect } from "react";

interface State {
  email: string;
  newpassword: string;
  errorMessage: string;
  confirmpassword: string;
  isLoading: boolean;
  kigenni: boolean;
  message: string;
}
const ResetPassword: React.FunctionComponent = (props: any) => {
  const [state, setFormState] = React.useState<State>({
    email: "",
    errorMessage: "",
    isLoading: false,
    kigenni: true,
    newpassword: "",
    confirmpassword: "",
    message: "",
  });
  const {
    newpassword,
    kigenni,
    errorMessage,
    isLoading,
    confirmpassword,
    message,
  } = state;
  const sendFormData = (e) => {
    const token = props.match.params.token;
    const userid = props.match.params.userid;
    e.preventDefault();
    setFormState({ ...state, isLoading: true });
    const data = {
      password: newpassword,
      confirm_password: confirmpassword,
    };
    axios
      .post<any, AxiosResponse<any>>(
        `${API}/resetpassword/${userid}/${token}`,
        data
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setFormState({
            ...state,
            isLoading: false,
            message: response?.data[0]?.message,
          });
          setTimeout(()=>{
            props.history.push("/signin")
          },3000)
        }
      })
      .catch((error) => {
        console.log(error.response);
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
          errorMessage: "Password reset failed",
          isLoading: false,
        });
      });
  };
  useEffect(() => {
    const token = props.match.params.token;
    const userid = props.match.params.userid;
  }, []);
  const changeActionOnFormData = (e: any) => {
    setFormState({
      ...state,
      [e.target.name]: e.target.value,
      errorMessage: "",
      message:""
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
            <div className=" mjcn">Reset Password</div>
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
                  type="password"
                  className="field3"
                  value={newpassword}
                  name="newpassword"
                  onChange={changeActionOnFormData}
                  placeholder="Enter New Password"
                />
              </Form.Group>
              <Form.Group className="bvbcm" controlId="formBasicEmail">
                <img src={formemail} className="formavatar" alt="formavatar" />
                <Form.Control
                  type="password"
                  className="field3"
                  value={confirmpassword}
                  name="confirmpassword"
                  onChange={changeActionOnFormData}
                  placeholder="Confirm Password"
                />
              </Form.Group>
              <Form.Group></Form.Group>
              <Button variant="primary" className="subbtn ncn" type="submit">
                {!isLoading ? "Submit" : "Submitting ..."}
              </Button>
            </Form>
          </Col>
        </Row>
        {/* <Footer/> */}
      </Container>
    </>
  );
};

export default ResetPassword;
