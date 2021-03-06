import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/About';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlesPage from './pages/Article';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Switch>
            <Route path = "/" component = {HomePage} exact/>
            <Route path = "/about" component = {AboutPage} />
            <Route path = "/articles-list" component = {ArticlesListPage} />
            <Route path = "/article/:name" component = {ArticlesPage} />
            <Route component = {NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// Switch

export default App;