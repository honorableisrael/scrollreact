import * as React from "react";
import "../../Home/Home.css";
import "../assessment.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../../HomeComponents/footer";
import Navbar from "../../HomeComponents/navbar";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { AssessmentFirstSection } from "../AssessmentComponents/AssessmentFirstSection";
import nextis5 from "../../../assets/nextis5.png";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import axios from "axios";
import { API } from "../../../../config";
import { ToastContainer, toast } from "react-toastify";

// team

const Assessmentfourthphase_1 = (props: any) => {
  const [state, setRateValue] = React.useState({
    rate1: ' ',
    rate2: ' ',
    rate3: ' ',
    rate4: ' ',
    rate5: ' ',
    rate6: ' ',
    rate7: ' ',
    rate8: ' ',
    rate9: ' ',
    rate10: ' ',
    rate11: ' ',
    rate12: ' ',
    rate13: ' ',
    rate14: ' ',
    rate15: ' ',
    rate16: ' ',
    rate17: ' ',
    rate18: ' ',
    rate19: ' ',
    rate20: ' ',
    rate21: ' ',
    rate22: ' ',
    rate23: ' ',
    rate24: ' ',
    rate25: ' ',
    rate26: ' ',
    rate27: ' ',
    token: ' ',
  });
  const {
    rate1,
    rate2,
    rate3,
    rate4,
    rate5,
    rate6,
    rate7,
    rate8,
    rate9,
    rate10,
    rate11,
    rate12,
    rate13,
    rate14,
    rate15,
    rate16,
    rate17,
    rate18,
    rate19,
    rate20,
    rate21,
    rate22,
    rate23,
    rate24,
    rate25,
    rate26,
    rate27,
    token,
  } = state;
  //cdm
  React.useEffect((): any => {
    window.scrollTo(-0, -0);
    const availableToken = sessionStorage.getItem("userToken");
    const token = availableToken
      ? JSON.parse(availableToken)
      : props.history.push("/signin");
  }, []);
  const onStarClick = (nextValue, prevValue, name) => {
    setRateValue({
      ...state,
      [name]: nextValue.toString(),
    });
    console.log(state);
  };
  //subform
  const submitForm = (e: any) => {
    e.preventDefault();
    const availableToken = sessionStorage.getItem("userToken");
    const token = availableToken
      ? JSON.parse(availableToken)
      : props.history.push("/signin");
    const firstApiData = {
      q41a: rate1,
      q41b: rate2,
      q41c: rate3,
      q41d: rate4,
      q41e: rate5,
    };
    const secondApiData = {
      q42a: rate16,
      q42b: rate17,
      q42c: rate18,
      q42d: rate19,
      q42e: rate20,
    };
    const thirdApiData = {
      q43a: rate21,
      q43b: rate22,
      q43c: rate23,
      q43d: rate24,
      q43e: rate25,
      q43f: rate26,
      q43g: rate27,
    };
    if (token) {
      axios
        .all([
          axios.post(`${API}/careerinterestbusiness`, firstApiData, {
            headers: { Authorization: `Token ${token}` },
          }),
          axios.post(`${API}/careerintereststem`, secondApiData, {
            headers: { Authorization: `Token ${token}` },
          }),
          axios.post(`${API}/careerinterestsports`, thirdApiData, {
            headers: { Authorization: `Token ${token}` },
          }),
        ])
        .then(
          axios.spread((firstresponse, secondresponse, thirdresponse) => {
            if (
              firstresponse?.status == 200 &&
              secondresponse?.status == 200 &&
              thirdresponse?.status == 200
            ) {
              props.history.push("/assessmentphasefourcomplete");
            }
          })
        )
        .catch((error) => {
          console.log(error.response);
          if (error && error.response && error.response.data) {
            notify(error.response.data[0].message);
          }
          if (error && error.response == undefined) {
            notify("Failed to process! try again later");
          }
        });
    }
  };
  const notify = (message: string) => toast(message, { containerId: "B" });
  return (
    <div>
      <Navbar />
      <Container fluid={true}>
        <Row className="firstrowcf cftcontent">
          <AssessmentFirstSection
            progressBar={40}
            phase="Phase 4"
            nextPhase="Phase 5"
            time={10}
          />
          <Col md={11}></Col>
          <Col md={1}></Col>
        </Row>
        <Row className="firstrowcf2 cftcontent">
          <Col md={12}>
            <Row>
              <Col md={11}>
                <div className="firstquestion losos">
                  <div className="creative">Business</div>
                  <div>
                    <div className="skip">
                      SKIP ANY ACTIVITIES YOU HAVE NO INTEREST IN & rank the
                      activities you like.
                    </div>
                    <div className="assessquestionwrap">
                      <div className="assessquestion">
                        a. Overseeing business activities and people to achieve
                        a common goal
                      </div>
                      <div className="assessrating">
                        <StarRatingComponent
                          name="rate1"
                          starCount={5}
                          value={rate1}
                          onStarClick={onStarClick}
                          emptyStarColor={"#444"}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="assessquestionwrap">
                      <div className="assessquestion">
                        b. Employ, train and manage people who work for an
                        organization
                      </div>
                      <div className="assessrating">
                        <StarRatingComponent
                          name="rate2"
                          starCount={5}
                          value={rate2}
                          onStarClick={onStarClick}
                          emptyStarColor={"#444"}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="assessquestionwrap">
                      <div className="assessquestion">
                        c. Convince people to buy into an idea, service or
                        product
                      </div>
                      <div className="assessrating">
                        <StarRatingComponent
                          name="rate3"
                          starCount={5}
                          value={rate3}
                          onStarClick={onStarClick}
                          emptyStarColor={"#444"}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="assessquestionwrap">
                      <div className="assessquestion">
                        d. Help people make smart decisions with money
                      </div>
                      <div className="assessrating">
                        <StarRatingComponent
                          name="rate4"
                          starCount={5}
                          value={rate4}
                          onStarClick={onStarClick}
                          emptyStarColor={"#444"}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="assessquestionwrap">
                      <div className="assessquestion">
                        e. Provide additional help for the smooth running of a
                        business
                      </div>
                      <div className="assessrating">
                        <StarRatingComponent
                          name="rate5"
                          starCount={5}
                          value={rate5}
                          onStarClick={onStarClick}
                          emptyStarColor={"#444"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={12}>
                <Row>
                  <Col md={11}>
                    <div className="firstquestion losos">
                      <div className="creative">STEM</div>
                      <div>
                        <div className="skip"></div>
                        <div className="assessquestionwrap">
                          <div className="assessquestion">
                            f. Understand how the world and the universe around
                            us works
                          </div>
                          <div className="assessrating">
                            <StarRatingComponent
                              name="rate16"
                              starCount={5}
                              value={rate16}
                              onStarClick={onStarClick}
                              emptyStarColor={"#444"}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="assessquestionwrap">
                          <div className="assessquestion">
                            g. Use technology to make people’s lives and jobs
                            easier
                          </div>
                          <div className="assessrating">
                            <StarRatingComponent
                              name="rate17"
                              starCount={5}
                              value={rate17}
                              onStarClick={onStarClick}
                              emptyStarColor={"#444"}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="assessquestionwrap">
                          <div className="assessquestion">
                            h. Figure out how things work and find practical use
                            for scientific discoveries
                          </div>
                          <div className="assessrating">
                            <StarRatingComponent
                              name="rate18"
                              starCount={5}
                              value={rate18}
                              onStarClick={onStarClick}
                              emptyStarColor={"#444"}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="assessquestionwrap">
                          <div className="assessquestion">
                            i. Apply mathematical theories and techniques in
                            solving real life problems
                          </div>
                          <div className="assessrating">
                            <StarRatingComponent
                              name="rate19"
                              starCount={5}
                              value={rate19}
                              onStarClick={onStarClick}
                              emptyStarColor={"#444"}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="assessquestionwrap">
                          <div className="assessquestion">
                            j. Study people’s behavior and why they do the
                            things they do
                          </div>
                          <div className="assessrating">
                            <StarRatingComponent
                              name="rate20"
                              starCount={5}
                              value={rate20}
                              onStarClick={onStarClick}
                              emptyStarColor={"#444"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={1} className="ocenter bighide">
                    <span className="rightarrow" onClick={submitForm}>
                      &#8594;
                    </span>
                  </Col>
                </Row>
              </Col>
              <Col md={12}>
                <Row>
                  <Col md={11}>
                    <div className="firstquestion losos">
                      <div className="creative">Sports</div>
                      <div>
                        <div className="skip"></div>
                        <div className="assessquestionwrap">
                          <div className="assessquestion">
                            k. Share your opinion on a football match for others
                            to watch
                          </div>
                          <div className="assessrating">
                            <StarRatingComponent
                              name="rate21"
                              starCount={5}
                              value={rate21}
                              onStarClick={onStarClick}
                              emptyStarColor={"#444"}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="assessquestionwrap">
                          <div className="assessquestion">
                            l. Create a platform where people can bet on their
                            favorite players
                          </div>
                          <div className="assessrating">
                            <StarRatingComponent
                              name="rate22"
                              starCount={5}
                              value={rate22}
                              onStarClick={onStarClick}
                              emptyStarColor={"#444"}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="assessquestionwrap">
                          <div className="assessquestion">
                            m. Create opportunities for people to have fun doing
                            sports
                          </div>
                          <div className="assessrating">
                            <StarRatingComponent
                              name="rate23"
                              starCount={5}
                              value={rate23}
                              onStarClick={onStarClick}
                              emptyStarColor={"#444"}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="assessquestionwrap">
                          <div className="assessquestion">
                            n. Take care of the health and well-being of
                            athletes
                          </div>
                          <div className="assessrating">
                            <StarRatingComponent
                              name="rate24"
                              starCount={5}
                              value={rate24}
                              onStarClick={onStarClick}
                              emptyStarColor={"#444"}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="assessquestionwrap">
                          <div className="assessquestion">
                            o. Create innovative products and solutions that
                            make athletes quicker and stronger
                          </div>
                          <div className="assessrating">
                            <StarRatingComponent
                              name="rate25"
                              starCount={5}
                              value={rate25}
                              onStarClick={onStarClick}
                              emptyStarColor={"#444"}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="assessquestionwrap">
                          <div className="assessquestion">
                            p. Play different sports professionally
                          </div>
                          <div className="assessrating">
                            <StarRatingComponent
                              name="rate26"
                              starCount={5}
                              value={rate26}
                              onStarClick={onStarClick}
                              emptyStarColor={"#444"}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="assessquestionwrap">
                          <div className="assessquestion">
                            q. Be involved in the business of sports and
                            recreation
                          </div>
                          <div className="assessrating">
                            <StarRatingComponent
                              name="rate27"
                              starCount={5}
                              value={rate27}
                              onStarClick={onStarClick}
                              emptyStarColor={"#444"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={1} className=" smalldisplay">
                    <span
                      className="rightarrow"
                      title="Submit"
                      onClick={submitForm}
                    >
                      &#8594;
                    </span>
                  </Col>
                </Row>
              </Col>
              <ToastContainer
                enableMultiContainer
                containerId={"B"}
                toastClassName="bg-danger text-white"
                hideProgressBar={true}
                position={toast.POSITION.TOP_CENTER}
              />
            </Row>
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
};

export default Assessmentfourthphase_1;
