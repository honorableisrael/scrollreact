import * as React from 'react';

interface User{
    name:string,
    bgColor:string
}

const CenteredHeader: React.FunctionComponent<User> = (props) => {
  return (
      <>
          <div className="username_status">
            {props.name} 
            <span className="greendot" style={{background:props.bgColor}}></span>  
        </div>
      </>
  );
};

export default CenteredHeader;
