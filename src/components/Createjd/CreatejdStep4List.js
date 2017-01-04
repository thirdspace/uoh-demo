'use strict';

import React from 'react';
import { Link } from 'react-router';
import Header from '../Header.jsx';

export default class CreatejdStep4List extends React.Component {
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
              <Link className="list-icon" to="/createjd-step4-preview">
                  <span className="field-text">List view</span>
                  <span className="octicon octicon-list-ordered"></span>
              </Link>
            </div>
          </div>
        </nav>

        <div className="row">
          <div className="col-xs-12">
            <div className="container">
              <table className="template-list">

                <tr>
                  <th>Template name</th>
                  <th>Description</th>
                  <th>Source</th>
                </tr>

                <tr>
                  <td>Basic Template</td>
                  <td>Utility layout covers most needs.</td>
                  <td>Shrpas Template</td>
                </tr>
                <tr>
                  <td>Extended Template</td>
                  <td>A long-form description with many components</td>
                  <td>Shrpas Template</td>
                </tr>
                <tr>
                  <td>Video Template</td>
                  <td>Media focused template</td>
                  <td>Shrpas Template</td>
                </tr>
                <tr>
                  <td>Quick Template</td>
                  <td>A brief job description to give overview</td>
                  <td>Shrpas Template</td>
                </tr>
                <tr>
                  <td>Promo Template</td>
                  <td>Show off the coolest parts of your role/office/company</td>
                  <td>Shrpas Template</td>
                </tr>

              </table>
            </div>
          </div>
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


