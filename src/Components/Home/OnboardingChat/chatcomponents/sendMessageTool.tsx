import * as React from 'react';
import pin from '../../../../assets/attachpin.png';
import attachimage from '../../../../assets/attachimage.png';
import sendButton from '../../../../assets/sendbutton.png';


interface IAppProps {
}

const SendMessageToolbar: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <>
    <div className="bottomChatArea">
        {/* <div className="Path-491"></div> */}
            <div className="fle111">
                <div className="p32">
                    <img src={pin} className="pin" alt="pin"/>
                    <img src={attachimage} className="attachimage" alt="attachimage"/>
                    <input type="text" className="typeMessagehere" placeholder="Type a message"/>
                </div>
            <div>
                <img src={sendButton} className="sendButton" alt="sendButton"/>
            </div>
        </div>
    </div>
    </>
  );
};

export default SendMessageToolbar;
