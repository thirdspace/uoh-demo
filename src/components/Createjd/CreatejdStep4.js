'use strict';

import React from 'react';
import { Link } from 'react-router';
import Header from '../Header.jsx';

export default class CreatejdStep4 extends React.Component {
   render() {
      return (

        <section>
       
           <div className="app-content">{this.props.children} </div>
           
           <footer id="bottom-nav" className="bottom-nav">
            <div className="row">
                <div className="bottom-nav-left col-xs-1 col-md-3">
                  &nbsp;
                </div>

                <div id="button-div" className="bottom-nav-center col-xs-10 col-md-6 center">
                
                <Link to="/createjd-step3">
                  <button id="backBtn" className="progress-btn btn secondary">Back</button>
                </Link>

                <Link id="template-next-link" to="/createjd-step5" className="disabled">
                    <button className="progress-btn btn primary">Next</button>
                  </Link>
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


