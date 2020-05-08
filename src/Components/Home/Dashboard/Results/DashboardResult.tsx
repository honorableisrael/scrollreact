import * as React from 'react';
import Navbar from '../../HomeComponents/navbar';
import Container from 'react-bootstrap/Container';
import Footer from '../../HomeComponents/footer';
import Col from 'react-bootstrap/Col';
import './dashboard.css';
import { Link } from 'react-router-dom';
import leftImg from '../../../../assets/leftarrow.png';
import seekleft from '../../../../assets/seekleft.png';
import seekright from '../../../../assets/seekright.png';
import { useState,useEffect } from 'react';
import '../../../Home/Home/animate.css';
import axios from 'axios';
import { API } from '../../../../config';


interface IAppProps {
}
interface State {
  sideBarIsOpen:Boolean,
  token:string,
  result:{
    career_personality_type?:string,
    career_fitness?:string
  }
}
const DashboardResults: React.FunctionComponent<IAppProps> = (props:any) => {
  const [ state,updateState ] = useState<State>({sideBarIsOpen:false,token:'',result:{}})
  const { sideBarIsOpen,result } = state;
  useEffect(()=>{
    window.scrollTo(-0,-0)
    const availableToken = sessionStorage.getItem('userToken')
    const token = availableToken?JSON.parse(availableToken):props.history.push('/signin')
    axios.get(`${API}/freedashboard`, { headers: { 'Authorization': `Token ${token}` } })
    .then(response=>{
      console.log(response)
      if(response.status === 200){
          updateState({...state,result:response.data[0]})
      }
    })
    .catch(error=>{
     console.log(error.response) 
    })
  },[])
  
    return (
      <React.Fragment>
            <Navbar/>
              <Container fluid={true}>
                  <Col md={10} className="shiftcent">
                    <div className="dashboardwrap">
                      <div className={!sideBarIsOpen?"flexconts":"hidesidebar"}>
                         <div className="titlearea">
                            <span className={!sideBarIsOpen?"dashtitle":"hidesidebarlinks"}>
                                Dashboard- 
                              <span className="res1">
                                Results
                              </span> 
                            </span>
                          <span className="arrowcover">
                            <img src={leftImg} onClick={()=>updateState({...state,sideBarIsOpen:!sideBarIsOpen?true:false})} className={!sideBarIsOpen?"arrow arrowflip":"arrow"} alt="leftimg" />
                          </span>
                        </div>
                        <div className="titleareafirst">    
                        </div>
                        <div className="titlearea1">
                          <Link to="/personalitytype" className={!sideBarIsOpen?"linkss":"hidesidebarlinks animated fadeInLeft"}>
                             Career Fitness
                          </Link>  
                        </div>
                        <div className="titlearea1">
                          <Link to="/personalitytype" className={!sideBarIsOpen?"linkss active":"hidesidebarlinks animated fadeInLeft"}>
                              YOUR PERSONALITY TYPE
                          </Link>

                        </div>
                        <div className="titlearea1">
                          <Link to="/personalitytype" className={!sideBarIsOpen?"linkss":"hidesidebarlinks"}>
                              STRENGTHS & WEAKNESS
                          </Link>
                        </div>
                        <div className="titlearea1">
                          <Link to="/personalitytype" className={!sideBarIsOpen?"linkss":"hidesidebarlinks"}>
                              YOUR WORK LIFE MISSION
                          </Link>
                        </div>
                        <div className="titlearea1">
                          <Link to="/personalitytype" className={!sideBarIsOpen?"linkss":"hidesidebarlinks"}>
                              RULES FOR YOUR SUCCESS
                          </Link>
                        </div>
                        <div className="titlearea1 ">
                          <Link to="/personalitytype" className={!sideBarIsOpen?"linkss":"hidesidebarlinks"}>
                              LEADERSHIP COMPETENCIES
                          </Link>
                        </div>
                        <div className="titlearea1">
                          <Link to="/personalitytype" className={!sideBarIsOpen?"linkss":"hidesidebarlinks"}>
                              CAREER/BUSINESS EXPRESSIONS
                          </Link>
                        </div>
                        <div className="titlearealast">    
                        </div>
                      </div>
                      <div className="emptysecwrapper">
                        <div className="emptysection">
                        </div>
                        <div className="dashcontent">
                          <span>
                            YOUR PERSONALITY TYPE  
                          </span>
                          <div>
                            <span className="arrowcover">
                              <img src={leftImg} onClick={()=>updateState({...state,sideBarIsOpen:!sideBarIsOpen?true:false})} className={!sideBarIsOpen?"arrow1 arrowflip":"arrow1"} alt="leftimg" />
                            </span>
                          </div>
                        </div>
                        <div className="dashcontent1">
                           {result && result.career_personality_type?result.career_personality_type:''}
                        </div>
                        <div className="shititms">
                          <div className="ssflex">
                            <img src={seekleft} className="seekleft" alt="left"/>
                            <div className="textlink">
                              Career fitness
                            </div>
                          </div>
                          <div className="ssflex">
                            <div className="textlink1">
                             <Link to="/paymentplan">VIEW FULL RESULTS</Link>
                            </div>
                            <img src={seekright} className="seekleft" alt="right"/>
                          </div>
                        </div>
                      </div>
                      </div> 
                      <div>
                    </div>
                  </Col>
                <Footer/>
            </Container>
      </React.Fragment>
  );
};

export default DashboardResults;
