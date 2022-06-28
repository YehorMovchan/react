import PostCss from "./Posts.module.css";

const PostItem = (props) => {
    return (
        <div className={PostCss.item}>
            <Avatar />
            <Message text={props.text}/>
            <Details likes={props.likes} dislike={props.dislike}/>
        </div>
    )
}

const Avatar = (props) => {
    return (
        <div className={PostCss.avatar}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK525GaqYCaz-uKhSOcsatpkDQfKr8u67HUw&usqp=CAU" alt="" />
        </div>
    )
}
const Message = (props) => {
    return (
        <div className={PostCss.message}>
            {props.text}
        </div>
    )
}

const Details = (props) => {
    return(
        <div className={PostCss.details}>
            <div className={PostCss.likes}>Like: {props.likes}</div>
            <div className={PostCss.answers}>Dislike: {props.dislike}</div>
        </div>
    )
}
export default PostItem;
