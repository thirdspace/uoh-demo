import React from 'react';
import { Link } from 'react-router';

var Login = React.createClass({
   render() {
      return (

        <section id="content" className="login-bg animated">

            <div className="login-box">
                <img className="main-logo" src="img/logos/logo-black.png" alt="" />

                <span className="login-text1 login-text">Select a login</span>
                <span className="login-text2 login-text">Input your password</span>

                <div className="row">

                    <div className="col-sm-4 col1">
                        <Link className="admin-login" to="/new-admin">  
                            <div id="user-tile1" className="user-tile user-tile1">
                                <img src="img/avatars/alex-hex-500x500.png" className="avatar-hex img-responsive" alt="" />
                                <span className="login-name">Alex Pascal</span>
                                <div className="password-box">
                                    <label className="field prepend-icon">
                                        <input type="password" name="password" id="password" className="gui-input"
                                               placeholder="Password" />
                                        <span className="field-icon">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                        <a href="mypool.html"><button className="secondary-grey">Login</button></a>
                                    </label>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="col-sm-4 col2">
                     <Link className="applicant-login" to="/applicant-assess">  
                        <div id="user-tile2" className="user-tile user-tile2">
                            <img src="/img/avatars/lin-hex-500x500.png" className="avatar-hex img-responsive" alt="" />
                            <span className="login-name">Lin Park</span>
                             <div className="password-box">
                                <label className="field prepend-icon">
                                    <input type="password" name="password" id="password" className="gui-input"
                                           placeholder="Password" />
                                    <span className="field-icon">
                                        <i className="fa fa-lock"></i>
                                    </span>
                                    <a href="applicant-qualify.html"><button className="secondary-grey">Login</button></a>
                                </label>
                            </div>
                        </div>
                      </Link>
                    </div>

                    <div className="col-sm-4 col3">
                        <div id="user-tile3" className="user-tile user-tile3">
                            <img src="img/avatars/user-hex-500x500.png" className="avatar-hex img-responsive" alt="" />
                            <span className="login-name">New Login</span>
                             <div className="password-box">
                                <input type="text" name="username" id="username" className="gui-input"
                                           placeholder="Username" />
                                <label className="field prepend-icon">
                                    <input type="password" name="password" id="password" className="gui-input"
                                           placeholder="Password" />
                                    <span className="field-icon">
                                        <i className="fa fa-lock"></i>
                                    </span>
                                    <button className="secondary-grey">Create Account</button>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>

      );
   }
});

module.exports = Login;
