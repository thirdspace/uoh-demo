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
            
          <div className="row question-row">
            <div className="col-xs-12 col-md-6 answer-col">
              <span><span className="number-circle">A.</span> Samples</span>
            </div>
            <div className="col-xs-12 col-md-6 answer-col">
              <span><span className="number-circle">B.</span> Sweepstakes</span>
            </div>
            <div className="col-xs-12 col-md-6 answer-col">
              <span><span className="number-circle">C.</span> Coupons</span>
            </div>
            <div className="col-xs-12 col-md-6 answer-col">
              <span><span className="number-circle">D.</span> Rebates</span>
            </div>
          </div>
  

        </section>

      );
   }
}

