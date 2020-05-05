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
import axios from 'axios';
import { API } from '../../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 




interface State {
    value1:string,
    value2:string,
    value3:string,
    value4:string,
    value5:string,
    value6:string,
    value7:string,
    value8:string,
    value9:string,
    token:string
}

const AssessmentFirstPhase =(props:any)=> {
    //cdm
    React.useEffect(():any=>{
        window.scrollTo(-0,-0)
        const availableToken = sessionStorage.getItem('userToken')
        const token = availableToken?JSON.parse(availableToken):props.history.push('/signin')
        setValue({...state,token})
    },[])

//component state
const [ state, setValue ] = React.useState<State>({value1:"1",value2:"1",value3:"1",value4:"1",value5:"1",value6:"1",value7:"1",value8:"1",value9:"1",token:'' }); 
const { value1,value2,value3,value4,value5,value6,value7,value8,value9,token} = state;

//submit form
const submitForm =(e:any)=>{
    e.preventDefault()
    const data = {
        q1:value1,
        q2:value2,
        q3:value3,
        q4:value4,
        q5:value5,
        q6:value6,
        q7:value7,
        q8:value8,
    }
    console.log(data)
    axios.post(`${API}/outofworkpersonality`,data, { headers: { 'Authorization': `Token ${token}` } })
    .then( response => {
        console.log(response)
        if( response.status=== 200 ){
            props.history.push('/assessmentphasecomplete')
        }
    })
    .catch(error=>{
        console.log(error.response)
        if(error && error.response && error.response.data)
        notify(error.response.data[0].message)
    })
}
const notify = (message:string) => toast(message,{containerId: 'B'});

return (
<div>
    <Navbar/>
    <Container fluid={true}>
        <Row className="firstrowcf cftcontent">
            <AssessmentFirstSection progressBar={10} phase="Phase 1" nextPhase="Phase 2" time={15}/>
            <Col md={11}>
            <Row className="firstrowcf2 cftcontent">
                <Col md={12}>
                    <div className="firstquestion">
                        a. When having conversations with people do you often do most of the talking?
                    </div>
                    <div className="rsliderclass"> 
                    <RangeSlider
                        value={value1}
                        variant="warning"
                        max={6}
                        min={0}
                        onChange={e => setValue({...state,value1:e.target.value})}
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
                        value={value2}
                        variant='warning'
                        max={6}
                        min={0}
                        onChange={e => setValue({...state,value2:e.target.value})}
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
                        value={value3}
                        variant="warning"
                        max={6}
                        min={0}
                        onChange={e => setValue({...state,value3:e.target.value})}
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
                        value={value4}
                        variant="warning"
                        max={6}
                        min={0}
                        onChange={e => setValue({...state,value4:e.target.value})}
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
                        value = {value5}
                        variant = "warning"
                        max={6}
                        min={0}
                        onChange = {e => setValue({...state,value5:e.target.value})}
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
                        value={value6}
                        variant="warning"
                        max={6}
                        min={0}
                        onChange={e => setValue({...state,value6:e.target.value})}
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
                        value={value7}
                        variant="warning"
                        max={6}
                        min={0}
                        onChange={e => setValue({...state,value7:e.target.value})}
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
                        value={value8}
                        variant="warning"
                        max={2}
                        min={1}
                        onChange={e => setValue({...state,value8:e.target.value})}
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
                        value={value9}
                        variant="warning"
                        max={6}
                        min={0}
                        onChange={e => setValue({...state,value9    :e.target.value})}
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
                    <ToastContainer enableMultiContainer containerId={'B'} toastClassName="bg-danger text-white" hideProgressBar={true} position={toast.POSITION.TOP_CENTER} />
                    <div className="nxtbtnarea">
                        <button className="nxtbtn" onClick={submitForm}>
                            Next
                        </button>
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
