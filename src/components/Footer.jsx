import React from 'react';

var Footer = React.createClass({
   render() {
      return (
        <footer id="content-footer">
            <div className="row">
                <div className="col-md-6">
                    <span className="footer-legal">Copyright © 2016. All rights reserved. <a href="#">Terms of use</a> | <a href="#">Privacy Policy</a></span>
                </div>
                <div className="col-md-6 text-right">
                    <span className="footer-meta"></span>
                    <a href="#content" className="footer-return-top">
                        <span className="fa fa-angle-up"></span>
                    </a>
                </div>
            </div>
        </footer>

      );
   }
});

module.exports = Footer;
