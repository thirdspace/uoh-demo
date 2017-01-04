'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter';
import Header from '../Header.jsx';

export default class CreatejdStep1 extends React.Component {
   render() {
      return (

            <section>
              <Header title="Create New JD360" />

              <div className="row creator-modal">
                <div className="selection-module col-sm-6 col-sm-offset-3 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                  <span className="selection-lead">How would you like to create this JD360?</span>

                  <div className="row">
                    <div className="col-sm-12 col-md-4 center">
                      <div className="selection-panel center">
                        <img className="img-responsive" src="/img/icons/jd-creator-icon1.png" />
                        <span className="selection-heading">
                            Use Existing or previous
                        </span>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-4 center">
                      <div className="selection-panel">
                          <img className="img-responsive" src="/img/icons/jd-creator-icon2.png" />
                          <span className="selection-heading">
                              Use Shrpas Template
                          </span>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-4 center">
                      <Link to="/createjd-step2">
                        <div className="selection-panel">
                          <img className="img-responsive" src="/img/icons/jd-creator-icon3.png" />
                          <span className="selection-heading">
                              Create custom
                          </span>
                        </div>
                      </Link>
                    </div>

                  </div> {/* /container row */}

                </div>
              </div> 
            </section> 

      );
   }
}

