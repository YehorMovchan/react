import NavbarCss from './../Navbar.module.css';

const NavbarItem = (props) => {
    return (
        <div className={NavbarCss.item}>
            {props.text}
        </div>
    )
}
export default NavbarItem;
