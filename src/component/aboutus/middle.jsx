import './Abcss.css'
function Middle() {
    return (
        <>
            <div className='middle'><div className="margin">
                <h1>About Us</h1>
                <p className="p1">
                    The Coupon Barter platform is designed to allow users to buy and sell coupons seamlessly. The platform allows users to trade coupons securely, and it aims to provide a streamlined experience for managing coupons, tracking purchases, and engaging with the community.
                    </p>
                <br />
               

                <h4>1.User Authentication: </h4><br />
                <p className="p1">
                    - Users can create an account and log in to manage their dashboard. <br />
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
                        <h4>4.Dashboard:</h4>  <br />
                        <p className="p1">
                            - Users have access to a dashboard to manage their coupons, transactions, and wallet balance. <br />
                            - The dashboard helps users track their coupon inventory and finances. <br />
                            </p>
                            <h4>5.Support and Contact:</h4> <br />
                            <p className="p1">
                                - There is aSupportpage where users can get assistance with issues related to buying or selling coupons. <br />
                                - Users can communicate through built-in messaging or support options to prevent fraud. <br />
                                </p>
                                <h4>6.About Us Page:</h4>  <br />
                                <p className="p1">
                                    - AnAbout Uspage provides users with information about the platform, its mission, and the team behind it. <br />
                                    </p>
                                    <h4>7.UI/UX Design:</h4>  <br />
                                    <p className="p1">
                                        - You've implemented a navigation bar for easy access to pages likeHome  ,Support  ,About Us  , and others. <br />
                                        - Buttons such asBuy Couponsand other CTAs are prominently featured to ensure user engagement. <br />
                                        </p>
                                        <h4>Tech Stack:</h4>  <br />
                                        <h5>-Frontend:</h5>  <br />
                                        <p className="p1">
                                            -React.jsfor building the UI. <br />
                                            -React Routerfor handling routing between pages like Home, Support, About Us, etc. <br />
                                            -Bootstrap(or custom CSS) for responsive design and styling. <br />
                                            </p>
                                            <h5>-Backend: </h5> <br />
                                            <p className="p1">
                                                - The backend could be usingExpress.js(if you're going for a MERN stack) or other technologies to handle user authentication, coupon management, and payments. <br />
                                                </p>
                                                <h5>-Database:</h5> <br />
                                                <p className="p1">
                                                    -MongoDBor another database to store user profiles, coupon listings, transaction details, etc. <br />
                                                    </p>
                                                    <h5>Next Steps:</h5>  <br />
                                                    <p className="p1">
                                                        -Finalizing the UI/UX  : Continue designing and making sure the platform is user-friendly. <br />
                                                        -Adding Payment Integration  : Implement payment processing for buying and selling coupons. <br />
                                                        -Testing  : Ensure the platform functions properly, especially user authentication and coupon transactions. <br />
                                                        </p>
                                                             </div>
            </div>
        </>
    )
}
export default Middle;