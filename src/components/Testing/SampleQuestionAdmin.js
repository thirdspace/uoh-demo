'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class SampleQuestion extends React.Component {
   render() {
      return (

        <section>

          <div className="panel-header">
            <span className="option-header">
            What can be done to compute the hash key value of a string?
            </span>
         </div>

          <hr />
            
          <div className="row question-row answers">
            <div className="col-xs-12 col-md-6 answer-col">
              <span><img className="answer-icon" src="img/icons/cancel-icon-red.png" />Samples</span>
            </div>
            <div className="col-xs-12 col-md-6 answer-col">
              <span><img className="answer-icon" src="img/icons/confirm-icon-green.png" /> Sweepstakes</span>
            </div>
            <div className="col-xs-12 col-md-6 answer-col">
              <span><img className="answer-icon" src="img/icons/cancel-icon-red.png" /> Coupons</span>
            </div>
            <div className="col-xs-12 col-md-6 answer-col">
              <span><img className="answer-icon" src="img/icons/cancel-icon-red.png" /> Rebates</span>
            </div>
          </div>
  

        </section>

      );
   }
}

