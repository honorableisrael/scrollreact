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
import { Link } from 'react-router-dom';

 




// team


 const AssessmentFirstPhase =()=> {
    const [ value, setValue ] = React.useState<number>(0); 
    return (
    <div>
        <Navbar/>
        <Container fluid={true}>
            <Row className="firstrowcf cftcontent">
               <AssessmentFirstSection phase="Phase 1" nextPhase="Phase 2" time={15}/>
               <Col md={11}>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                            a. When having conversations with people do you often do most of the talking?
                        </div>
                        <div className="rsliderclass"> 
                        <RangeSlider
                            value={value}
                            variant="warning"
                            onChange={changeEvent => setValue(changeEvent.target.value)}
                            />
                        </div>
                        <div className="rsliderclass2">
                            <div>
                                Absolutely not
                            </div>
                            <div>
                                Not Sure
                            </div>
                            <div>
                                Very Much
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                            b. When you’re sad do you feel better after hanging out or spending time with friends?
                        </div>
                        <div className="rsliderclass"> 
                        <RangeSlider
                            value={value}
                            variant='warning'
                            onChange={changeEvent => setValue(changeEvent.target.value)}
                            />
                        </div>
                        <div className="rsliderclass2">
                            <div>
                                Absolutely not
                            </div>
                            <div>
                                Not Sure
                            </div>
                            <div>
                                Very Much
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                            c. When it comes to solving problems do you tend to be more realistic than creative?
                        </div>
                        <div className="rsliderclass"> 
                        <RangeSlider
                            value={value}
                            variant="warning"
                            onChange={changeEvent => setValue(changeEvent.target.value)}
                            />
                        </div>
                        <div className="rsliderclass2">
                            <div>
                                Absolutely not
                            </div>
                            <div>
                                Not Sure
                            </div>
                            <div>
                                Very Much
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                            c. When it comes to solving problems do you tend to be more realistic than creative?
                        </div>
                        <div className="rsliderclass"> 
                        <RangeSlider
                            value={value}
                            variant="warning"
                            onChange={changeEvent => setValue(changeEvent.target.value)}
                            />
                        </div>
                        <div className="rsliderclass2">
                            <div>
                                Absolutely not
                            </div>
                            <div>
                                Not Sure
                            </div>
                            <div>
                                Very Much
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                        d. Do you usually focus more on what is happening today than the possibilities of the future?
                        </div>
                        <div className="rsliderclass"> 
                        <RangeSlider
                            value={value}
                            variant="warning"
                            onChange={changeEvent => setValue(changeEvent.target.value)}
                            />
                        </div>
                        <div className="rsliderclass2">
                            <div>
                                Absolutely not
                            </div>
                            <div>
                                Not Sure
                            </div>
                            <div>
                                Very Much
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                        e. When making decisions do you consider how the circumstances make you feel or the facts?
                        </div>
                        <div className="rsliderclass"> 
                        <RangeSlider
                            value={value}
                            variant="warning"
                            onChange={changeEvent => setValue(changeEvent.target.value)}
                            />
                        </div>
                        <div className="rsliderclass2">
                            <div>
                                Absolutely not
                            </div>
                            <div>
                                Not Sure
                            </div>
                            <div>
                                Very Much
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                        f. Are you prone to putting others need ahead of yours?
                        </div>
                        <div className="rsliderclass"> 
                        <RangeSlider
                            value={value}
                            variant="warning"
                            onChange={changeEvent => setValue(changeEvent.target.value)}
                            />
                        </div>
                        <div className="rsliderclass2">
                            <div>
                                Absolutely not
                            </div>
                            <div>
                                Not Sure
                            </div>
                            <div>
                                Very Much
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                        g. Do you improvise more than you plan?
                        </div>
                        <div className="rsliderclass"> 
                        <RangeSlider
                            value={value}
                            variant="warning"
                            onChange={changeEvent => setValue(changeEvent.target.value)}
                            />
                        </div>
                        <div className="rsliderclass2">
                            <div>
                                Absolutely not
                            </div>
                            <div>
                                Not Sure
                            </div>
                            <div>
                                Very Much
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                        h. Would rather enjoy now then complete your assignments later?
                        </div>
                        <div className="rsliderclass"> 
                        <RangeSlider
                            value={value}
                            variant="warning"
                            onChange={changeEvent => setValue(changeEvent.target.value)}
                            />
                        </div>
                        <div className="rsliderclass2">
                            <div>
                                Absolutely not
                            </div>
                            <div>
                                Not Sure
                            </div>
                            <div>
                                Very Much
                            </div>
                        </div>
                        <div className="nxtbtnarea">
                            <Link to="/assessmentphasecomplete">
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

export default AssessmentFirstPhase;
