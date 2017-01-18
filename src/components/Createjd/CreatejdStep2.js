'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter.jsx';
import Header from '../Header.jsx';

export default class CreatejdStep2 extends React.Component {
   render() {
      return (
            <section>
              <Header title="Create New JD360" />

             <div className="row creator-modal">
              <div className="listing-info-module col-xs-12 col-sm-6 col-sm-offset-3">
                <span className="selection-lead">Create a new job description</span>

                <div className="row">

                  <div className="col-xs-12 col-sm-6 center input-col">
                    <div className="row">
                      <div className="col-md-4">
                          <span className="field-label inline">
                              Position
                          </span>
                      </div>  
                      <div className="col-md-8">
                        <input type="text" name="Position" />
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-12 col-sm-6 center input-col">
                    <div className="row">
                      <div className="col-md-4">
                          <span className="field-label inline">
                              Location
                          </span>
                      </div>  
                      <div className="col-md-8">
                        <input type="text" name="Location" />
                      </div>
                    </div>
                  </div>

                </div>{/* /row */}

                <div className="row">

                    <div className="col-xs-12 col-sm-6 center input-col">
                      <div className="row">
                        <div className="col-md-4">
                            <span className="field-label inline">
                                Vertical
                            </span>
                        </div>  
                        <div className="col-md-8">
                          <select className="soflow">
                            <option value="default">Select</option>
                            <option value="tech">Marketing</option>
                            <option value="tech">Tech</option>
                            <option value="sales">Sales</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="business">Business</option>
                          </select>
                        </div>
                      </div>
                  </div>

                  <div className="col-xs-12 col-sm-6 center input-col">
                      <div className="row">
                        <div className="col-md-4">
                            <span className="field-label inline">
                                Level
                            </span>
                        </div>  
                        <div className="col-md-8">
                          <select className="soflow">
                            <option value="default">Select</option>
                            <option value="default">Entry</option>
                            <option value="tech">Mid-level</option>
                            <option value="tech">Expert</option>
                          </select>
                        </div>
                      </div>
                  </div>

                </div> {/* /row */}

                <div className="row">
                  <div className="col-xs-6 right-align padding-20">
                    <input type="checkbox" />
                    <span className="field-label small"> Quick start</span>
                  </div>

                  <div className="col-xs-6 left-align padding-20">
                    <input type="checkbox" checked="checked"/>
                    <span className="field-label small"> Standard</span>
                  </div>
                </div>{/* /row */}

            </div>

          </div>

           <ProgressFooter next="/createjd-step3" />

        </section>
      );
   }
}


