import * as React from "react";
import "../Home/Home.css";
import "./assessment.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../HomeComponents/footer";
import Navbar from "../HomeComponents/navbar";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import { AssessmentFirstSection } from "./AssessmentComponents/AssessmentFirstSection";
import { Link } from "react-router-dom";
import "../Forms/recruitmentform.css";
import axios from "axios";
import { API } from "../../../config";
import { ToastContainer, toast } from "react-toastify";

// team
interface State {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  token: string;
}

const AssessmentSecondPhase = (props: any) => {
  const [value, setValue] = React.useState<number>(0);
  const [state, setCheckboxValue]: any = React.useState<State>({
    question1: "1",
    question2: "1",
    question3: "1",
    question4: "1",
    question5: "1",
    token: "",
  });
  const {
    question1,
    question2,
    question3,
    question4,
    question5,
    token,
  } = state;

  //cdm
  React.useEffect((): any => {
    window.scrollTo(-0, -0);
    const availableToken = sessionStorage.getItem("userToken");
    const token = availableToken
      ? JSON.parse(availableToken)
      : props.history.push("/signin");
    setCheckboxValue({ ...state, token });
  }, []);

  //update form feild
  const onchange = (e: any) => {
    setCheckboxValue({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  //subform
  const submitForm = (e: any) => {
    e.preventDefault();
    const data = {
      q9: question1,
      q10: question2,
      q11: question3,
      q12: question4,
      q13: question5,
    };
    console.log(data);
    axios
      .post(`${API}/workpersonality`, data, {
        headers: { Authorization: `Token ${token}` },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          props.history.push("/secondphasecomplete");
        }
      })
      .catch((error) => {
        console.log(error.response);
        if (error && error.response && error.response.data)
          notify(error.response.data[0].message);
      });
  };

  const notify = (message: string) => toast(message, { containerId: "B" });
  return (
    <div>
      <Navbar />
      <Container fluid={true}>
        <Row className="firstrowcf cftcontent">
          <AssessmentFirstSection
            progressBar={25}
            phase="Phase 2"
            nextPhase="Phase 3"
            time={13}
          />
          <Col md={11}>
            <Row className="firstrowcf2 cftcontent">
              <Col md={12}>
                <div className="firstquestion">
                  a. There are nine qualities listed below, pick only the one that best describes you:
                </div>
                <div className="rsliderclassPol1">
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      onChange={onchange}
                      value={1}
                      name="question1"
                    />
                    <span className="checkmark1">A</span>
                    Principled
                  </label>
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      value={2}
                      onChange={onchange}
                      name="question1"
                    />
                    <span className="checkmark1">B</span>
                    Supportive
                  </label>
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      value={3}
                      onChange={onchange}
                      name="question1"
                    />
                    <span className="checkmark1">C</span>
                    Competitive
                  </label>
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      value={3}
                      onChange={onchange}
                      name="question1"
                    />
                    <span className="checkmark1">C</span>
                    Idealistic
                  </label>
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      value={4}
                      onChange={onchange}
                      name="question1"
                    />
                    <span className="checkmark1">C</span>
                    Innovative
                  </label>
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      value={5}
                      onChange={onchange}
                      name="question1"
                    />
                    <span className="checkmark1">C</span>
                    Responsible
                  </label>
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      value={6}
                      onChange={onchange}
                      name="question1"
                    />
                    <span className="checkmark1">C</span>
                    Creative
                  </label>
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      value={7}
                      onChange={onchange}
                      name="question1"
                    />
                    <span className="checkmark1">C</span>
                    Assertive
                  </label>
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      value={8}
                      onChange={onchange}
                      name="question1"
                    />
                    <span className="checkmark1">C</span>
                    Flexible
                  </label>
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      value={9}
                      onChange={onchange}
                      name="question1"
                    />
                    <span className="checkmark1">C</span>
                    Competitive
                  </label>
                </div>
              </Col>
            </Row>
            <Row className="firstrowcf2 cftcontent">
            <Col md={12}>
                <div className="firstquestion">
                  a. There are nine qualities listed below, pick only the one that best describes you:
                </div>
                <div className="rsliderclassPol1">
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      onChange={onchange}
                      value={1}
                      name="question1"
                    />
                    <span className="checkmark1">A</span>
                    Principled
                  </label>
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      value={2}
                      onChange={onchange}
                      name="question1"
                    />
                    <span className="checkmark1">B</span>
                    Supportive
                  </label>
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      value={3}
                      onChange={onchange}
                      name="question1"
                    />
                    <span className="checkmark1">C</span>
                    Competitive
                  </label>
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      value={3}
                      onChange={onchange}
                      name="question1"
                    />
                    <span className="checkmark1">C</span>
                    Idealistic
                  </label>
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      value={4}
                      onChange={onchange}
                      name="question1"
                    />
                    <span className="checkmark1">C</span>
                    Innovative
                  </label>
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      value={5}
                      onChange={onchange}
                      name="question1"
                    />
                    <span className="checkmark1">C</span>
                    Responsible
                  </label>
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      value={6}
                      onChange={onchange}
                      name="question1"
                    />
                    <span className="checkmark1">C</span>
                    Creative
                  </label>
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      value={7}
                      onChange={onchange}
                      name="question1"
                    />
                    <span className="checkmark1">C</span>
                    Assertive
                  </label>
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      value={8}
                      onChange={onchange}
                      name="question1"
                    />
                    <span className="checkmark1">C</span>
                    Flexible
                  </label>
                  <label className="checkcontainer1">
                    <input
                      type="radio"
                      value={9}
                      onChange={onchange}
                      name="question1"
                    />
                    <span className="checkmark1">C</span>
                    Competitive
                  </label>
                </div>
              </Col>
            </Row>
              <ToastContainer
                enableMultiContainer
                containerId={"B"}
                toastClassName="bg-danger text-white"
                hideProgressBar={true}
                position={toast.POSITION.TOP_CENTER}
              />
              <Row className="jcenter1">
                <div className="nxtbtnarea">
                  <button className="nxtbtn" onClick={submitForm}>
                    Next
                  </button>
                </div>
              </Row>
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
};

export default AssessmentSecondPhase;
