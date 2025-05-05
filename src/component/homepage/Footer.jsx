import { FaPhoneVolume } from "react-icons/fa6";
import { TbBrandGmail } from "react-icons/tb";
import { Link } from 'react-router-dom';
import './fcss.css'
function footer() {
    return (
        <>
            <div className="contact">
                <div className='footer-conrtaindiv'>
                <div className="contact-detail">
                    <p className="contact-details">Contact</p>
                    <p className='tast'><TbBrandGmail className="image"/>help@couponbarter.com</p>
                    <p className='tast'><FaPhoneVolume className='image' />0542-4595674</p>
                </div>
                <div className="social-media">
                    <p className='pp'>Get in Touch with Us!</p>
                    <p><Link className='test' to='/support'>Support</Link></p>
                    <p><Link className='test' to='/aboutus'>About Us</Link></p>
                    <p><Link className='test' to='/listing'>Sell-Coupon</Link></p>
                    <p><Link className='test' to='/wishlist'>Wishlist</Link></p>
                    <p><Link className='test' to='/landing'>Home</Link></p>
                </div>
                </div>
            </div>
        </>
    );
}

export default footer;
