import React, { Component } from 'react';
import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Container from './components/Container';
import MainContainer from './components/MainContainer';
import SideNav from './components/SideNav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContainer>
          <Landing />
        </MainContainer>
        <Footer />
      </div>
    );
  }
}

export default App;
