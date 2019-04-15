import React, { Component } from "react";
import Navigation from "../Navigation";

class Main extends Component {
  state = {
    week:7
  }
  handleChangeWeek = (event) => {
    let change = 0;
    if (event.target.classList.contains('arrow__box--right') || event.target.classList.contains('arrow__right')){
      change = 1;
    }
    if (event.target.classList.contains('arrow__box--left') || event.target.classList.contains('arrow__left')){
      change = -1;
    }
    this.setState({
      week:((this.state.week===1 && change === -1)|| (this.state.week===12 && change === 1)) ? this.state.week: this.state.week + change 
    })

  }

  render() {
    return( 
    <div className="main">
      <Navigation week={this.state.week} changeWeek={this.handleChangeWeek}/>
    </div>
   );
  }
}

export default Main;
