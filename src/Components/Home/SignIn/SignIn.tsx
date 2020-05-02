import * as React from 'react';
import Navbar from '../HomeComponents/navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Footer from '../HomeComponents/footer';
import Col from 'react-bootstrap/Col';
import '../SignUp/signup.css';
import signinwelcome from '../../../assets/3.jpg';
import fb from '../../../assets/fbsignup.png';
import google from '../../../assets/google.png';
import linkedin from '../../../assets/linked.png';
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { API } from '../../../config';


interface State {
  email:string,
  password:string,
  errorMessage:string,
}
 const SignIn:React.FunctionComponent = (props:any) => {
  const [state,setFormState] = React.useState<State>({email:'',password:'',errorMessage:''})
  const {email,password,errorMessage} = state
  const sendFormData=(e):any=>{
    e.preventDefault()
    const data = { 
      email, 
      password,
    }
    console.log(API)
    axios.post<any, AxiosResponse<any>>(`${API}/accounts/login/`,data,{
      headers: {
          'Content-Type': 'application/json',
        }
    })
    .then(response=>{
      console.log(response)
      if(response.status===200){
          props.history.push('/assessmentphaseone')
      }
    })
    .catch(error=>{
      console.log(error.response)
      setFormState({
        ...state,
        errorMessage:"Failed to Login"
      })
    })
  }
  const changeActionOnFormData =(e:any)=>{
    setFormState({
      ...state,
      [e.target.name]:e.target.value,
      errorMessage:""
    })
  }
  return (
        <>
           <Navbar/>
              <Container fluid={true}>
                <Row className="kli">
                  <Col md={5} className="mo">
                    <img src={signinwelcome} className="signupimg img-fluid" alt="SignupImage" />
                  </Col>
                  <Col md={5}>
                    <div className="signwa">Sign In</div>
                    <div className="signwa1">To Get Clarity</div>
                  {
                    errorMessage &&
                    <Alert key={2} variant="danger">
                      {errorMessage}
                    </Alert>
                  }
                  <Form onSubmit={sendFormData}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control 
                        type="email"
                        name="email"
                        className="field1"
                        value={email}
                        onChange={changeActionOnFormData}
                        placeholder="Email Address" 
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Control 
                        type="password"
                        name="password"
                        className="field1"
                        value={password}
                        onChange={changeActionOnFormData}
                        placeholder="Password"
                      />
                    </Form.Group>
                      <Button variant="primary" className="subbtn" type="submit">
                       Sign In
                      </Button>
                      <div className="alreadyhave">Already have an account?<Link to="/signup"><span className="logn"> Sign Up</span></Link></div>
                      <h6 className="text-divider">
                        <span className="divider-text">or connect using</span>
                        <div className="centeredline"></div>
                      </h6>
                      <div className="socialwrapper">
                        <div className="socialIcons1"><img src={fb} alt="fb"/></div>
                        <div className="socialIcons2"><img src={google} alt="fb"/></div>
                        <div className="socialIcons3"><img src={linkedin} alt="fb"/></div>
                      </div>
                  </Form>
                </Col>
              </Row>
            <Footer/>
          </Container>
        </>
    );
  };

export default SignIn;