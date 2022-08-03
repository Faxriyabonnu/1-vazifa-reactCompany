/* eslint-disable react/require-render-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';


class App extends Component {
  render() {
    return (
      <div>
        {/* Header section */}
        <Header/>
        {/* Products section */}
       <main class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
       <h1 class="display-4">Pricing</h1>
       <p class="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
       </main>
       <div className="container">
        <div className="card-deck mb-3 text-center">
  
          <div className="card mb-4 box-shadow">
            <Card/>
          </div>
  
          <div className="card mb-4 box-shadow">
            <Card/>
          </div>
  
          <div className="card mb-4 box-shadow">
            <Card/>
          </div>
  
          
  
        </div>
       <footer className="pt-4 my-md-5 pt-md-5 border-top">
          <div className="row">
            <div className="col-12 col-md">
              <img src={'https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg'}width="24" height="24" alt="" />
              <small className="d-block mb-3 text-muted">© 2017-2018</small>
            </div>
            <div className="col-6 col-md">
              <h5>Features</h5>
              <ul claclassNamess="list-unstyled text-small">
                <li><a className="text-muted" href="#">Cool stuff</a></li>
                <li><a className="text-muted" href="#">Random feature</a></li>
                <li><a className="text-muted" href="#">Team feature</a></li>
                <li><a className="text-muted" href="#">Stuff for developers</a></li>
                <li><a className="text-muted" href="#">Another one</a></li>
                <li><a className="text-muted" href="#">Last time</a></li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Resource</a></li>
                <li><a className="text-muted" href="#">Resource name</a></li>
                <li><a className="text-muted" href="#">Another resource</a></li>
                <li><a className="text-muted" href="#">Final resource</a></li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Team</a></li>
                <li><a className="text-muted" href="#">Locations</a></li>
                <li><a className="text-muted" href="#">Privacy</a></li>
                <li><a className="text-muted" href="#">Terms</a></li>
              </ul>
            </div>
          </div>
        </footer>
        </div>
      </div>
    );
  }
}


export default App;
