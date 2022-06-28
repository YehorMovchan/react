import FieldCss from './FieldCorre.module.css';


const FieldItem = (props) => {
    return (
        <div className={props.sender === 'me' ? FieldCss.me : FieldCss.someone}>
            <div className={FieldCss.img}>
                <img src={props.avatar} alt="avatar" />
            </div>
            <div className={FieldCss.text}>
                {props.value}
            </div>
        </div>
    )
}

export default FieldItem;