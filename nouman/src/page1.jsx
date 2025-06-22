import Header from './Components/Header.jsx';
import Content from './Components/Content.jsx';
import Footer from "./Components/Footer.jsx";
import Mainbody1 from './Components/Accessories.jsx';
import Mainbody2 from './Components/PC.jsx';
import Mainbody3 from './Components/NewArrivals.jsx';
import Mainbody4 from './Components/EmailSection.jsx';
function Page1(){
    return(
<div>
    <Header/>
    <Content/>
    <Mainbody1/>
    <Mainbody2/>
    <Mainbody3/>
    <Mainbody4/>
    <Footer/>
   </div>
    );
}
export default Page1;