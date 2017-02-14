'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooterQuiz from '../ProgressFooter';
import Header from '../Header.jsx';
import SampleQuestion from './components/SampleQuestion.js';


export default class MultipleChoiceQuestion extends React.Component {
   render() {
      return (

    <div className="applicant-assessment assessment-container multiple-choice-container drop-down">

      <Header />

          <div className="row response-row multiple-choice">
            <div className="col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">

              <button className="hint-button">
                <span className="fa fa-question-circle" /> 
                <p>Hint [3/3]</p>
              </button>
              
              <div className="panel">
              
                <div className="panel-body">

                  <SampleQuestion />

                </div>
              </div>
            </div>

        </div>

        <ProgressFooterQuiz back="/assessment-info" next="/video-question" />

      </div>

      );
   }
}

