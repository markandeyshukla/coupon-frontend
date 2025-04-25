import { TbBrandGoogleHome } from "react-icons/tb";
import { LuSquareMenu } from "react-icons/lu";
import { Link } from 'react-router-dom';
import './headercss.css';
function Header() {
    return (
        <>
            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img className="logo" src="/logo.jpg" alt="logoimage" />
                    <Link className="navbar-brand" to='/'>COUPON BARTER</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="sup nav-link active" aria-current="page" to='/support'>Support</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/aboutus'>About Us</Link>
                            </li>
                            <Link to='/landing' ><button className="naruto" type="button">Buy Coupons</button></Link> */}
                            {/* <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdow
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to='/'>Action</Link></li>
              <li><Link className="dropdown-item" to='/'>Another action</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" to='/'>Something else here</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
          </li> */}
                        {/* </ul> */}
                        {/* <form className="d-flex">
          <button className="btn btn-outline-success" type="Buy Coupon">Buy Coupons</button>
        </form> */}
                    {/* </div>
                </div>
            </nav> */}
            <div className='ht1'>
            <img className="logo" src="/logo.jpg" alt="logoimage" />
            <Link className="navbar-brand" to='/'>COUPON BARTER</Link>
                <span className="ht2">
                    <Link className="ht3" to='/support'>Support</Link>
                </span>
                <span className="ht2">
                    <Link className="ht3" to='/aboutus'>About Us</Link>
                </span>
                <span className="ht2">
                     <Link to='/landing'><TbBrandGoogleHome className="ht5" /></Link>
                </span>
                <div className="drop">
            <Link  to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <LuSquareMenu className="menu" />
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="ht3" to='/support'>Support</Link></li>
              <li><Link className="ht3" to='/aboutus'>About Us</Link></li>
              <li><Link className="ht3" to='/landing'>Home</Link></li>
            </ul>
            </div>
            </div>
        </>
    );
}
export default Header;