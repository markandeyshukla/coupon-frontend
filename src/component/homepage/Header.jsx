import { TbBrandGoogleHome } from "react-icons/tb";
import { LuSquareMenu } from "react-icons/lu";
import { Link } from 'react-router-dom';
import './headernavbar.css';
function Header() {
    return (
        <>

            <div className='homepage-header-main'>
                <div className="homepage-navbar-Container">
                    <div className="homepage-logo-name">
                        <img className="homepage-navbar-logo" src="/logo.jpg" alt="logoimage" />
                        <Link className="homepage-navbar-brand" to='/'>COUPON BARTER</Link>
                    </div>

                    <div className="homepage-navbar-items">
                        <Link className="navbar-items" to='/support'>Support</Link>

                        <Link className="navbar-items" to='/aboutus'>About Us</Link>

                        <Link to='/landing'><TbBrandGoogleHome className="homepage-navbar-homeicon" /></Link>
                    </div>
                    <div className="drop">
                        <Link to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <LuSquareMenu className="menu" />
                        </Link>
                        <ul className="dropdown-menu">
                            <li><Link className="navbar-items" to='/support'>Support</Link></li>
                            <li><Link className="navbar-items" to='/aboutus'>About Us</Link></li>
                            <li><Link className="navbar-items" to='/landing'>Home</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;