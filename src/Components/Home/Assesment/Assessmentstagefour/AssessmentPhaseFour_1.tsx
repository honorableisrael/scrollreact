import * as React from 'react';
import '../../Home/Home.css';
import '../assessment.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../../HomeComponents/footer';
import Navbar from '../../HomeComponents/navbar';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { AssessmentFirstSection } from '../AssessmentComponents/AssessmentFirstSection';
import nextis5 from '../../../assets/nextis5.png';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';




// team


 const Assessmentfourthphase_1 =()=> {
    const [ value, setValue ] = React.useState<number>(0);
    const [ {rate1,rate2,rate3,rate4,rate5,rate6,rate7,rate8}, setRateValue ] = React.useState({rate1:0,rate2:0,rate3:0,rate4:0,rate5:0,rate6:0,rate7:0,rate8:0});

   const onStarClick= (nextValue, prevValue, name)=>{
       console.log(nextValue)
        setRateValue(nextValue);
    }
    return (
    <div>
        <Navbar/>
        <Container fluid={true}>
            <Row className="firstrowcf cftcontent">
               <AssessmentFirstSection progressBar = {40} phase="Phase 4" nextPhase="Results" time={10}/>
               <Col md={11}>
                    
               </Col>
               <Col md={1}>

               </Col>
            </Row>
            <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                       <Row>
                        <Col md={11}>
                        <div className="firstquestion losos">
                                <div className="creative">
                                    Building
                                </div>
                            <div>
                                <div className="skip">
                                    SKIP ANY ACTIVITIES YOU HAVE NO INTEREST IN & rank the activities you like.
                                </div>
                                <div className="assessquestionwrap">
                                    <div className="assessquestion">
                                        a. Constructing or Designing Houses, Roads, Bridges
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
                                    b. Organizing and Regulating the way a space is used
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
                                    c. Make possible the selling/buying of land and property between people
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
                                    d. Make easy the movement of people, goods and things from one point to another
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
                        </div>
                        </Col>
                        <Col md={1} className="ocenter">
                           <Link to="/assessmentphasefive"> <span className="rightarrow">&#8594;</span></Link>
                        </Col>
                       </Row>
                    </Col>
                </Row>
        <Footer/>
        </Container>
    </div>
  )
}

export default Assessmentfourthphase_1;
