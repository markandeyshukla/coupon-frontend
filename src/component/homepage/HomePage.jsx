import backside from './backside.png';
import './Home.css';
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <>
   <div className="homepage-main">
   <img className="homepage-background-img" src={backside} alt="..."/>
   <div className="button-login-signup">
       <Link className="homepage-login" to="/login" role="button">Login</Link>
       <Link className="homepage-signup" to="/signup" role="button">Sign-up</Link>
    </div>        
   </div>
  </>  
  );
}
export default HomePage;
