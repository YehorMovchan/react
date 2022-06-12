

const ProfilePage = () => {
    return (
        <div className="content">
            <div className="banner">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCk22hxOS9ecDfPvFXZjabzPCk3crNd0TQ-w&usqp=CAU" alt="" />
            </div>
            <Profile />
            <div className="make-post">
                <textarea name="new-post" id="new-post" cols="30" rows="10"></textarea>
                <input type="button" value="share" />
            </div>
        </div>
    )
}

const Profile = () => {
    return (
        <div className="profile-info">
            <div className="avatar">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK525GaqYCaz-uKhSOcsatpkDQfKr8u67HUw&usqp=CAU" alt="" />
            </div>
            <div className="name">
                Yehor
            </div>
            <div className="info">
                Age:17 <br /> Country: Ukraine <br /> Education: DNU Olesya Gonchara
            </div>
        </div>
    )
}

export default ProfilePage;