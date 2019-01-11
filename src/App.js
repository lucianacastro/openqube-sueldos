import React, { Component } from 'react';
import Header from './components/Header';
import SectionTitle from './components/SectionTitle';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SectionTitle title='Geography' id='geography'/>
        <Footer />
      </div>
    );
  }
}

export default App;
