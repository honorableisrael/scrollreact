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
import axios from 'axios';
import { API } from '../../../../config';
import { ToastContainer, toast } from 'react-toastify';



// team


 const Assessmentfourthphase =(props:any)=> {
    const [ value, setValue ] = React.useState<number>(0);
    const [ {rate1,rate2,rate3,rate4,rate5,rate6,rate7,rate8,rate9,rate10,rate11,rate12,rate13,rate14,rate15,rate16,rate17,rate18,rate19,rate20,rate21,rate22,rate23,rate24,token}, setRateValue ] = React.useState({rate1:0,rate2:0,rate3:0,rate4:0,rate5:0,rate6:0,rate7:0,rate8:0,rate9:0,rate10:0,rate11:0,rate12:0,rate13:0,rate14:0,rate15:0,rate16:0,rate17:0,rate18:0,rate19:0,rate20:0,rate21:0,rate22:0,rate23:0,rate24:0,token:''});
        //cdm
        React.useEffect(():any=>{
            window.scrollTo(-0,-0)
            const availableToken = sessionStorage.getItem('userToken')
            const token = availableToken?JSON.parse(availableToken):props.history.push('/signin')
        },[])
   const onStarClick= (nextValue, prevValue, name)=>{
       console.log(nextValue)
        setRateValue(nextValue);
    }
        //subform
const submitForm =(e:any)=>{
    e.preventDefault()
    const data = {
        q36:rate1,
        q36a:rate2,
        q16:rate3,
        q17:rate4,
        q18:rate5,
        q19:rate6,
        q20:rate7,
        q21:rate8,
        q22:rate9,

    }
    console.log(data)
    axios.post(`${API}/naturalcompetence`,data, { headers: { 'Authorization': `Token ${token}` } })
    .then( response => {
        console.log(response)
        if( response.status=== 200 ){
            props.history.push('/thirdphasecomplete')
        }
    })
    .catch(error=>{
        console.log(error.response)
        if(error && error.response && error.response.data){
            notify(error.response.data[0].message)
        }
        if(error && error.response == undefined){
            notify("Failed to process! try again later")
        }

    })
}

const notify = (message:string) => toast(message,{containerId: 'B'});    
    return (
    <div>
        <Navbar/>
        <Container fluid={true}>
            <Row className="firstrowcf cftcontent">
               <AssessmentFirstSection progressBar={40} phase="Phase 4" nextPhase="Phase 5" time={10}/>
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
                                    Creative
                                </div>
                            <div>
                                <div className="skip">
                                    SKIP ANY ACTIVITIES YOU HAVE NO INTEREST IN & rank the activities you like.
                                </div>
                                <div className="assessquestionwrap">
                                    <div className="assessquestion">
                                        1. Music, Dance, Drama, Oratory & Comedy
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
                                        2. Cartoon Creation, Games, Visuals
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
                                        3. Radio/TV Presenting, Writing, Blogging
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
                                        4. Baking, Cooking, Event Planning, Travelling
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
                                        5. Make-Up Application, Hair, Nails and Skin Care
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
                            <div>
                                <div className="assessquestionwrap">
                                    <div className="assessquestion">
                                        6. Fashion and Accessory Design, Celebrity Styling
                                    </div>
                                <div className="assessrating">
                                    <StarRatingComponent 
                                        name="rate6" 
                                        starCount={5}
                                        value={rate6}
                                        onStarClick={onStarClick}
                                        emptyStarColor={"#444"}
                                        />
                                </div>
                                </div>
                            </div>
                            <div>
                                <div className="assessquestionwrap">
                                    <div className="assessquestion">
                                        7. Organizing & Beautifying Spaces.
                                    </div>
                                <div className="assessrating">
                                    <StarRatingComponent 
                                        name="rate7" 
                                        starCount={5}
                                        value={rate7}
                                        onStarClick={onStarClick}
                                        emptyStarColor={"#444"}
                                        />
                                </div>
                                </div>
                            </div>
                            <div>
                                <div className="assessquestionwrap">
                                    <div className="assessquestion">
                                        8. Creating Movies, Documentaries, Capturing Beautiful Moments in Pictures. 
                                    </div>
                                <div className="assessrating">
                                    <StarRatingComponent 
                                        name="rate8" 
                                        starCount={5}
                                        value={rate8}
                                        onStarClick={onStarClick}
                                        emptyStarColor={"#444"}
                                        />
                                </div>
                                </div>
                            </div>
                        </div>
                        </Col>
                        <Col md={1} className="ocenter">
                            <Link to="/assessmentphasefour1"><span className="rightarrow">&#8594;</span></Link>
                        </Col>
                       </Row>
                    </Col>
                    <Col md={12}>
                       <Row>
                        <Col md={11}>
                        <div className="firstquestion losos">
                                <div className="creative">
                                Building & Fixing 
                                </div>
                            <div>
                                <div className="assessquestionwrap">
                                    <div className="assessquestion">
                                    9. Constructing or Designing Houses, Roads, Bridges
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
                                    10. Organizing and Regulating the way a space is used
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
                                    11. Make possible the selling/buying of land and property between people
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
                                    12. Make easy the movement of people, goods and things from one point to another
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
                        <Col md={11}>
                        <div className="firstquestion losos">
                            <div className="creative">
                                Nature & Resources 
                            </div>
                            <div>
                                <div className="assessquestionwrap">
                                    <div className="assessquestion">
                                    13. Process, produce and distribute agricultural (crops and animals) products to people
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
                                    14. Protect and preserve our natural environment so others can enjoy it
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
                                    15. Understand how the earth works so you can protect the environment and human health
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
                        </div>
                        </Col>
                    <Col md={12}>
                       <Row>
                            <Col md={11}>
                                <div className="firstquestion losos">
                                        <div className="creative">
                                        Humanitarian
                                        </div>
                                    <div>
                                        <div className="skip">
                                        </div>
                                        <div className="assessquestionwrap">
                                            <div className="assessquestion">
                                            16. Impart knowledge and guide people down the right path
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
                                            17. Champion a cause that changes the lives of people positively
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
                                            18. Represent the public interest of a group of people, country or nation
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
                                            19. Advocate for people’s rights using the law
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
                                            20. Provide physical, emotional and social support to help people live their best lives
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
                           </Row>
                        </Col>
                       </Row>
                    </Col>
                </Row>
        <Footer/>
        </Container>
    </div>
  )
}

export default Assessmentfourthphase;
