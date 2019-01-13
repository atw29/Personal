import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Alex Weeks</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a className="nav-link" href="#info">Info</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header>
        <Nav />
      </header>
    );
  }
}

class Section extends Component {
  render() {
    return (
      <div className="section">

      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section />
      </div>
    );
  }
}

export default App;
