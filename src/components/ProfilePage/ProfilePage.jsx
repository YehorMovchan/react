import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import {addNewPostActionCreator } from '../../data/state';
import ProfilePageCss from './ProfilePage.module.css'
import Posts from './ProfilePageItem/Posts/Posts'

const ProfilePage = (props) => {
    
    let ref=React.createRef();
    
    let addPost=()=>{
        let text= ref.current.value;
        props.dispatch(addNewPostActionCreator(text));
    }

    return (
        <div className={ProfilePageCss.content}>
            <div className={ProfilePageCss.banner}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCk22hxOS9ecDfPvFXZjabzPCk3crNd0TQ-w&usqp=CAU" alt="" />
            </div>
            <Profile />
            <div className={ProfilePageCss.make_post}>
                <TextareaAutosize name="new-post" id="new-post" cols="30" rows="10" ref={ref} ></TextareaAutosize>
                <input type="button" value="share" onClick={addPost}/>
            </div>
            <Posts state={props.state}/>
        </div>
    )
}

const Profile = (props) => {
    return (
        <div className={ProfilePageCss.info}>
            <div className={ProfilePageCss.avatar}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK525GaqYCaz-uKhSOcsatpkDQfKr8u67HUw&usqp=CAU" alt="" />
            </div>
            <div className={ProfilePageCss.name}>
                Yehor
            </div>
            <div className={ProfilePageCss.detail}>
                Age:17 <br /> Country: Ukraine <br /> Education: DNU Olesya Gonchara
            </div>
        </div>
    )
}

export default ProfilePage;