import Dialog from './Dialogs/Dialogs';
import MessagesCss from './Messages.module.css';
import MessagesItem from './MessagesItem';

const Messages = (props) => {
    let messagesItem = props.state.messagePage.messagesItemObject.map(el => <MessagesItem name={el.name} id={el.id} />)
    return (
        <div className={MessagesCss.content}>
            <div className={MessagesCss.messages}>
                {messagesItem}
            </div>
            <Dialog state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default Messages;