import React, { Component } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section title='Geography' titleId='geography'/>
        <Footer />
      </div>
    );
  }
}

export default App;
