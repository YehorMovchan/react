import PostItem from './PostItem';
import PostCss from './Posts.module.css';





const Posts=(props)=>{
    let posts=props.state.profilePage.postsObject.map(el=>{return <div><PostItem id={el.id} text={el.text} likes={el.likes} dislike={el.dislikes}/><hr/></div>})
    return(
        <div className={PostCss.posts}>
            <span>Posts:</span>
            {posts}
        </div>
    )
}

export default Posts;
