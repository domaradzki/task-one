import React from "react";
import vege from "../../images/item1.png";
import protein from "../../images/item2.png";
import meat from "../../images/item3.png";
import fish from "../../images/item4.png";
import chicken from "../../images/item5.png";

const Navigation = ({week, changeWeek}) => {
  return (
    <div className="naviagtion__bar">
      <div className="naviagtion__bar--progress">
        <p>your 12 week progress</p>
        <ol>
          {Array.from({ length: 12 }).map((item, index) => (
            <li key={index+1} className={(index+1)<week ? 'done' : (index+1)=== week ? 'active' : 'todo'}>{index + 1}</li>
          ))}
        </ol>
      </div>
      <div className="naviagtion__bar--weeks">
        <button name='previous' className="arrow__box--left" onClick={changeWeek}>
          <span className="arrow__left" />
        </button>
        <h1>Week {week}</h1>
        <button name='next' className="arrow__box--right" onClick={changeWeek}>
          <span className="arrow__right" />
        </button>
      </div>
      <div className="naviagtion__bar--options">
        <p>select your protein options</p>
        <div className="options__images">
          <img src={vege} alt="vegetable"/>
          <img src={protein} alt="protein" />
          <img src={meat} alt="meat" />
          <img src={fish} alt="fish" />
          <img src={chicken} alt="chicken" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
