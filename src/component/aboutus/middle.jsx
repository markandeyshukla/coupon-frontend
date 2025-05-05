import './Abcss.css'
function Middle() {
    return (
        <>
            <div className='middle'>
                <div className='container'>
                    <h1>About Us</h1>
                    <p className="p1">
                        The Coupon Barter platform is designed to allow users to buy and sell coupons seamlessly. The platform allows users to trade coupons securely, and it aims to provide a streamlined experience for managing coupons, tracking purchases, and engaging with the community.
                    </p>
                    <br />


                    <h4>1.User Authentication: </h4><br />
                    <p className="p1">
                        - Users can create an account . <br />
                        - The platform supports basic user registration, login, and logout functionalities. <br />
                    </p>

                    <h4>2.Coupon Management:</h4> <br />
                    <p className="p1">
                        - Users can list coupons for sale. <br />
                        - They can also purchase coupons listed by others. <br />
                        - The platform tracks both bought and sold coupons for users. <br />
                    </p>
                    <h4>3.Payment System: </h4> <br />
                    <p className="p1">
                        - Payments are processed through the platform, where users can buy or sell coupons. <br />
                        - A 10% fee is deducted from each transaction before the seller receives their funds. <br />
                    </p>
                    <h4>4. Wishlist Feature:</h4> <br />
                    <p className="p1">
                        - Users can add coupons to their wishlist after signing in.<br />
                        - Wishlist items are saved and visible only when the user is logged in.<br />
                        - Once the user logs out, the wishlist will be cleared automatically.<br />
                    </p>
                    <h4>5.Support and Contact:</h4> <br />
                    <p className="p1">
                        - There is a Supportpage where users can get assistance with issues related to buying or selling coupons. <br />
                        - Users can communicate through built-in messaging or support options. <br />
                    </p>
                    <h4>6.About Us Page:</h4>  <br />
                    <p className="p1">
                        - An About Us page provides users with information about the platform, its mission, and the team behind it. <br />
                    </p>
                    <h4>7.UI/UX Design:</h4>  <br />
                    <p className="p1">
                        - we have implemented a navigation bar for easy access to pages like Home  ,Support  ,About Us  , and others. <br />
                        - Buttons such as Buy Coupons and other CTAs are prominently featured to ensure user engagement. <br />
                    </p>
                    <h4>Tech Stack:</h4>  <br />
                    <h5>-Frontend:</h5>  <br />
                    <p className="p1">
                        -React.js for building the UI. <br />
                        -React Router for handling routing between pages like Home, Support, About Us, etc. <br />
                        -Bootstrap and custom CSS for responsive design and styling. <br />
                    </p>
                    <h5>-Backend: </h5> <br />
                    <p className="p1">
                        - The backend using Express.js(going for a MERN stack) or other technologies to handle user authentication, coupon management, and payments. <br />
                    </p>
                    <h5>-Database:</h5> <br />
                    <p className="p1">
                        -MongoDB Atlas database to store user profiles, coupon listings, transaction details, etc. <br />
                    </p>
                </div>
            </div>
        </>
    )
}
export default Middle;