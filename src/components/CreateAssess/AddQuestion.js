'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter.jsx';
import Subheader from '../Subheader.jsx';

import OptionsMultipleChoice from './OptionsMultipleChoice.js';
import OptionsTextResponse from './OptionsTextResponse.js';
import OptionsVideoResponse from './OptionsVideoResponse.js';
import OptionsAudioResponse from './OptionsAudioResponse.js';
import OptionsCodeResponse from './OptionsCodeResponse.js';

import OptionsDefault from './OptionsDefault.js';
import OptionsHints from './OptionsHints.js';



export default class AddQuestion extends React.Component {
   render() {
      return (
        <section>

            <div className="componentBar">
              <div id="button1" className="componentItem">
                <img src="img/icons/multiple-choice-large.png" />
                Multiple choice
              </div>
              <div id="button2" className="componentItem">
                <img src="img/icons/text-response-large.png" />
                Text Response
              </div>
              <div id="button3" className="componentItem">
                <img src="img/icons/video-response-large.png" />
                Video Response
              </div>
              <div id="button4" className="componentItem">
                <img src="img/icons/audio-response-large.png" />
                Audio Response
              </div>
              <div id="button5" className="componentItem">
                <img src="img/icons/code-response-large.png" />
                Code Answer
              </div>
            </div>

            <section className="options-default">
              <OptionsDefault />
            </section>

            <section className="options-multipleChoice">
              <OptionsMultipleChoice />
            </section>

            <section className="options-textResponse">
              <OptionsTextResponse />
            </section>

            

           <footer id="question-footer" className="bottom-nav bottom-nav">
          <div className="row">

            <div className="bottom-nav-left col-xs-1 col-md-3">
            </div>
           
            <div id="button-div" className="bottom-nav-center col-xs-10 col-md-6 center">
               <Link to="/populate-assessment">
                <button className="progress-btn btn secondary">Cancel</button>
              </Link>
              <Link to="/populate-assessment2">
                <button className="progress-btn btn primary">Add</button>
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


