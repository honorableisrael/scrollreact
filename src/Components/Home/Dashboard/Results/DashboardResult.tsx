import * as React from 'react';
import Navbar from '../../HomeComponents/navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from '../../HomeComponents/footer';
import Col from 'react-bootstrap/Col';
import CenteredHeader from '../../OnboardingChat/chatcomponents/centeredTitle';
import ActiveUsers from '../../OnboardingChat/chatcomponents/activeuser';
import ChatBot from '../../OnboardingChat/chatcomponents/chatBot';
import ChatBotSentMessages from '../../OnboardingChat/chatcomponents/ChatBotSentMessages';
import UserChatScreenTitle from '../../OnboardingChat/chatcomponents/userChatScreenTitle';
import UserSentChat from '../../OnboardingChat/chatcomponents/userSentChat';
import SendMessageToolbar from '../../OnboardingChat/chatcomponents/sendMessageTool';


interface IAppProps {
}

const DashboardResults: React.FunctionComponent<IAppProps> = (props) => {
    const [offline,setUserOnline] = React.useState(false)
    const offlineColor = '#3cb238';
    const onlineColor = '#7f8fa4b9';
    const onlineTxt = '#9c1258';
    const offlineTxt = '#fff';
    const sampleMessage = 'Hello I’m Wana from Clarity by Yudimy and I’m going to be assisting you through this assessment process'
    const secondSampleMessage = 'Let’s get to know each other a little. What is your first name and lastname? '
    const userSentResponse = 'Dewunmi Jones'

    return (
      <React.Fragment>
            <Navbar/>
              <Container fluid={true}>
                <Row className="chatouter">
                  <Col md={12} className="chatwrapper">
                    <Row>
                      <Col md={3} className="bg-white pdleft">
                        DASHBOARD - RESULTS
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
      </React.Fragment>
  );
};

export default DashboardResults;
