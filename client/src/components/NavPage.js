import {NavLink, Link} from 'react-router-dom';
const NavPage= () => {
    return (
        <nav id= 'NavPage'>
        <NavLink to= '/'>Our Story</NavLink>
        <br></br>
         <Link to= "/register">Create an Account</Link>
        </nav>
    );
};

export default NavPage;
