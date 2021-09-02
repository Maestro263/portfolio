import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faBars } from "@fortawesome/free-solid-svg-icons";
import { useToggle } from "react-use";
import { useState } from "react";

const Navlink = () => {
  function goToCases() {
    if (window.innerWidth > 800) {
      window.scrollTo({ top: 1500, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 1640, behavior: "smooth" });
    }
  }

  function goToLanguage() {
    if (window.innerWidth > 800) {
      window.scrollTo({ top: 590, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 720, behavior: "smooth" });
    }
  }

  function goToCv() {
    if (window.innerWidth > 800) {
      window.scrollTo({ top: 970, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 990, behavior: "smooth" });
    }
  }

  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function myFunction() {
    let element = document.getElementById("burgerbar");
    element.classList.toggle("burger-nav-visible");
  }

  return (
    <div className="nav-links">
      <div className="topBtn" onClick={goToTop}>
        <FontAwesomeIcon icon={faArrowUp} className="fontAwesomeIcon" />
      </div>
      <div className="burger-nav" id="burgerbar" onClick={myFunction}>
        <div className="fontAwesomeIconBar" id="burgerIcon">
          <FontAwesomeIcon icon={faBars} className="fontAwesomeIcon" />
        </div>
        <ul>
          <li className="burger-p" name="li-tags">
            About me{" "}
          </li>
          <li className="burger-p" name="li-tags" onClick={goToCv}>
            CV
          </li>
          <li className="burger-p" name="li-tags" onClick={goToLanguage}>
            Programming languages
          </li>
          <li className="burger-p" name="li-tags" onClick={goToCases}>
            Cases
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navlink;
