'use strict';

import React from 'react';
import { Link } from 'react-router';
import Subheader from '../Subheader.jsx';

export default class QuestionTableExample extends React.Component {
   render() {
      return (
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

                      <div className="col-sm-2 col-md-2 col-lg-1 question-col info-col">
                          <span className="question-number">1.</span>
                          <img className="img-responsive question-type" src="img/icons/multiple-choice-large.png" />
                      </div>

                      <div className="col-sm-9 col-md-8 col-lg-10 question-col">
                        <span className="question-text">
                          Which consumer promotion tool consists of certificates that give buyers a saving when they purchase specified products?
                        </span>
                      </div>

                      <div className="col-sm-1 col-md-2 col-lg-1 question-col toggle">
                        <button id="action-icon1" className="action-icon1 action-icon">
                          <img className="img-responsive expand-icon" src="/img/icons/icon-more-info.png" />
                        </button>
                        <button className="action-icon2 action-icon">
                          <img className="img-responsive minimize-icon" src="/img/icons/icon-less-info.png" />
                        </button>
                      </div>

                    </div>
                    <div className="row question-row answers">

                      <div className="col-xs-6 answer-col admin">
                        <span><img className="answer-icon" src="img/icons/cancel-icon-red.png" />Samples</span>
                      </div>
                      <div className="col-xs-6 answer-col admin">
                        <span><img className="answer-icon" src="img/icons/confirm-icon-green.png" /> Sweepstakes</span>
                      </div>
                      <div className="col-xs-6 answer-col admin">
                        <span><img className="answer-icon" src="img/icons/cancel-icon-red.png" /> Coupons</span>
                      </div>
                      <div className="col-xs-6 answer-col admin">
                        <span><img className="answer-icon" src="img/icons/cancel-icon-red.png" /> Rebates</span>
                      </div>
                    </div>
                  </td>
                </tr>
      




              </tbody></table>
          </div>

        </section>
        );
   }
}


