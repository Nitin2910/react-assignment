import React, { Component } from 'react';

import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    userName : "Big B"
  }

  userNameChangedHandler = (event) =>{
    this.setState({userName : event.target.value});
  }

  render() {
    return (
      <div >
          <UserInput changed={this.userNameChangedHandler}
          currentName={this.state.userName}></UserInput>
          <UserOutput userName={this.state.userName}></UserOutput>
          <UserOutput userName={this.state.userName}></UserOutput>
          <UserOutput userName={this.state.userName}></UserOutput>
      </div>
    );
  }
}

export default App;
