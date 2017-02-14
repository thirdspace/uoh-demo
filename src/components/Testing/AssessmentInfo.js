'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter';
import Header from '../Header.jsx';

export default class AssessmentInfo extends React.Component {
   render() {
      return (

      <div className="applicant-assessment assessment-container drop-down">

      <Header />

        <div id="content6">
          <div className="row">
            <div className="col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">
              <div className="panel">
                <div className="panel-header">
                  <p className="quiz-length large-text">12 questions</p>
                  <span className="option-header">Product Manager Skill Assessment
                    <span className="option-subheader">Amazon Alexa Team</span>
                    <div className="additional-details">
                      <span className="fa fa-clock-o" /> 
                      <p>30 min</p>
                      <span className="fa fa-question-circle" />
                      <p>3 hints</p>
                      <br />
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
              <div id="button-div" className="bottom-nav-center col-xs-12 col-md-6 center">
               <Link to="/applicant-assessment">
                <button id="back-to-login" className="progress-btn btn secondary">Back</button>
              </Link>
                <Link to="/multiplechoice-question">
                  <button id="begin-assessment" className="progress-btn btn primary">Start</button>
                </Link>
              </div>
              <div className="bottom-nav-right col-xs-1 col-md-3">
              </div>
            </div>
          </footer>
        </div>

        <footer className="bottom-nav">
            <div className="row">
              <div className="bottom-nav-left col-xs-1 col-md-3">
              </div>
              <div id="button-div" className="bottom-nav-center col-xs-12 col-md-6 center">
               <Link to="/applicant-assessment">
                <button className="progress-btn btn secondary">Back</button>
              </Link>
                <Link to="/multiplechoice-question">
                  <button className="progress-btn btn primary">Start</button>
                </Link>
              </div>
              <div className="bottom-nav-right col-xs-1 col-md-3">
              </div>
            </div>
          </footer>

      </div>

      );
   }
}

