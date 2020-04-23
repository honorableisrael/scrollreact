import * as React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import clock from '../../../../assets/clock.png';
import ProgressBar from 'react-bootstrap/ProgressBar'
import '../assessment.css';

export interface AssessmentFirstSectionProps {
    phase:string,
    nextPhase:string,
    time:number
}

export function AssessmentFirstSection (props: AssessmentFirstSectionProps) {
  return(   
    <>
      <Col md={11} className="firstassess">
        <Row>
            <Col md={11}>
                <div className="assesment_header">
                   {props.phase}
                </div>
            </Col>
        </Row>
        <div className="wrapa">
        <div className="wrapassess">
            <div className="firswidth">
                <div className="sdsd">
                    UP NEXT
                </div>
                <div>
                   {props.nextPhase}
                </div>
            </div>
            <div>
                <button className="secondwidth">
                    <img src={clock} className="spacol" alt="spacol"/> {props.time} mins
                </button>
            </div>
        </div>
        <div className="progressbarwrapper">
            <ProgressBar>
                <ProgressBar striped variant="warning" now={25} key={1} />
                <ProgressBar variant="warning" now={0} key={2} />
                <ProgressBar striped variant="warning" now={0} key={3} />
            </ProgressBar> 
        </div>
        </div>
    </Col>
    </>
  )
}
