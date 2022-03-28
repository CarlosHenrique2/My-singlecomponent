import React from "react";

import Card__top from "../Components/Card_Top/Card";
import Card__right from "../Components/Card_Right/Card";
import Card__left from "../Components/Card_Left/Card";

import "./Style.css";

const Container = () => {
  return (
    <div className="Container">
      <div className="Container_Card-top">
        <Card__top />
      </div>
      <div className="Container-divider">
        <div className="Container_Card-right">
          <Card__right />
        </div>
        <div className="Container_Card-left">
          <Card__left />
        </div>
      </div>
    </div>
  );
};

export default Container;
