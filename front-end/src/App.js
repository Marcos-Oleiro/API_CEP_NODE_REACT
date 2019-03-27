import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { users: [] }

  componentDidMount(){
    fetch('/users')
      .then (res => res.json())
        .then (users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.users.map(users =>
            <li key = {users.id}> <p> {users.nome} </p> <p> {users.cidade} </p>  </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
