import mig from '../src/Images/mig.jpeg';
import React, { useState, useEffect } from 'react';

const AboutMe = () => {

    const [placeholder, setPlaceholder] = useState('');

  const
    string = 'Hi my name is Mohammed',
    index = React.useRef(0);

  useEffect(() => {
    function tick() {
      setPlaceholder(prev => prev + string[index.current]);
      index.current++;
    }
    if (index.current < string.length) {
      let addChar = setInterval(tick, 100);
      return () => clearInterval(addChar);
    }
  }, [placeholder]);


    return ( 
        <div className="about-me">
            <h1>{placeholder}</h1>
            <img src={mig} alt="ProfilePic"/>
            <p>My name is Mohammed Hassani, and i am 25 years old.
                I have studied and finished a multidmediadesign education, where I acquired both graffical and programming skills.
                On my journey as a multimedesign student i learned to work with HTML/CSS/SCSS.
                I am now studiying web development on CPH Business, where I am currently on my 3rd and final semester.
                On this education I have worked with programming languages as JavaScript/Python/C#. I have mostly had a focus on frameworks like Vue and React.
            </p>
            </div>
     );
}
 
export default AboutMe;