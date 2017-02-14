'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class TextInput extends React.Component {
   render() {
      return (

      <section id="long-answer-input">
        <div className="row">
          <div className="col-xs-12">
            <span className="panel-header">Explain a challenge in a recent project</span>
            <p>Tell us about a recent challenge you experienced on the job and why it was important to you.</p>
            <textarea defaultValue={"Your Response"} />
          </div>
        </div>
      </section>

      );
   }
}

