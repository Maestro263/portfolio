import case1 from '../src/Images/case1.png';
import case2 from '../src/Images/case2.png';
import case3 from '../src/Images/case3.png';
import case4 from '../src/Images/case4.png';
import case5 from '../src/Images/case5.png';


const Cases = () => {

    return ( 
        <div className="cases">
            <h1>Cases</h1>
            <div className="container">
            <a href="https://mohassani.one/" rel="noreferrer" target="_blank"> 
            <img src={case1} alt="Reaction Timer"/> </a>
            <div className="centered"><p>???</p></div>
            </div>
            <h4>Reaction Timer</h4>
            <div className="container">
            <a href="https://elated-edison-dee3ef.netlify.app/" rel="noreferrer" target="_blank"> <img src={case2} alt="Live Chat"/> </a>
            <div className="centered"><p>???</p></div>
            </div>
            <h4>Live Chat</h4>
            <div className="container">
            <a href="https://distracted-carson-42ba49.netlify.app/" rel="noreferrer" target="_blank"> <img src={case3} alt="Webshop Design"/> </a>
            <div className="centered"><p>???</p></div>
            </div>
            <h4>Webshop Design</h4>
            <div className="container">
            <a href="https://suspicious-panini-211513.netlify.app/" rel="noreferrer" target="_blank"> <img src={case4} alt="Fetching Data Try"/> </a>
            <div className="centered"><p>???</p></div>
            </div>
            <h4>Fetching Data (try)</h4>
            <div className="container">
            <a href="https://t18iq.csb.app/" rel="noreferrer" target="_blank"> <img src={case5} alt="Fetching and creating data"/> </a>
            <div className="centered"><p>???</p></div>
            </div>
            <h4>Fetching and Creating Data</h4>
            </div>
     );
}
    
export default Cases;