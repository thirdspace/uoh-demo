'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter';
import Header from '../Header.jsx';

export default class AssessStep2 extends React.Component {
   render() {
      return (

      <div className="applicant-assessment">

      <Header />

        <div id="content6">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
              <div className="panel">
                <div className="panel-header">
                  <span className="option-header">Product Manager Skill Assessment
                    <span className="option-subheader">Amazon Alexa Team</span>
                    <div className="additional-details">
                      <span className="fa fa-clock-o" /> 
                      <p>30 min</p>
                      <span className="fa fa-question-circle" />
                      <p>3 hints</p>
                      <br />
                      <p className="large-text">12 questions</p>
                    </div>
                  </span></div>{/* /panel-header */}
                <hr />
                <div className="panel-body">
                  <ul>
                    <li>All questions are of Multiple Choice question type.</li>
                    <li>Among the options A, B, C, D for each question, only ONE of them is correct.</li>
                    <li>Each question carries 2 marks.</li>
                    <li>Choose the option which you think BEST answers the question.</li>
                    <li>Figures are NOT drawn to scale</li>
                    <li>Do not refresh page while attempting contest.</li>
                  </ul>
                </div>{/* /panel-body */}
              </div>
            </div>
          </div>
          <footer id="bottom-nav" className="sub-bottom-nav bottom-nav">
            <div className="row">
              <div className="bottom-nav-left col-xs-1 col-md-3">
              </div>
              <div id="button-div" className="bottom-nav-center col-xs-10 col-md-6 center">
                <button id="back-to-login" className="progress-btn btn secondary">Back</button>
                <Link to="/assess-step3">
                  <button id="begin-assessment" className="progress-btn btn primary">Begin Assessment</button>
                </Link>
              </div>
              <div className="bottom-nav-right col-xs-1 col-md-3">
              </div>
            </div>
          </footer>
        </div>

      </div>

      );
   }
}

