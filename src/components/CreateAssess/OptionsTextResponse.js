'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter.jsx';
import Subheader from '../Subheader.jsx';
import OptionsHints from './OptionsHints.js';

export default class OptionsTextResponse extends React.Component {
   render() {
      return (
        <section>

          <section className="options-component text-response">
             <div className="progress-header">

              <h4>Details</h4>

              <div className="input-group">
                <p className="input-text">Hints</p>
                 <select className="hints-toggle2 soflow">
                   <option value="Off" selected="selected">Off</option>
                   <option value="On">On</option>
                 </select>
              </div>

               <div className="input-group">
                <p className="input-text">Max characters</p>
                <input type="text" placeholder="300" />
              </div>

            </div>
            
            <div id="question-table" className="row">
              <div className="col-xs-12">
                <textarea type="text" className="question-box long" placeholder="Question" />
              </div> 
            </div>

          </section>


           <section className="options-hints options-hints2">
            <OptionsHints />
          </section>

        </section>
      );
   }
}


