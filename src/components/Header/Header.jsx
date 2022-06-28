import HeaderCss from './Header.module.css'


const Header=(props)=>{
    return(
        <div className={HeaderCss.header}>
            <div className={HeaderCss.logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react-logo" />
            </div>
            <div className={HeaderCss.name}>
                React discussion
            </div>
        </div>
    )
}

export default Header;
