import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ScrollToTop from "./ScrollTop";


ReactDOM.render(

  <React.StrictMode>
    <Router>
      <ScrollToTop/>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
          <Footer />
        </Route>
        <Route path="/experience">
          <Experience />
          <Footer />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
