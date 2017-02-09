'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter.jsx';
import Header from '../Header.jsx';

export default class Review extends React.Component {
   render() {
      return (
        <section>

            <Header title="Review Assessment" />

            <div className="progress-header review-header">

              <input type="text" placeholder="Name your assessment" />

              <div className="right-box">

              <div className="time-notice">
                  <img className="small-icon" src="img/icons/time-icon2.png" />
                  30 minutes
                </div>

                <button>Preview</button>
              </div>

            </div>

              <section>

          <div className="jd360-listing question-table">
            <table className="table table-header activity-table empty">
              <tbody><tr className="listing-header">
                  <td>
                    <div className="component-tab selected">
                      <img className="answer-icon" src="img/icons/multiple-choice-large.png" />
                      15 Multiple choice
                    </div>
                    <div className="component-tab">
                      <img className="answer-icon" src="img/icons/text-response-large-white.png" />
                      3 Text response
                    </div>
                    <div className="component-tab">
                      <img className="answer-icon" src="img/icons/video-response-large-white.png" />
                      1 Video response
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
                <tr>
                  <td>
                    <div className="row question-row">
                      <div className="col-xs-12 question-col">
                        A corporate website is designed to do all the following except:
                      </div>
                      <div className="col-xs-6 answer-col">
                        <span><img className="answer-icon" src="img/icons/cancel-icon.png" /> Directly sell products</span>
                      </div>
                      <div className="col-xs-6 answer-col">
                        <span><img className="answer-icon" src="img/icons/confirm-icon.png" /> Build customer goodwill</span>
                      </div>
                      <div className="col-xs-6 answer-col">
                        <span><img className="answer-icon" src="img/icons/cancel-icon.png" /> Respond to communications initiated by the consumer</span>
                      </div>
                      <div className="col-xs-6 answer-col">
                        <span><img className="answer-icon" src="img/icons/cancel-icon.png" /> Indirectly sell company products</span>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="row question-row">
                      <div className="col-xs-12 question-col">
                        How does a company estimate sales?
                      </div>
                      <div className="col-xs-6 answer-col">
                        <span><img className="answer-icon" src="img/icons/cancel-icon.png" />It examines past sales history of similar products</span>
                      </div>
                      <div className="col-xs-6 answer-col">
                        <span><img className="answer-icon" src="img/icons/confirm-icon.png" /> It conducts market research to survey consumers</span>
                      </div>
                      <div className="col-xs-6 answer-col">
                        <span><img className="answer-icon" src="img/icons/cancel-icon.png" /> It discusses manufacturing capacity with the plant manager</span>
                      </div>
                      <div className="col-xs-6 answer-col">
                        <span><img className="answer-icon" src="img/icons/cancel-icon.png" /> A and B</span>
                      </div>
                    </div>
                  </td>
                </tr>
      




              </tbody></table>
          </div>

        </section>

   

           <ProgressFooter back="/populate-questions2" next="/mypool2" />

        </section>
      );
   }
}


