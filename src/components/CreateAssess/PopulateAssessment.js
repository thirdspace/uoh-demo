'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter.jsx';
import Subheader from '../Subheader.jsx';
import QuestionTableEmpty from './QuestionTableEmpty.js';
              
export default class PopulateAssessment extends React.Component {
   render() {
      return (
        <section>

          <Subheader subtitle="Select components to build your assessment" />

          <section id="create-assess-window">

            <QuestionTableEmpty />

          </section>
             

           <ProgressFooter back="/createjd" next="/populate-questions" />

        </section>
      );
   }
}


