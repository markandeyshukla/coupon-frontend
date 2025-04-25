import phone from '../../component/homepage/phone.jpg'
import gmail from '../../component/homepage/gmail.png'
import { Link } from 'react-router-dom';
import './fcss.css'
function footer() {
    return (
        <>
            <div className="contact">
                <div className='container m-auto'>
                <div className="contact-detail">
                    <p className="contact-details">Contact</p>
                    <p className='tast'><img className="image" src={gmail} alt="..." />help@couponbarter.com</p>
                    <p className='tast'><img className='image' src={phone} alt="..." />0542-4595674</p>
                </div>
                <div className="social-media">
                    <p className='pp'>Get in Touch with Us!</p>
                    <p><Link className='test' href='/'>Instagram</Link></p>
                    <p><Link className='test' href='/'>Facebook</Link></p>
                    <p><Link className='test' href='/'>Twitter</Link></p>
                    <p><Link className='test' href='/'>Linkdein</Link></p>
                    <p><Link className='test' href='/'>Github</Link></p>
                </div>
                </div>
            </div>
        </>
    );
}

export default footer;
