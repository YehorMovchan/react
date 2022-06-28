import TextareaAutosize from 'react-textarea-autosize';
import DialogCss from './Dialog.module.css';
import React from 'react';
import { addNewMessageActionCreator } from '../../../data/state';

const Write = (props) => {
    
    let ref=React.createRef();

    const addMessage=()=>{
        let text=ref.current.value;
        props.dispatch(addNewMessageActionCreator(text));
    }
    
    return (
        <div className={DialogCss.write}>
            <TextareaAutosize placeholder='Enter your message' ref={ref}/>
            <input type="button" value="Send" onClick={addMessage} />
        </div>
    );
}

export default Write;