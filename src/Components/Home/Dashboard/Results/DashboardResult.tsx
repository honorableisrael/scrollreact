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
  token:string
}
const DashboardResults: React.FunctionComponent<IAppProps> = (props:any) => {
  const [ state,updateState ] = useState<State>({sideBarIsOpen:false,token:''})
  const { sideBarIsOpen,token } = state;
  useEffect(()=>{
    window.scrollTo(-0,-0)
    const availableToken = sessionStorage.getItem('userToken')
    const token = availableToken?JSON.parse(availableToken):props.history.push('/signin')
    axios.get(`${API}/freedashboard`, { headers: { 'Authorization': `Token ${token}` } })
    .then(response=>{
      console.log(response)
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
                              WHERE YOU ARE
                          </Link>  
                        </div>
                        <div className="titlearea1">
                          <Link to="/personalitytype" className={!sideBarIsOpen?"linkss":"hidesidebarlinks animated fadeInLeft"}>
                              YOUR PERSONALITY TYPE
                          </Link>

                        </div>
                        <div className="titlearea1">
                          <Link to="/personalitytype" className={!sideBarIsOpen?"linkss":"hidesidebarlinks"}>
                              STRENGTHS & WEAKNESS
                          </Link>
                        </div>
                        <div className="titlearea1">
                          <Link to="/personalitytype" className={!sideBarIsOpen?"linkss active":"hidesidebarlinks"}>
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
                            You who strongly believes the world can be a better place for everyone. You feel
                            deeply for people and their challenges; you are always willing to help but at the
                            same time you are very objective when listening to people’s problems or challenges.
                            You often worry about others, and have constantly active inner mind (inner
                            thoughts and conversations in your minds).
                            Once you get an idea (a theory or ideology) you strongly believe would work for the
                            greater good of people in your community you fight to make it happen even if it
                            means influencing a policy. You are most times referred to as an advocate or public
                            servant who has the best interest of everyone at heart. Sometimes sitting alone
                            reading a good book is something you consider fun. You also enjoy some exciting
                            and thrilling physical activities for fun once in a while, as well.
                        </div>
                        <div className="shititms">
                          <div className="ssflex">
                            <img src={seekleft} className="seekleft" alt="left"/>
                            <div className="textlink">
                              WHERE YOU ARE
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
