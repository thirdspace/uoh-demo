'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter.jsx';
import Subheader from '../Subheader.jsx';


export default class OptionsTextResponse extends React.Component {
   render() {
      return (
        <section>

          <section className="options-component text-response">
             <div className="progress-header">

              <h4>Details</h4>

              <div className="input-group">
                <p className="input-text">Hints</p>
                 <select id="hints-toggle" className="soflow">
                   <option value="Off" selected="selected">Off</option>
                   <option value="On">On</option>
                 </select>
              </div>

               <div className="input-group">
                <p className="input-text">Answers</p>
                 <select className="soflow">
                   <option value="2">2</option>
                   <option value="3">3</option>
                  <option value="4" selected="selected">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                 </select>
              </div>

              <div className="input-group">
                <p className="input-text">Correct</p>
                 <select className="soflow" onchange="getval(this);">
                   <option value="default" selected="selected">Select</option>
                   <option value="A">A</option>
                   <option value="B">B</option>
                   <option value="C">C</option>
                   <option value="D">D</option>
                   <option value="D">Multiple</option>
                 </select>
              </div>

            </div>
            
            <div id="question-table" className="row">
              <div className="col-xs-12">
                <textarea type="text" className="question-box" placeholder="Question" />
              </div> 
              <div className="col-xs-6 left-input">
                <input type="text" placeholder="Answer A" />
              </div> 
              <div className="col-xs-6 right-input">
                <input type="text" placeholder="Answer B" />
              </div>
              <div className="col-xs-6 left-input">
                <input type="text" placeholder="Answer C" />
              </div> 
              <div className="col-xs-6 right-input">
                <input type="text" placeholder="Answer D" />
              </div> 

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
              <Link to="/populate-questions2">
                <button className="progress-btn btn primary">Okay</button>
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


