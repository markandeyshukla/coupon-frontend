// import React, { useEffect, useState } from 'react';

// const Coupons = () => {
//   const [coupons, setCoupons] = useState([]);

//   useEffect(() => {
//     fetch('/data/coupons.json')  
//       .then((res) => res.json())
//       .then((data) => setCoupons(data));
//   }, []);

//   return (
//     <div>
//       <h1>Available Coupons</h1>
//       <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
//         {coupons.map((coupon) => (
//           <div key={coupon.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
//             <img src={coupon.image} alt={coupon.title} style={{ width: '100%' }} />
//             <h3>{coupon.title}</h3>
//             <p>{coupon.text}</p>
//             <p><strong>₹{coupon.price}</strong></p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Coupons;
