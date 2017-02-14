'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter.jsx';
import Subheader from '../Subheader.jsx';
import QuestionTableExample from './QuestionTableExample.js';
              
export default class PopulateAssessment2 extends React.Component {
   render() {
      return (
        <section>

          <Subheader subtitle="Select components to build your assessment" />

          <section id="create-assess-window">

            <QuestionTableExample />

          </section>
             

           <ProgressFooter back="/mypool" next="/assessment-publish" />

        </section>
      );
   }
}


