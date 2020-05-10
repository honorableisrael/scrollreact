import * as React from 'react';
import Col from 'react-bootstrap/Col';

interface btnProps{
    background:string;
}

const TakeAssessment: React.FunctionComponent<btnProps> = (props) => {
  return (
      <>
        <Col md={12} className='text-center takeAssesment'>
            <button className='TAKE-FREE-ASSESSMENT' style={{background:props.background}}>
                TAKE FREE ASSESSMENT
            </button>
        </Col>
      </>
  );
};

export default TakeAssessment;
