import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Template from './components/Template';
import Home from './components/Home';
import Filter from './components/Filter';
import Reduce from './components/Reduce';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/template" component={Template} />
      <Route exact path="/filter" component={Filter} />
      <Route exact path="/reduce" component={Reduce} />
    </Router>
  );
}

export default App;
