import NavbarItem from "./Navbar-components/NavbarItem";
import NavbarCss from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div className={NavbarCss.nav}>
            <NavLink to="/profile" className={ navData => navData.isActive ? NavbarCss.active : null }>
                <NavbarItem text="Profile" />
            </NavLink>
            <NavLink to="/messages" className={ navData => navData.isActive ? NavbarCss.active : null }>
                <NavbarItem text="Messages" />
            </NavLink>
            <NavLink to="/theme" className={ navData => navData.isActive ? NavbarCss.active : null }>
                <NavbarItem text="Theme" />
            </NavLink>
        </div>
    )
}

export default Navbar;
