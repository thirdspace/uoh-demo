'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter';
import Header from '../Header.jsx';

export default class AssessStep4 extends React.Component {
   render() {
      return (

     <section className="response-window">

          <Header />

          <div id="long-answer-input" class="row dialogue">
            <div class="col-xs-9 col-xs-offset-1">
              <div class="row panel white-panel padding-top-40">

                <div class="col-xs-12">
                  <span class="panel-header">Explain a challenge in a recent project</span>
                  <p>Tell us about a recent challenge you experienced on the job and why it was important to you.</p>
                  <textarea></textarea>
                </div>

              </div>
            </div>
          </div>

          <ProgressFooter back="/assess-step3" next="/assess-step4" />


     </section>

      );
   }
}

