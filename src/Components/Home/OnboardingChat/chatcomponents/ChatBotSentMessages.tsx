import * as React from 'react';

interface ChatBotProps {
    message:string
}

const ChatBotSentMessages: React.FunctionComponent<ChatBotProps> = (props) => {
  return (
      <>
        <div className="chatbotText">
            {props.message}
        </div>
      </>
  );
};

export default ChatBotSentMessages;
