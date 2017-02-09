'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter';
import Header from '../Header.jsx';

export default class AssessStep1 extends React.Component {
   render() {
      return (

      <div className="applicant-assessment">

      <Header />

      <img className="img-responsive logo" src="img/logo2.png" />

      <div id="content" className="assessment-welcome drop-down">

        <div className="row dialogue">
          <div className="col-xs-8 col-xs-offset-2">
            <div id="assess-intro" className="row panel white-panel padding-top-90">
              <div className="col-xs-3">
                <img className="connect-img img-responsive" src="img/logos/amazon.png" style={{marginTop: 60}} />
              </div>
              <div className="col-xs-9">
                <span className="panel-header">You have been sent an assessment</span>
                <p>Alex pascal from Amazon would like to assess your skills.</p>
                <p>To find out details about the assessment, and initiate the test, click [next]</p>
              </div>
              <div id="button-div" className="bottom-nav-center col-xs-12 center">
               <Link to="/login1">
                <button className="progress-btn btn secondary">Close</button>
              </Link>
              <Link to="/assess-step2">
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

