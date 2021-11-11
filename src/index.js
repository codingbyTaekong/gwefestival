import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Home from './components/Home';
import Vr from './components/Vr';
import Experience from './components/Experience';
import Footer from './components/Footer';


ReactDOM.render(

  <React.StrictMode>
    <Router>
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
        <Route path="/vr/:id">
          <Vr />
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
