import MessagesCss from './Messages.module.css';
import { NavLink } from 'react-router-dom';

const MessagesItem = (props) => {
    return (
        <NavLink to={'/messages/' + props.id}>
            <div className={MessagesCss.item}>
                <Avatar />
                <Message />
                <Name name={props.name} />
            </div>
        </NavLink>
    )
}

const Avatar = (props) => {
    return (
        <div className={MessagesCss.avatar}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK525GaqYCaz-uKhSOcsatpkDQfKr8u67HUw&usqp=CAU" alt="" />
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={MessagesCss.textMessage}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam facere, cum aut voluptatibus tempora ullam provident ab eaque doloremque ea ducimus. Cum dolorum adipisci exercitationem facere in maxime assumenda saepe.
        </div>
    )
}

const Name = (props) => {
    return (
        <div className={MessagesCss.name}>
            {props.name}
        </div>
    )
}


export default MessagesItem;