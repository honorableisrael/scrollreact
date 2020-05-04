import * as React from 'react';
import '../Home/Home.css';
import './assessment.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../HomeComponents/footer';
import Navbar from '../HomeComponents/navbar';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import { AssessmentFirstSection } from './AssessmentComponents/AssessmentFirstSection';
import { Link } from 'react-router-dom';
import '../Forms/recruitmentform.css';
import axios from 'axios';
import { API } from '../../../config';
import { ToastContainer, toast } from 'react-toastify';
 




// team
interface State {
    question1:string,
    question2:string,
    question3:string,
    question4:string,
    question5:string,
    token:string
}

 const AssessmentSixthPhase =(props:any)=> {
    const [ value, setValue ] = React.useState<number>(0);
    const [ state,setCheckboxValue ]:any = React.useState<State>({question1:'1',question2:'1',question3:'1',question4:'1',question5:'1',token:''});
    const {question1,question2,question3,question4,question5,token} = state

   //cdm
    React.useEffect(():any=>{
        const availableToken = sessionStorage.getItem('userToken')
        const token = availableToken?JSON.parse(availableToken):props.history.push('/login')
        setCheckboxValue({...state,token})
    },[])

    //update form feild
    const onchange = (e:any)=>{
        setCheckboxValue({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    
    //subform
    const submitForm =(e:any)=>{
        e.preventDefault()
        const data = {
            q9:question1,
            q10:question2,
            q11:question3,
            q12:question4,
            q13:question5,
        }
        console.log(data)
        axios.post(`${API}/workstyle`,data, { headers: { 'Authorization': `Token ${token}` } })
        .then( response => {
            console.log(response)
            if( response.status=== 200 ){
                props.history.push('/six')
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
               <AssessmentFirstSection  phase="Phase 6" nextPhase="Phase 7" time={13}/>
               <Col md={11}>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                        a. To you getting the job done is more important than excessively talking about it 
                        </div>
                        <div className="rsliderclassPol1">
                            <label className="checkcontainer1">
                                <input type="radio" onChange={onchange} value={1} name="question1" />
                                <span className="checkmark1" >A</span>
                                Very Much
                            </label>  
                            <label className="checkcontainer1">
                                <input type="radio" value={2} onChange={onchange} name="question1" />
                                <span className="checkmark1">B</span>
                                Yes
                            </label>
                            <label className="checkcontainer1">
                                <input type="radio" onChange={onchange} value={3} name="question1" />
                                <span className="checkmark1" >C</span>
                                Often not always
                            </label>  
                            <label className="checkcontainer1">
                                <input type="radio" value={4} onChange={onchange} name="question1" />
                                <span className="checkmark1">D</span>
                                I don’t even know
                            </label>
                            <label className="checkcontainer1">
                                <input type="radio" onChange={onchange} value={5} name="question1" />
                                <span className="checkmark1" >E</span>
                                Not exactly
                            </label>  
                            <label className="checkcontainer1">
                                <input type="radio" value={6} onChange={onchange} name="question1" />
                                <span className="checkmark1">F</span>
                                Barely
                            </label> 
                            <label className="checkcontainer1">
                                <input type="radio" value={7} onChange={onchange} name="question1" />
                                <span className="checkmark1">G</span>
                                Absolutely not
                            </label>    
                         </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                        b. You find it difficult communicating tasks you are working on till it’s complete
                        </div>
                        <div className="rsliderclassPol1">
                            <label className="checkcontainer1">
                                <input type="radio" onChange={onchange} value={1} name="question2" />
                                <span className="checkmark1" >A</span>
                                Very Much
                            </label>  
                            <label className="checkcontainer1">
                                <input type="radio" value={2} onChange={onchange} name="question2" />
                                <span className="checkmark1">B</span>
                                Yes
                            </label>
                            <label className="checkcontainer1">
                                <input type="radio" onChange={onchange} value={3} name="question2" />
                                <span className="checkmark1" >C</span>
                                Often not always
                            </label>  
                            <label className="checkcontainer1">
                                <input type="radio" value={4} onChange={onchange} name="question2" />
                                <span className="checkmark1">D</span>
                                I don’t even know
                            </label>
                            <label className="checkcontainer1">
                                <input type="radio" onChange={onchange} value={5} name="question2" />
                                <span className="checkmark1" >E</span>
                                Not exactly
                            </label>  
                            <label className="checkcontainer1">
                                <input type="radio" value={6} onChange={onchange} name="question2" />
                                <span className="checkmark1">F</span>
                                Barely
                            </label> 
                            <label className="checkcontainer1">
                                <input type="radio" value={7} onChange={onchange} name="question2" />
                                <span className="checkmark1">G</span>
                                Absolutely not
                            </label>    
                         </div>
                      </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                        c. You are exceptional at generating the ideas but not handling the details.
                        </div>
                        <div className="rsliderclassPol1">
                            <label className="checkcontainer1">
                                <input type="radio" onChange={onchange} value={1} name="question3" />
                                <span className="checkmark1" >A</span>
                                Very Much
                            </label>  
                            <label className="checkcontainer1">
                                <input type="radio" value={2} onChange={onchange} name="question3" />
                                <span className="checkmark1">B</span>
                                Yes
                            </label>
                            <label className="checkcontainer1">
                                <input type="radio" onChange={onchange} value={3} name="question3" />
                                <span className="checkmark1" >C</span>
                                Often not always
                            </label>  
                            <label className="checkcontainer1">
                                <input type="radio" value={4} onChange={onchange} name="question3" />
                                <span className="checkmark1">D</span>
                                I don’t even know
                            </label>
                            <label className="checkcontainer1">
                                <input type="radio" onChange={onchange} value={5} name="question3" />
                                <span className="checkmark1" >E</span>
                                Not exactly
                            </label>  
                            <label className="checkcontainer1">
                                <input type="radio" value={6} onChange={onchange} name="question3" />
                                <span className="checkmark1">F</span>
                                Barely
                            </label> 
                            <label className="checkcontainer1">
                                <input type="radio" value={7} onChange={onchange} name="question3" />
                                <span className="checkmark1">G</span>
                                Absolutely not
                            </label>    
                         </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">
                    <Col md={12}>
                        <div className="firstquestion">
                        d. To be honest you can’t help but see the big picture in every situation
                        </div>
                        <div className="rsliderclassPol1">
                            <label className="checkcontainer1">
                                <input type="radio" onChange={onchange} value={1} name="question4" />
                                <span className="checkmark1" >A</span>
                                Very Much
                            </label>  
                            <label className="checkcontainer1">
                                <input type="radio" value={2} onChange={onchange} name="question4" />
                                <span className="checkmark1">B</span>
                                Yes
                            </label>
                            <label className="checkcontainer1">
                                <input type="radio" onChange={onchange} value={3} name="question4" />
                                <span className="checkmark1" >C</span>
                                Often not always
                            </label>  
                            <label className="checkcontainer1">
                                <input type="radio" value={4} onChange={onchange} name="question4" />
                                <span className="checkmark1">D</span>
                                I don’t even know
                            </label>
                            <label className="checkcontainer1">
                                <input type="radio" onChange={onchange} value={5} name="question4" />
                                <span className="checkmark1" >E</span>
                                Not exactly
                            </label>  
                            <label className="checkcontainer1">
                                <input type="radio" value={6} onChange={onchange} name="question4" />
                                <span className="checkmark1">F</span>
                                Barely
                            </label> 
                            <label className="checkcontainer1">
                                <input type="radio" value={7} onChange={onchange} name="question4" />
                                <span className="checkmark1">G</span>
                                Absolutely not
                            </label>    
                         </div>
                    </Col>
                </Row>
                <Row className="firstrowcf2 cftcontent">    
                    <ToastContainer enableMultiContainer containerId={'B'} toastClassName="bg-danger text-white" hideProgressBar={true} position={toast.POSITION.TOP_CENTER} />
                    <div className="nxtbtnarea">
                        <button className="nxtbtn" onClick={submitForm}>
                            Next
                        </button>
                    </div>
                </Row>
               </Col>
            </Row>
        <Footer/>
        </Container>
    </div>
  )
}

export default AssessmentSixthPhase;
