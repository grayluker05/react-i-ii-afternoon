import React, {Component} from 'react';
import './App.css';
import Head from './Components/Head';
import MainContent from './Components/MainContent';

export default class App extends Component{
  render(){
    return(
      <div>
        <MainContent />
        <Head />
      </div>
    );
  }
}

