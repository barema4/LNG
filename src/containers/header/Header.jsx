import React from "react";
import "./header.css";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section_padding" id="home">
      <h1 className="header">Welcome Too Native Land Grab</h1>
      <div className="header-content">
        <div className="lng">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </div>
        <div className="header-image">
          <img src={ai} alt="AI" width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Header;
