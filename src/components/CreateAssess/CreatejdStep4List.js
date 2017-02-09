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
              <Link id="template-preview-btn" className="list-icon" to="/preview-view">
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

                <tr className="template-option">
                  <td>Basic Template</td>
                  <td>Utility layout covers most needs.</td>
                  <td>Shrpas Template</td>
                </tr>
                <tr className="template-option">
                  <td>Extended Template</td>
                  <td>A long-form description with many components</td>
                  <td>Shrpas Template</td>
                </tr>
                <tr className="template-option">
                  <td>Video Template</td>
                  <td>Media focused template</td>
                  <td>Shrpas Template</td>
                </tr>
                <tr className="template-option">
                  <td>Quick Template</td>
                  <td>A brief job description to give overview</td>
                  <td>Shrpas Template</td>
                </tr>
                <tr className="template-option">
                  <td>Promo Template</td>
                  <td>Show off the coolest parts of your role/office/company</td>
                  <td>Shrpas Template</td>
                </tr>

              </table>
            </div>
          </div>
        </div>
      
      </section>


      );
   }
}


