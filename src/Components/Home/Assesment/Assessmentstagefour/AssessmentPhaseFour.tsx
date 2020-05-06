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
    const [ {rate1,rate2,rate3,rate4,rate5,rate6,rate7,rate8,rate9,rate10,rate11,rate12,rate13,rate14,rate15,rate16,rate17,rate18,rate19,rate20,rate21,rate22,rate23,rate24,token}, setRateValue ] = React.useState({rate1:1,rate2:1,rate3:1,rate4:1,rate5:1,rate6:1,rate7:1,rate8:1,rate9:1,rate10:1,rate11:1,rate12:1,rate13:1,rate14:1,rate15:1,rate16:1,rate17:1,rate18:1,rate19:1,rate20:1,rate21:1,rate22:1,rate23:1,rate24:1,token:''});
        //cdm
        React.useEffect(():any=>{
            window.scrollTo(-0,-0)
            const availableToken = sessionStorage.getItem('userToken')
            const token = availableToken?JSON.parse(availableToken):props.history.push('/signin')
        },[])
   const onStarClick= (nextValue, prevValue, name)=>{
        setRateValue(nextValue);
    }
        //subform
const submitForm =(e:any)=>{
    e.preventDefault()
    const availableToken = sessionStorage.getItem('userToken')
    const token = availableToken?JSON.parse(availableToken):props.history.push('/signin')
    console.log(token)
    const firstApiData = {
        q36a:rate1,
        q36b:rate2,
        q36c:rate3,
        q36d:rate4,
        q36e:rate5,
        q36f:rate6,
        q36g:rate7,
        q36h:rate8
    }
    const secondApiData = {
        q37a:rate9,
        q37b:rate10,
        q37c:rate11,
        q37d:rate12,
    }
    const thirdApiData = {
        q38a:rate16,
        q38b:rate17,
        q38c:rate18,
    }
    const fourthApiData = {
        q38a:rate13,
        q38b:rate14,
        q38c:rate15,
    }
    axios
        .all([
        axios.post(
            `${API}/careerinterestcreative`,
            firstApiData,
            { headers: { 'Authorization': `Token ${token}` } }
        ),
        axios.post(
            `${API}/careerinterestbuilding`,
            secondApiData,
            { headers: { 'Authorization': `Token ${token}` } }
        ),
        axios.post(
            `${API}/careerinteresthealth`,
            thirdApiData,
            { headers: { 'Authorization': `Token ${token}` } }
        ),            axios.post(
            `${API}/careerinterestnature`,
            fourthApiData,
            { headers: { 'Authorization': `Token ${token}` } }
        )
        ])
        .then(
        axios.spread((firstresponse, secondresponse,thirdresponse,fourthresp) => {
            console.log(firstresponse)
            console.log(secondresponse)
            console.log(thirdresponse)
            console.log(fourthresp)
        //  props.history.push('/assessmentphasefour1')
        })
        )
        .catch((error) => {
        console.log(error.response)
        if(error && error.response && error.response.data){
            notify(error.response.data[0].message)
        }
        if(error && error.response == undefined){
            notify("Failed to process! try again later")
        }
        });

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
                            <span className="rightarrow" onClick={submitForm}>&#8594;</span>
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
                                        name="rate9" 
                                        starCount={5}
                                        value={rate9}
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
                                        name="rate10" 
                                        starCount={5}
                                        value={rate10}
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
                                        name="rate11" 
                                        starCount={5}
                                        value={rate11}
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
                                        name="rate12" 
                                        starCount={5}
                                        value={rate12}
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
                                        name="rate13" 
                                        starCount={5}
                                        value={rate13}
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
                                        name="rate14" 
                                        starCount={5}
                                        value={rate14}
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
                                        name="rate15" 
                                        starCount={5}
                                        value={rate15}
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
                                Health
                            </div>
                            <div>
                                <div className="assessquestionwrap">
                                    <div className="assessquestion">
                                    16. Identify and prevent a range of conditions and illnesses from occurring
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
                                    17. Work with people to maintain a healthy lifestyle
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
                                    18. Diagnose and treat a variety of medical issues
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

export default Assessmentfourthphase;
