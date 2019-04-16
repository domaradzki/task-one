import React, {Component} from 'react';

class Menu extends  Component {
  state = {
    active:'dashboard'
  }
  handleChangeMenu = event => {
    this.setState({
      active:event.target.name
    })
  }
  render(){
    return(<nav className="nav">
            <ul>
              <li>
                <a  className={this.state.active==='dashboard' ? 'active' : ''} onClick={this.handleChangeMenu} name="dashboard" href="#">dashboard</a>
              </li>
              <li>
                <a  className={this.state.active==='recipes'  ? 'active' : ''} onClick={this.handleChangeMenu} name="recipes" href="#">recipes</a>
              </li>
              <li>
                <a  className={this.state.active==='challenge'  ? 'active' : ''} onClick={this.handleChangeMenu} name="challenge" href="#">challenge</a>
              </li>
            </ul>
          </nav>)
          }
}

export default Menu;