'use strict';

import React from 'react';
import { Link } from 'react-router';
import Header from '../Header.jsx';

export default class CreatejdStep4Preview extends React.Component {
   render() {
      return (
         
      <section className="template-select">
        <Header title="Select a Template to start from" />

        <nav className="template-select-nav">
          <div className="row">
            <div className="col-xs-3 col-xs-offset-1 input-col">
              <span className="field-text">Template Name</span>
              <input type="text" name="Template name" />
            </div>

            <div className="col-xs-3 input-col">
              <span className="field-text">Position</span>
              <input type="text" name="Position" />
            </div>

            <div className="col-xs-2 input-col">
              <span className="field-text">Source</span>
              <select className="soflow">
                <option value="default">Select</option>
                <option value="tech">Shrpas Template</option>
                <option value="tech">Other</option>
              </select>
            </div>
            <div className="col-xs-2 input-col margin-top-35">
             <Link className="list-icon" to="/createjd-step4-list">
                  <span className="field-text">List view</span>
                  <span className="octicon octicon-list-ordered"></span>
              </Link>
            </div>
          </div>
        </nav>

           <div className="swiper-container2 template-slider">
          <div className="swiper-wrapper">
              <div className="swiper-slide">
                <h3>Basic Template</h3>
                <img className="img-responsive" src="/img/template-1.png" />
                <p className="description">Utility layout covers most needs</p>
                <p className="sub-line">SHRPAS TEMPLATE</p>
              </div>
              <div className="swiper-slide">
                <h3>Extended Template</h3>
                <img className="img-responsive" src="/img/template-2.png" />
                <p className="description">A long-form description with many components</p>
                <p className="sub-line">SHRPAS TEMPLATE</p>
              </div>
              <div className="swiper-slide">
                <h3>Video Template</h3>
                <img className="img-responsive" src="/img/template-2.png" />
                <p className="description">Media focused template</p>
                <p className="sub-line">SHRPAS TEMPLATE</p>
              </div>
              <div className="swiper-slide">
                <h3>Quick Template</h3>
                <img className="img-responsive" src="/img/template-2.png" />
                <p className="description">A brief job description to give overview</p>
                <p className="sub-line">SHRPAS TEMPLATE</p>
              </div>
              <div className="swiper-slide">
                <h3>Promo Template</h3>
                <img className="img-responsive" src="/img/template-1.png" />
                <p className="description">Show off the coolest parts of your role\/office\/company</p>
                <p className="sub-line">SHRPAS TEMPLATE</p>
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

              <Link to="/createjd-step5">
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


