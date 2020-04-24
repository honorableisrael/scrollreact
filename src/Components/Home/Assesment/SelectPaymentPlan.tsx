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
                <div className="personality dd11">Personality</div>
                <div className="Strengths dd11">Strengths </div>
                <div className="Weaknesses dd11">Weaknesses </div>
                <div className="Strongw dd11">Strong & Weak </div>
                <div className="Leadership dd11">Leadership Competencies </div>
                <div><button className="getstarted">Get Started</button></div>
            </div>
            <div className="pricewraper">
                <div className="plan_1">Level Up  Insights</div>
                <div className="plancost1"><span>&#8358;</span>15000</div>
                <div className="personality dd11">Personality</div>
                <div className="Strengths dd11">Strengths </div>
                <div className="Weaknesses dd11">Weaknesses </div>
                <div className="Strongw dd11">Strong & Weak </div>
                <div className="Leadership dd11">Leadership Competencies </div>
                <div className="Strongw dd11">Work function</div>
                <div className="Strongw dd11">Work style</div>
                <div className="Strongw dd11">Industry Match</div>
                <div className="Strongw dd11">Comprehensive Talent</div>
                <div className="">Management Insight& </div>
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
                <div className="Strongw dd11">Work function</div>
                <div className="Strongw dd11">Work style</div>
                <div className="Strongw dd11">Industry Match</div>
                <div className="Strongw dd11">6 months Virtual coaching and career accountability for staff</div>
                <div className="Strongw dd11"><button className="getstarted1">Get Started</button></div>
            </div>
        </Row>  
    </Container>
    <Footer/>
    </>
  );
}
