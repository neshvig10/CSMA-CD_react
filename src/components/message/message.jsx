import React from 'react';
import { Link } from 'react-router-dom';
import './message.css'

const Message = (props) => {
  return (
    <div>
      {
        <div className='message'>
            {props.message}
        </div>
      
      }
    </div>
  );
};

export default Message;