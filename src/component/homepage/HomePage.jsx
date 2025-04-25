import lgspb from './lgspb.jpg';
import './Home.css';
// import React, { useEffect } from "react";
import { Link } from 'react-router-dom';


function HomePage() {
  // useEffect(() => {
  //   showAlert();
  // }, []);

  // function showAlert() {
  //   var ans = prompt("Email address");
  //   var ans1 = prompt("Password");
  //   console.log(ans, ans1);
  // }
  return (
    <>
   <div className="pic">
   <img className="img-flud" src={lgspb} alt="..."/>
   <div className="button-group">
       <Link className="but btn btn-primary" to="/login" role="button">Login</Link>
       <Link className="butt btn btn-primary" to="/signup" role="button">Sign-up</Link>
       <div className='aaa'></div> 
    </div> 
           
   </div>
  </>  
  );
}
// import React from "react";
// import AppRouter from "./AppRouter";

// function App() {
//   return <LinkppRouter />;
// }

// export default App;
  export default HomePage;
