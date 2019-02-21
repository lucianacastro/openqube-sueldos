import React, { Component } from 'react';
import Header from './components/Header';
import MainTitle from './components/MainTitle';
import Landing from './components/Landing';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainTitle />
        <MainContainer>
          <Landing />
        </MainContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
