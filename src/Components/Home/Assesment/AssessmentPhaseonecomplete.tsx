import * as React from 'react';
import '../Home/Home.css';
import './assessment.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../HomeComponents/footer';
import Navbar from '../HomeComponents/navbar';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { AssessmentFirstSection } from './AssessmentComponents/AssessmentFirstSection';
import cherrydone from '../../../assets/cherry-done.png';
import { Link } from 'react-router-dom';
 




// team


 const AssessmentFirstPhaseComplete =()=> {
    const [ value, setValue ] = React.useState<number>(0); 
    return (
    <div>
        <Navbar/>
        <Container fluid={true}>
            <Row className="firstrowcf cftcontent">
               <AssessmentFirstSection phase="Phase 1" nextPhase="Phase 2" time={10}/>
               <Col md={11}>
                    <Row className="firstrowcf2 cftcontent">
                        <Col md={12} className="awesomewrap">
                            <div>
                                <img className="cherry-done" src={cherrydone} alt="cherry-done"/>
                                <div className="awesome">
                                    You are awesome Dewunmi
                                </div>
                                <div className="awesome1">
                                    You are a natural born leader, just a few more minutes & we'll be on our way
                                </div>
                                <div className="awesome2">
                                <Link to="/assessmentphasetwo"><button className="awesomebtn">Continue Assessment</button></Link> 
                                    <button className="awesomebtnsubmit">Save Progress</button>
                                </div>
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

export default AssessmentFirstPhaseComplete;
