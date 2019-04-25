import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Template from './components/Template';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/template" component={Template} />
    </Router>
  );
}

export default App;
