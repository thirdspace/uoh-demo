'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter.jsx';
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

        <ProgressFooter back="/createjd-step2" next="/createjd-step4" />

      </section>

      );
   }
}


