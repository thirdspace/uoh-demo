'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter.jsx';
import Subheader from '../Subheader.jsx';


export default class OptionsMultipleChoice extends React.Component {
   render() {
      return (
        <section>

          <section>

             <div className="progress-header">

            <div className="hr"></div>

              <h4>Hints</h4>

               <div className="input-group">
                <p className="input-text">Hint #</p>
                 <select className="soflow">
                   <option value="1" selected="selected">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                 </select>
              </div>

              <div className="input-group">
                <p className="input-text">Type</p>
                 <select className="soflow">
                   <option value="Text" selected="selected">Request</option>
                   <option value="Audio">Timed</option>
                 </select>
              </div>

            </div>
            
            <div id="hint-table" className="row">
              <div className="col-xs-12">
                <textarea type="text" className="question-box" placeholder="Hint text" />
              </div> 
            </div>


          </section>



        </section>
      );
   }
}


