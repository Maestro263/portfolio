import { FaHtml5, FaSass, FaCss3Alt, FaReact, FaPython } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';


const Language = () => {


    return (
        <div className="language" >
            <h1>Programming Languages</h1>
            <ul>
                <div className="label-icon">
             <li><FaHtml5 className="language-icons" /></li>
<p>HTML</p>
                </div>
                <div className="label-icon">
                <li><FaSass className="language-icons" /></li>
                    <p>SASS</p>
                </div>
                <div className="label-icon">
                <li><FaCss3Alt className="language-icons" /></li>
                    <p>CSS</p>
                </div>
                <div className="label-icon">
                <li><SiJavascript className="language-icons" /></li>
                    <p>JavaScript</p>
                </div>
                <div className="label-icon">
                <li><FaReact className="language-icons" /></li>
                    <p>ReactJs</p>
                </div>
                <div className="label-icon">
                <li><FaPython className="language-icons" /></li>
                    <p>Python</p>
                </div>
            </ul>
        </div>
    );
}

export default Language;