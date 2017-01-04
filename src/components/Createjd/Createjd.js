'use strict';

import React from 'react';
import { Link } from 'react-router';
import ProgressFooter from '../ProgressFooter';

import CreatejdStep1 from './CreatejdStep1';
import CreatejdStep2 from './CreatejdStep2';
import CreatejdStep3 from './CreatejdStep3';
import CreatejdStep4List from './CreatejdStep4List';
import CreatejdStep4Preview from './CreatejdStep4Preview';


var Createjd360 = React.createClass({
  getInitialState() {
    return {
      step: 1
    }
  },
  prevStep: function() {
    this.setState({
      step : this.state.step - 1
    })
  },
  nextStep: function() {
    this.setState({
      step : this.state.step + 1
    })
  },
  render: function() {
    switch (this.state.step) {
      case 1:
        return <CreatejdStep1 />
      case 2:
        return <CreatejdStep2 />
      case 3:
        return <CreatejdStep3 />
      case 4:
        return <CreatejdStep4List />
        case 5:
        return <CreatejdStep4Preview  />
    }
  }
});

export default class Createjd extends React.Component {
   render() {
      return (
        <section>

          <Createjd360 />

          <footer id="bottom-nav" className="bottom-nav">
              <div className="row">
                  <div className="bottom-nav-left col-xs-1 col-md-3">
                    &nbsp;
                  </div>

                  <div id="button-div" className="bottom-nav-center col-xs-10 col-md-6 center">
                    <button id="backBtn" className="progress-btn btn secondary">Back</button>
                     <button id="nextBtn" className="progress-btn btn primary">Next</button>
                  </div>

                  <div className="bottom-nav-right col-xs-1 col-md-3">
                    &nbsp;
                  </div>
                </div>
            </footer>
        </section>
      );
   }
}

