import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faBars } from '@fortawesome/free-solid-svg-icons'


const Navlink = () => {


  function goToCases() {
    if (window.innerWidth > 800) {
      window.scrollTo({ top: 1420, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 1620, behavior: "smooth" });
    }
  }

  function goToLanguage() {
    if (window.innerWidth > 800) {
      window.scrollTo({ top: 490, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 680, behavior: "smooth" });
    }
  }

  function goToCv() {
    if (window.innerWidth > 800) {
      window.scrollTo({ top: 740, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 940, behavior: "smooth" });
    }
  }

  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  let clicked = true;
  let targList = document.getElementsByClassName("burger-p");

  function burgerScroll() {
    const burgerBar = document.getElementById("burgerbar");
    if (clicked === true) {
      document.getElementById("burgerbar").style.height = "120px";
      document.getElementById("burgerbar").style.transition = "height 1s";    
     
      if (targList) {
        for (var x = 0; x < targList.length; x++) {
          targList[x].style.visibility = "visible";
        }
      }
    clicked = false;
  } else if (clicked === false) {
    document.getElementById("burgerbar").style.transition = "height 1s";
    document.getElementById("burgerbar").style.height = "30px";
    if (targList) {
      for (var x = 0; x < targList.length; x++) {
        targList[x].style.visibility = "hidden";
        
      }
    }
    clicked = true;
  }


}


return (

  <div className="nav-links">
    <div className="topBtn" onClick={goToTop}><FontAwesomeIcon icon={faArrowUp} className="fontAwesomeIcon" /></div>
    <div className="burger-nav" id="burgerbar" >
      <div className="fontAwesomeIconBar"><FontAwesomeIcon icon={faBars} className="fontAwesomeIcon" onClick={burgerScroll} /></div>
      <ul>
        <li className="burger-p" name="li-tags">About me </li>
        <li className="burger-p" name="li-tags" onClick={goToCv}>CV</li>
        <li className="burger-p" name="li-tags" onClick={goToLanguage}>Programming languages</li>
        <li className="burger-p" name="li-tags" onClick={goToCases}>Cases</li>
      </ul>
    </div>
  </div>
);
}

export default Navlink;