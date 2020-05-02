import * as React from 'react';
import '../Home/Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../HomeComponents/navbar';
import Footer from '../HomeComponents/footer';
import './assessment.css';



export interface IAppProps {
}

export function SelectPaymentPlan (props: IAppProps) {
  return (
    <>
    <Navbar/>
    <Container fluid={true}>
        <Row className="firstrowcf cftcontent bgwcf">
            <Col md={10} className="chooseheader">TO SEE FULL insights and recommendationS</Col>
            <Col md={12} className="chooseheader1">See available plans below</Col>
            <div className="pricewraper">
                <div className="plan_1">One Off Insights </div>
                <div className="plancost1"><span>&#8358;</span>7500</div>
                <div className="personality dd11">Strengths & Weaknesses</div>
                <div className="Strengths dd11">Your work life mission</div>
                <div className="Weaknesses dd11">Rules for success</div>
                <div className="Strongw dd11">Strong & Weak </div>
                <div className="Leadership dd11">Leadership Competencies </div>
                <div className="Leadership dd11">Career/Business Expression </div>
                <div><button className="getstarted1">Get Started</button></div>
            </div>
            <div className="pricewraper">
                <div className="plan_1">Level Up  Insights</div>
                <div className="plancost1"><span>&#8358;</span>15000</div>
                <div className="personality dd11">Strengths & Weaknesses</div>
                <div className="Strengths dd11">Your work life mission</div>
                <div className="Weaknesses dd11">Rules for success</div>
                <div className="Strongw dd11">Strong & Weak </div>
                <div className="Leadership dd11">Leadership Competencies </div>
                <div className="Leadership dd11">Career/Business Expression </div>
                <div className="Strongw dd11">Access to counselling</div>
                <div className="Strongw dd11">support all through the month</div>
                <div>Strategy Report</div>
                <div className="Strongw dd11"><button className="getstarted1">Get Started</button></div>
            </div>
            <div className="pricewraper">
                <div className="plan_1">Accountability Insights</div>
                <div className="plancost1"><span>&#8358;</span>30000</div>
                <div className="personality dd11">Personality</div>
                <div className="Strengths dd11">Strengths </div>
                <div className="Weaknesses dd11">Weaknesses </div>
                <div className="Strongw dd11">Strong & Weak </div>
                <div className="Leadership dd11">Leadership Competencies </div>
                <div className="Strongw dd11">30 minutes’ strategy session with a Clarity Counsellor</div>
                <div className="Strongw dd11">Personal Development road map</div>
                <div className="Strongw dd11">Access to chat with a clarity counsellor for 24/7 for 30 days and keep you accountable on your development plan.</div>
                <div className="Strongw dd11"><button className="getstarted1">Get Started</button></div>
            </div>
        </Row>  
    </Container>
    <Footer/>
    </>
  );
}
