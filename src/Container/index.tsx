import React from "react";

import Card_top from "../Components/Card_Top/Card";
import Card_right from "../Components/Card_Right/Card";
import Card_left from "../Components/Card_Left/Card";

import "./Style.css";

const Container = () => {
  return (
    <div className="Container">
      <div className="Container_Card-top">
        <Card_top />
      </div>
      <div className="Container-divider">
        <div className="Container_Card-right">
          <Card_right />
        </div>
        <div className="Container_Card-left">
          <Card_left />
        </div>
      </div>
    </div>
  );
};

export default Container;
