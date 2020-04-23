import * as React from 'react';
import chatgirl from '../../../../assets/chatgirl.png';



interface TextColor {
    color:string,
    bgColor:string,
    offline:Boolean
}

const ActiveUsers: React.FunctionComponent<TextColor> = (props) => {

  return (
      <>
        <div className="activeuser" style={{background:props.bgColor}}>
            <div className="activeuser_im"><img src={chatgirl} className="chat_photo" alt="chatgirl"/></div>
            <div className="stat11" style={{color:props.color}}>
                <div>
                {props.offline?'Online':'Offline'}
                </div>
                <div>
                Wana Yudimy
                </div>
            </div>
        </div>
        <div className="horizontalln"></div>
      </>
  );
};

export default ActiveUsers;
