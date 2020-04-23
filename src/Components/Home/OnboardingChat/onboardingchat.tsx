import * as React from 'react';
import Navbar from '../HomeComponents/navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from '../HomeComponents/footer';
import Col from 'react-bootstrap/Col';
import search from '../../../assets/search.png';
import './onboardingchat.css';
import selct from '../../../assets/select.png';
import chatgirl from '../../../assets/chatgirl.png';
import ActiveUsers from './chatcomponents/activeuser';
import { useState } from 'react';
import CenteredHeader from './chatcomponents/centeredTitle';
import ChatBot from './chatcomponents/chatBot';
import ChatBotSentMessages from './chatcomponents/ChatBotSentMessages';
import UserSentChat from './chatcomponents/userSentChat';
import UserChatScreenTitle from './chatcomponents/userChatScreenTitle';
import SendMessageToolbar from './chatcomponents/sendMessageTool';


 const OnboardingChat:React.FunctionComponent = () => {
  const [offline,setUserOnline] = useState(false)
  const offlineColor = '#3cb238';
  const onlineColor = '#7f8fa4b9';
  const onlineTxt = '#9c1258';
  const offlineTxt = '#fff';
  const sampleMessage = 'Hello I’m Wana from Clarity by Yudimy and I’m going to be assisting you through this assessment process'
  const secondSampleMessage = 'Let’s get to know each other a little. What is your first name and lastname? '
  const userSentResponse = 'Dewunmi Jones'
  const sampleQuestion = 'When your day ends how do you feel?'

  return (
        <>
           <Navbar/>
              <Container fluid={true}>
                <Row className="chatouter">
                  <Col md={12} className="chatwrapper">
                    <Row>
                      <Col md={3} className="bg-white pdleft">
                        <img src={search} className="searchimg" alt="search" />
                        <input type="text" className="searcharea" placeholder="Search Messages"/>
                      </Col>
                      <Col md={8} className="x100 ">
                          <div className="hiddenItem">.</div>
                            <CenteredHeader name="Wana Yudimy" bgColor={offline?onlineColor:offlineColor}/>
                          <div>
                          <div className="three-dot"></div>
                        </div>
                      </Col>
                      <Col md={3} className="bg-white pdleft1">
                        <ActiveUsers color={offline?offlineTxt:offlineTxt} offline bgColor={offline?offlineTxt:onlineTxt}/>  {/* we are passing three props to check the state of the app and update the color */}
                      </Col>
                      <Col md={8} className="chatwrap">
                        <ChatBot name="Wana Yudimy"/>
                        <ChatBotSentMessages message={sampleMessage} />
                        <ChatBotSentMessages message={secondSampleMessage} />
                        <div className="user_response_wrapper">
                          <UserChatScreenTitle name="You"/>
                          <UserSentChat message={userSentResponse}/>
                          <ChatBotSentMessages message={secondSampleMessage} />
                        </div>  
                      </Col>
                    </Row>
                  </Col>
                  <Col md={4} className="pdleft3">
                  </Col>
                  <Col md={8} className="chatwrappp">
                  <SendMessageToolbar />
                  </Col>  
                </Row>
              <Footer/>
            </Container>
        </>
    );
  };

export default OnboardingChat;