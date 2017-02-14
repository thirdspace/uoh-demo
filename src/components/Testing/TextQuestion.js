'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter';
import Header from '../Header.jsx';
import TextInput from './components/TextInput';

export default class TextQuestion extends React.Component {
   render() {
      return (

       <div className="applicant-assessment assessment-container drop-down">

        <Header />

            <div className="row response-row text-response">
              <div className="col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2">

                <div className="panel">
                
                  <div className="panel-body">

                  <TextInput />

                  </div>
                </div>
              </div>

          </div>

          <ProgressFooter back="/video-question" next="/audio-question" />

        </div>


     
      );
   }
}

