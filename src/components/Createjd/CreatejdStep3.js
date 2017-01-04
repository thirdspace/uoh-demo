'use strict';

import React from 'react';
import { Link } from 'react-router';
import Header from '../Header.jsx';

export default class CreatejdStep3 extends React.Component {
   render() {
      return (
      <section>
        <Header title="Create New JD360" />

        <div className="swiper-container small-slider">
          <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div id="chart-container1">FusionCharts will render here</div>
              </div>
              <div className="swiper-slide">
                <div id="chart-container2">FusionCharts will render here</div>
              </div>
              <div className="swiper-slide">
                <div id="chart-container3">FusionCharts will render here</div>
              </div>
          </div>

          <div className="swiper-pagination"></div>
        </div>

          <footer id="bottom-nav" className="bottom-nav">
              <div className="row">
                  <div className="bottom-nav-left col-xs-1 col-md-3">
                    &nbsp;
                  </div>

                  <div id="button-div" className="bottom-nav-center col-xs-10 col-md-6 center">
                    <button id="backBtn" className="progress-btn btn secondary">Back</button>

                    <Link to="/createjd-step4-list">
                     <button id="nextBtn" className="progress-btn btn primary">Next</button>
                    </Link>
                  </div>

                  <div className="bottom-nav-right col-xs-1 col-md-3">
                    &nbsp;
                  </div>
                </div>
            </footer>
      </section>

      );
   }
}


