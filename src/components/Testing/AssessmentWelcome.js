'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter';
import Header from '../Header.jsx';

export default class AssessmentWelcome extends React.Component {
   render() {
      return (

      <div className="applicant-assessment welcome-container">

      <Header />

      <img className="img-responsive logo" src="img/logo2.png" />

      <div id="content" className="assessment-container drop-down">


        <div className="col-xs-12 col-md-8 col-md-offset-2">
          <div id="assess-intro" className="row panel white-panel padding-top-90">
            <div className="col-xs-12 col-md-3">
              <img className="connect-img img-responsive" src="img/logos/amazon.png" />
            </div>

            <div className="col-xs-12 col-md-9">
              <span className="panel-header">You have been sent an assessment</span>
              <p>Alex pascal from Amazon would like to assess your skills.</p>
              <p>To find out details about the assessment, and initiate the test, click [next]</p>
            </div>

            <div className="col-xs-12">
                <div id="button-div" className="bottom-nav-center col-xs-12 center">
                 <Link to="/">
                  <button className="progress-btn btn secondary">Close</button>
                </Link>
                <Link to="/assessment-info">
                  <button className="progress-btn btn primary">Next</button>
                </Link>
              </div>
            </div>

          </div>
        </div>

        </div>

      </div>

      );
   }
}

