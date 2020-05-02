import * as React from 'react';
import '../Home/Home.css';
import './assessment.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../HomeComponents/footer';
import Navbar from '../HomeComponents/navbar';
import ProgressBar from 'react-bootstrap/ProgressBar';
import clock from '../../../assets/clock.png';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { AssessmentFirstSection } from './AssessmentComponents/AssessmentFirstSection';
import ans1 from '../../../assets/ans1.png';
import question2 from '../../../assets/question2.png';
import q4 from '../../../assets/q4.png';
import q5 from '../../../assets/q5.png';
import q6 from '../../../assets/q6.png';
import q7 from '../../../assets/q7.png';
import q8 from '../../../assets/q8.png';
import q9 from '../../../assets/q9.png';
import { Link } from 'react-router-dom';

 




// team


 const AssessmentSecondPhase =()=> {
    const [ value, setValue ] = React.useState<number>(0);
    const [ buttonIsActive,setIsactive ]:any = React.useState({FirstbuttonIsClicked:false,SecondbuttonIsClicked:false,ThirdbuttonIsClicked:false,FourthtbuttonIsClicked:false});
    console.log(buttonIsActive) 
    return (
    <div>
        <Navbar/>
        <Container fluid={true}>
            <Row className="firstrowcf cftcontent">
               <AssessmentFirstSection  phase="Phase 2" nextPhase="Phase 3" time={13}/>
               <Col md={11}>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                            a. In a gathering of people, you are often the:
                        </div>
                        <div className="rsliderclassPol"> 
                            <div className="p2answers">
                                <img src={ans1} className="answers" alt="answers" />
                                <div className="questTwo">Mover & Shaker</div>
                            </div>
                            <div className="p2answers">
                                <img src={question2} className="answers" alt="answers" />
                                <div className="questTwo">
                                    Person watching others
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                            b. Your personal moto is
                        </div>
                        <div className="rsliderclassPol"> 
                            <div className="p2answers">
                                <img src={q4} className="answers" alt="answers" />
                                <div className="questTwo">
                                    Live for the moment
                                </div>
                            </div>
                            <div className="p2answers">
                                <img src={q5} className="answers" alt="answers" />
                                    <div className="questTwo">
                                        Eventual success no 
                                    <div>
                                        matter how hard
                                    </div>
                                </div>
                            </div>
                        </div>
                      </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                            C. Work is a lot easier when:
                        </div>
                        <div className="rsliderclassPol"> 
                            <div className="p2answers">
                                <img src={q6} className="answers" alt="answers" />
                                <div className="questTwo">
                                    I feel accepted by my co-workers
                                    <div>in a friendly environment. </div>
                                </div>
                            </div>
                            <div className="p2answers">
                                <img src={q7} className="answers" alt="answers" />
                                <div className="questTwo">I’m able to create my own rules 
                                <div>and work without interference.</div></div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                            d. People think of you as: 
                        </div>
                        <div className="rsliderclassPol"> 
                            <div className="p2answers">
                                <img src={q8} className="answers" alt="answers" />
                                <div className="questTwo">Carefree, friendly and 
                                <div>sometimes careless</div> </div>
                            </div>
                            <div className="p2answers">
                                <img src={q9} className="answers" alt="answers" />
                                <div className="questTwo">
                                    Rigid, friendly and sometimes
                                <div>
                                    too uptight
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="nxtbtnarea">
                            <Link to="/secondphasecomplete">
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

export default AssessmentSecondPhase;
