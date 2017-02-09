'use strict';

import React from 'react';

export default class Subheader extends React.Component {
   render() {
      return (

        <header className="subheader navbar-fixed-top">
            <h4 className="subtitle">{this.props.subtitle}</h4>

            <div className="action-box">
              <button> 
                <img className="small-icon" src="img/icons/time-icon.png" />
                Set time
              </button>

              <button>
                <img className="small-icon" src="img/icons/expiration-icon.png" />
                Set Expiration
              </button>
            </div>

        </header>

      );
   }
}

module.exports = Subheader;
