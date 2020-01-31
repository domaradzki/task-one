import React, { Component } from "react";
import Navigation from "../Navigation";
import weight_color from "../../images/weight_item_color.png";
import weight_grey from "../../images/weight_item_grey.png";
import weight_ok from "../../images/ok_tick_item.png";
import smile from "../../images/smile_item.png";
import printer from "../../images/printer_item.png";

class Main extends Component {
  state = {
    week:4,
    smartDay:23,
    activeDay:23,
    data:[]
  }

  getDataPromise = () =>
  fetch(process.env.PUBLIC_URL + '/Data/data.json').then(response =>
    response.json()
  );

  componentDidMount(){
    this.getDataPromise()
    .then(data => this.setState({
      data
    }))
  }
  handleChangeDone = (event) =>{
    const cell = event.target;
    cell.classList.add('shedule__cell--done')
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
    ,
      smartDay:((this.state.smartDay===1 && change === -1)|| (this.state.smartDay===84 && change === 1)) ? this.state.smartDay: (this.state.smartDay + (change*7))<1 || (this.state.smartDay + (change*7))> 84 ? this.state.smartDay :(this.state.smartDay + (change*7))
    })
  }

  handleChangeDay = (event) => {
    let change = 0;
    if (event.target.classList.contains('arrow__box--right') || event.target.classList.contains('arrow__right')){
      change = 1;
    }
    if (event.target.classList.contains('arrow__box--left') || event.target.classList.contains('arrow__left')){
      change = -1;
    }
    if (change === 1 && (this.state.smartDay/this.state.week)===7){
      this.setState({
        week:this.state.week + change
      })
    }
    if (change === -1 && ((this.state.smartDay+change)/(this.state.week+change))===7){
      this.setState({
        week:this.state.week + change
      })
    }
    this.setState({
      smartDay:((this.state.smartDay===1 && change === -1)|| (this.state.smartDay===84 && change === 1)) ? this.state.smartDay: this.state.smartDay + change 
    })
  }

  render() {
    const {week, smartDay, data, activeDay} = this.state;
    const actualWeekData = data.filter((item)=>item.week===week);
    const shake = 'Bod•ē Shake';
    return( 
    <div className="main">
      <Navigation week={this.state.week} day={this.state.smartDay} changeDay={this.handleChangeDay} changeWeek={this.handleChangeWeek}/>
      <div className="schedule">
        <div className="schedule__column--header">
        <div className="shedule__header shedule__header--top"></div>
        <div className="shedule__header"><span>6:00</span>&nbsp; AM</div>
        <div className="shedule__header"><span>9:00</span>&nbsp; AM</div>
        <div className="shedule__header"><span>12:00</span>&nbsp; PM</div>
        <div className="shedule__header"><span>3:00</span>&nbsp; PM</div>
        <div className="shedule__header"><span>6:00</span>&nbsp; PM</div>
        <div className="shedule__header--bottom"></div>
        <div className="shedule__header--bottom">Workout</div>
        </div>
        {actualWeekData.map((day)=> day.day%7!==0 ? (
          <div key={day.day} className={(activeDay===day.day ? "schedule__column shedule__column--active" : "schedule__column")+((smartDay===day.day || smartDay===day.day+1) ? "" : " schedule__column--mobile")}>
        <div className="shedule__cell shedule__header--top">day {day.day}</div>
        <div onClick={this.handleChangeDone} className={(day.meal1===shake)? "shedule__cell schedule__image" :"shedule__cell"}>{day.meal1}</div>
        <div onClick={this.handleChangeDone} className={(day.meal2===shake)? "shedule__cell schedule__image" :"shedule__cell"}>{day.meal2}</div>
        <div onClick={this.handleChangeDone} className={(day.meal3===shake)? "shedule__cell schedule__image" :"shedule__cell"}>{day.meal3}</div>
        <div onClick={this.handleChangeDone} className={(day.meal4===shake)? "shedule__cell schedule__image" :"shedule__cell"}>{day.meal4}</div>
        <div onClick={this.handleChangeDone} className={(day.meal5===shake)? "shedule__cell schedule__image" :"shedule__cell"}>{day.meal5}</div>
        <div className="shedule__cell--bottom">{day.carb}-CARB</div>
        <div className="shedule__cell--bottom">{day.workout ? <><img src={weight_color} alt="weight" /><img src={weight_ok} alt="ok" /></> : <img src={weight_grey} alt="weight" />}</div>
        </div>
        ): (<div key={day.day} className={smartDay!==day.day ? "schedule__column schedule__column--mobile" : "schedule__column"}>
        <div className="shedule__cell shedule__header--top">day {day.day}</div>
        <div className="shedule__fivecell"><div className="image"><img src={smile} alt="smile" /></div><div className="paragraphText"><p>guilt-free day</p></div></div>
        <div className="shedule__fivecell--bottom"><img src={printer} alt="printer" /><p>Print</p></div></div>))}
        
      </div>
    </div>
   );
  }
}

export default Main;
