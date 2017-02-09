'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter.jsx';
import Subheader from '../Subheader.jsx';
import PopulateQuestions from './PopulateQuestions.js';
              
export default class ComponentSelect extends React.Component {
   render() {
      return (
        <section>

          <Subheader subtitle="Select components to build your assessment" />

          <section id="create-assess-window">


          <PopulateQuestions />

            <section>

              <div id="component-list" className="componentList">

                <div id="component1" className="row selected-component">
                  <div className="col-xs-4">
                    <img className="img-responsive" src="img/icons/multiple-choice-large.png" />
                  </div>
                  <div className="col-xs-8">
                  <span className="component-name">
                    Multiple Choice
                  </span>

                    <span className="close-icon">+</span>
                  </div>
                </div>

                <div id="component2" className="row selected-component">
                  <div className="col-xs-4">
                    <img className="img-responsive" src="img/icons/text-response-large.png" />
                  </div>
                  <div className="col-xs-8">
                  <span className="component-name">
                    Text Response
                  </span>

                    <span className="close-icon">+</span>
                  </div>
                </div>


                <div id="component3" className="row selected-component">
                  <div className="col-xs-4">
                    <img className="img-responsive" src="img/icons/video-response-large.png" />
                  </div>
                  <div className="col-xs-8">
                  <span className="component-name">
                    Video Response
                  </span>

                    <span className="close-icon">+</span>
                  </div>
                </div>
                

                <div id="component4" className="row selected-component">
                  <div className="col-xs-4">
                    <img className="img-responsive" src="img/icons/audio-response-large.png" />
                  </div>
                  <div className="col-xs-8">
                  <span className="component-name">
                    Audio Response
                  </span>

                    <span className="close-icon">+</span>
                  </div>
                </div>

                 <div id="component5" className="row selected-component">
                  <div className="col-xs-4">
                    <img className="img-responsive" src="img/icons/code-response-large.png" />
                  </div>
                  <div className="col-xs-8">
                  <span className="component-name">
                    Code Response
                  </span>

                    <span className="close-icon">+</span>
                  </div>
                </div>

                <PopulateQuestions />

                
                

              </div>
            </section>

          </section>
             

           <ProgressFooter back="/createjd" next="/populate-questions" />

        </section>
      );
   }
}


