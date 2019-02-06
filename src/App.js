import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import FooterComponent from './components/Footer/footer';
import Header from './components/Header/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
        <FooterComponent />
      </div>
    );
  }
}

export default App;
