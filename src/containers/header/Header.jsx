import React from "react";
import "./header.css";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section_padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Welcome to NATIVE LANDGRAB</h1>
        <p>
          Your one-stop resource for oneAfrican’s view of a global problem.The
          onset of what we now call the modern world begins with the act of
          land-grabbing
        </p>
        <p>It is also the beginning of racism.</p>
        <p>And of the demotion of women</p>
        <p>And of the demotion of nature</p>
        <p>And of the reduction of knowledge to a mere
        organisational tool</p>
        <p>And of the hijacking of spiritual power</p>
        {/* <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div> */}
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
