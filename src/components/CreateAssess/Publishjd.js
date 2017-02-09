'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter';
import Header from '../Header.jsx';

export default class Publishjd extends React.Component {
   render() {
      return (

            <section className="relative">
              <Header title="Select sources to publish" />

               <div id="publish-dialogue">

                  <div className="row">
                    <div className="col-xs-12">
                        <span className="jd-position">Product Manager</span>
                        <span className="jd-maininfo large">Alexa Voice Services</span>
                        <span className="jd-maininfo small">Seattle, WA</span>
                        <span className="jd-maininfo light margin-top-10">Listing #AZ2085</span>
                      <hr />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-xs-3 publish-logo-container inactive">
                      <img className="publish-logo bw" src="img/logos/linkedin-grey.png" alt="LinkedIn" />
                      <img className="publish-logo color" src="img/logos/linkedin.png" alt="LinkedIn" />
                      <a href="#" className="view-link">
                        <span className="glyphicon glyphicon-circle-arrow-right"></span> View posting
                      </a>
                    </div>

                    <div className="col-xs-3 publish-logo-container inactive">
                      <img className="publish-logo bw" src="img/logos/dice-grey.png" alt="Dice" />
                      <img className="publish-logo color" src="img/logos/dice.png" alt="Dice" />
                      <a href="#" className="view-link">
                        <span className="glyphicon glyphicon-circle-arrow-right"></span> View posting
                      </a>

                    </div>

                    <div className="col-xs-3 publish-logo-container inactive">
                      <img className="publish-logo bw" src="img/logos/monster-grey.png" alt="Monster" />
                      <img className="publish-logo color" src="img/logos/monster.png" alt="Monster" />
                      <Link href="#" className="view-link">
                        <span className="glyphicon glyphicon-circle-arrow-right"></span> View posting
                      </Link>
                    </div>

                    <div className="col-xs-3 publish-logo-container inactive">
                      <img className="publish-logo bw" src="img/logos/ziprecruiter-grey.png" alt="Zip Recruiter" />
                      <img className="publish-logo color" src="img/logos/ziprecruiter.png" alt="Zip Recruiter" />
                      <a href="#" className="view-link">
                        <span className="glyphicon glyphicon-circle-arrow-right"></span> View posting
                      </a>
                    </div>
                  </div>

              </div>

              <footer className="bottom-nav bottom-nav">
                <div className="row">

                  <div className="bottom-nav-left col-xs-1 col-md-3">
                  </div>
                 
                  <div id="button-div" className="bottom-nav-center col-xs-10 col-md-6 center">
                     <Link to="/Createjd-step5">
                      <button className="progress-btn btn secondary">Back</button>
                    </Link>
                    <Link to="/newjd">
                      <button id="publish-button" className="progress-btn btn primary"></button>
                    </Link>
                  </div>

                  <div className="bottom-nav-right col-xs-1 col-md-3">
                  
                  </div>

                </div>
        </footer>
      </section> 

      );
   }
}

