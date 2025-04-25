import Heador from "../../component/landing/Heador";
import Banner from "../../component/landing/Banner";
import Lading from "../../component/landing/Lading";
import Footer from "../../component/homepage/Footer";
function Landing(){
    return(
        <>
            <div>
                <Heador/>
                <Banner/>
                <Lading/>
                <Footer/>
            </div>
        </>
    )
}
export default Landing;