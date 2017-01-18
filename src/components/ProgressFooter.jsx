import React from 'react';
import { Link } from 'react-router';


var ProgressFooter = React.createClass({
   render() {
      return (
        <footer className="bottom-nav bottom-nav">
              <div className="row">

                <div className="bottom-nav-left col-xs-1 col-md-3">
                </div>
               
                <div id="button-div" className="bottom-nav-center col-xs-10 col-md-6 center">
                   <Link to={this.props.next}>
                    <button className="progress-btn btn secondary">Back</button>
                  </Link>
                  <Link to={this.props.next}>
                    <button className="progress-btn btn primary">Next</button>
                  </Link>
                </div>

                <div className="bottom-nav-right col-xs-1 col-md-3">
                
                </div>

              </div>
            </footer>

      );
   }
});

module.exports = ProgressFooter;
