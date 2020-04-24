import * as React from 'react';
import '../Home/Home.css';
import './assessment.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../HomeComponents/footer';
import Navbar from '../HomeComponents/navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

import ProgressBar from 'react-bootstrap/ProgressBar';
import clock from '../../../assets/clock.png';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { AssessmentFirstSection } from './AssessmentComponents/AssessmentFirstSection';
import { Link } from 'react-router-dom';

 




// team


 const AssessmentThirdPhase =()=> {
    const [ value, setValue ] = React.useState<number>(0); 
    return (
    <div>
        <Navbar/>
        <Container fluid={true}>
            <Row className="firstrowcf cftcontent">
               <AssessmentFirstSection phase="Phase 3" nextPhase="Phase 4" time={15}/>
               <Col md={11}>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                        a. Paying attention to details is your specialty; you can spot errors from miles away
                        </div>
                        <div className="rsliderclass9">
                            <div>
                                Agree
                            </div>
                            <div className="checkwrapper">
                                <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                    <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                    <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div>
                               Disagree
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                        b.  Planning, organizing and ensuring things are properly done by everyone no matter how annoying the tasks are, is who you are 
                        </div>
                        <div className="rsliderclass9">
                            <div>
                                Agree
                            </div>
                            <div className="checkwrapper">
                                <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                    <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                    <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div>
                               Disagree
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                        c.  As a student you are/were likely to look for the missing links in what was being taught in class
                        </div>
                       <div className="rsliderclass9">
                            <div>
                                Agree
                            </div>
                            <div className="checkwrapper">
                                <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                    <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                    <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div>
                               Disagree
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                        d.  You often ask the questions no one likes to ask
                        </div>
                        <div className="rsliderclass9">
                            <div>
                                Agree
                            </div>
                            <div className="checkwrapper">
                                <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                    <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                    <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div>
                               Disagree
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                        e. Functionality is more important than beauty to you 
                        </div>
                        <div className="rsliderclass9">
                            <div>
                                Agree
                            </div>
                            <div className="checkwrapper">
                                <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                    <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                    <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div>
                               Disagree
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                        f. To be honest you are not really exceptional at generating creative ideas, it’s a struggle.
                        </div>
                        <div className="rsliderclass9">
                            <div>
                                Agree
                            </div>
                            <div className="checkwrapper">
                                <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                    <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                    <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div>
                               Disagree
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                        g.  You are quick to accommodate and help people, without judging
                        </div>
                        <div className="rsliderclass9">
                            <div>
                                Agree
                            </div>
                            <div className="checkwrapper">
                                <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                    <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                    <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div>
                               Disagree
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                        h. You are known for keeping your friends happy and laughing
                        </div>
                        <div className="rsliderclass9">
                            <div>
                                Agree
                            </div>
                            <div className="checkwrapper">
                                <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                    <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                    <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div>
                               Disagree
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                        i. You can create the ideas/ initiatives but may find it difficult pulling together the resources needed to implement
                        </div>
                        <div className="rsliderclass9">
                            <div>
                                Agree
                            </div>
                            <div className="checkwrapper">
                                <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                    <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                    <label className="checkcontainer">
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div>
                               Disagree
                            </div>
                        </div>
                        <div className="nxtbtnarea">
                            <Link to="/thirdphasecomplete">
                                <button className="nxtbtn">
                                    Next
                                </button>
                            </Link>
                        </div>
                    </Col>
                </Row>
               </Col>
            </Row>
        <Footer/>
        </Container>
    </div>
  )
}

export default AssessmentThirdPhase;
