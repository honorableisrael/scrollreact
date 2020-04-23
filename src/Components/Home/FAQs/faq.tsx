import * as React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../HomeComponents/navbar';
import Footer from '../HomeComponents/footer';
import RightTopImage from '../../../assets/blank_image_container.png';
import './faqs.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


const Faq: React.FunctionComponent = (props) => {
    let [activeKey,setActiveKey] = useState('')
  return (
      <>
      <Navbar/>
           <Container fluid={true}>
                <Row className="firstrow possition">
                    <Col md={5} sm={{span:1,order:12}} xs={{span:1,order:12}} className="firstrowtxt">
                        <div>
                           Frequently
                        </div>
                        <div className="askIn">
                            Asked Questions
                        </div>
                        <div className = "Clarity-is-the-solution">
                          <input type="text" className="askus" placeholder="Ask us any question" />
                        </div>
                    </Col>
                    <Col md={{span:5}} sm={{span:12,order:1}} xs={{span:12,order:12}}>
                        <img src={RightTopImage} className="homebanner0" alt="homebanner"/>
                    </Col>
                </Row>
                    <Row className="faq-item-wrapper">
                    <Col xs={12} md={{span:9,offset:1}} sm={11} className="faq-accordion">
                        <Accordion activeKey={activeKey} defaultActiveKey="" onSelect={e=>setActiveKey(e)}>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <div className='faq-side-header'>
                                    <div className="space111">
                                        <div>
                                          How does Clarity help me
                                        </div>
                                        <div className="plus_style">
                                            +
                                        </div>
                                </div>
                                </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body><p className="faq-answers">text<span className="specailtext">RC 1596426</span></p></Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        {/* second question */}
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                            <div className='faq-side-header'>
                                <div className="space111">
                                    <div>
                                        I don't have the funds to subscribe what can I do?
                                    </div>
                                    <div className="plus_style">
                                             +
                                    </div>
                                </div>
                            </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body> text.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        {/* third question */}
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="3">
                            <div  className='faq-side-header'>
                                <div className="space111">
                                    <div>
                                        What are the benefits that Clarity to me? 
                                    </div>
                                    <div className="plus_style">
                                        +
                                    </div>
                                </div>
                            </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="3">
                            <Card.Body>
                            <p className="faq-answers">
                                Objectivity, personalized and unbiased advice. It is our duty to get to know you, understand you and help make the best and most informed decisions at every point in your life walk starting with helping you understand who you are and what career paths are best for you to thrive in.  

                                Clarity is like a therapist in your pocket, helping you navigate through the challenges of your career and personal struggles, as much as we are focused on helping you build a fulfilling career we also realize that other aspects of your life matter too. Hence, clarity counsellors and psychologist are equipped to help you tackle various issues that come along your way as you work on maximizing your potential. 

                                We don’t stop here we recommend you to opportunities that will help improve your standard of living and make you feel fulfilled. 
                            </p>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>

                        {/* fourth question */}
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="4">
                            <div  className='faq-side-header'>
                                <div className="space111">
                                    <div>
                                        Is Clarity available on the app store? 
                                    </div>
                                    <div className="plus_style">
                                        +
                                    </div>
                                </div>
                            </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="4">
                            <Card.Body>
                                text
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="5">
                            <div  className='faq-side-header'>
                                <div className="space111">
                                    <div>
                                        Is Clarity just for working professionals?
                                    </div>
                                    <div className="plus_style">
                                        +
                                    </div>
                                </div>
                            </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="5">
                            <Card.Body>
                            </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </Col>
                    </Row>
            <Footer/>
        </Container>
      </>
  );
};

export default Faq;
