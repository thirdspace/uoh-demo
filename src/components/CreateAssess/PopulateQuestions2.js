'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter.jsx';
import Subheader from '../Subheader.jsx';


export default class PopulateQuestions2 extends React.Component {
   render() {
      return (
        <section>

        <Subheader subtitle="Select components to build your assessment" />

          
        <section className="jd360-listing-container">

          <div className="jd360-listing question-table">
            <table className="table table-header activity-table empty">
              <tbody><tr className="listing-header">
                  <td>
                    <span className="jd-position">1 Questions</span>
                    <div className="btn-group">
                    <Link to="add-question">
                      <button><img src="/img/icons/icon-more-info.png" width="20" height="20" /> Add question</button>
                    </Link>
                      <button><i className="glyphicon-trash larger glyphicon" /></button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="row question-row">
                      <div className="col-xs-12 question-col">
                        Which consumer promotion tool consists of certificates that give buyers a saving when they purchase specified products?
                      </div>
                      <div className="col-xs-6 answer-col">
                        <span><img className="answer-icon" src="img/icons/cancel-icon.png" />Samples</span>
                      </div>
                      <div className="col-xs-6 answer-col">
                        <span><img className="answer-icon" src="img/icons/confirm-icon.png" /> Sweepstakes</span>
                      </div>
                      <div className="col-xs-6 answer-col">
                        <span><img className="answer-icon" src="img/icons/cancel-icon.png" /> Coupons</span>
                      </div>
                      <div className="col-xs-6 answer-col">
                        <span><img className="answer-icon" src="img/icons/cancel-icon.png" /> Rebates</span>
                      </div>
                    </div>
                  </td>
                </tr>
      




              </tbody></table>
          </div>

        </section>

   

      <footer id="question-footer" className="bottom-nav bottom-nav">
          <div className="row">

            <div className="bottom-nav-left col-xs-1 col-md-3">
            </div>
           
            <div id="button-div" className="bottom-nav-center col-xs-10 col-md-6 center">
               <Link to="/populate-questions">
                <button className="progress-btn btn secondary">Cancel</button>
              </Link>
              <Link to="/mypool">
                <button className="progress-btn btn primary">Publish</button>
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


