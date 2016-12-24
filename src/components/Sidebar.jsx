import React from 'react';

var Sidebar = React.createClass({
   render() {
      return (
        <aside id="sidebar_left" className="nano nano-light">

          {/* -- Sidebar Left Wrapper  -- */}
          <div className="sidebar-left-content nano-content">

              {/* -- Sidebar Header -- */}
              <header className="sidebar-header">

                {/* -- Sidebar Author -- */}
                  <div className="sidebar-widget author-widget">
                      <div className="media">
                          <a className="media-left profile-online" href="#">
                              <img src="/img/avatars/alex-hex-500x500.png" className="img-responsive" alt="Alex Hex" />
                          </a>

                          <div className="media-body">
                              <div>Welcome</div>
                              <div className="media-author">Alex Pascal</div>
                          </div>
                      </div>
                  </div>

              </header>{/* -- /Sidebar Header -- */}

              {/* -- /Sidebar Menu -- */}
              <ul className="nav sidebar-menu">
                <li className="small-toggle minified-icon moveit">
                    <a>
                        <span id="sidebar_left_toggle" className="ad navbar-nav navbar-left small-toggle">
                          <span className="toggle-icon">+</span>
                        </span>
                    </a>
                </li>
                <li className="small-avatar minified-icon">
                    <a>
                        <img src="/img/avatars/alex-profile-500x500.png" className="img-responsive" alt="Alex Pascal" />
                    </a>
                </li>
                <li className="active nav-link">
                    <a href="index.html">
                        <span className="sidebar-title">MyHub</span>
                        <span className="sb-menu-icon fa fa-home"></span>
                    </a>
                </li>
                <li className="nav-link">
                    <a href="search.html">
                        <span className="sidebar-title">Profile</span>
                        <span className="sb-menu-icon fa fa-user"></span>
                    </a>
                </li>
                <li className="nav-link">
                    <a className="accordion-toggle" href="#">
                        <span className="sidebar-title">Notifications</span>
                        <span className="caret"></span>
                        <span className="sb-menu-icon fa fa-tasks"></span>
                    </a>
                </li>
                {/*}<li className="nav-link">
                    <a href="myjobs.html">
                        <span className="sidebar-title">MyJobs</span>
                        <span className="sb-menu-icon fa fa-briefcase"></span>
                    </a>
                </li>*/}
                {/*<li className="nav-link">
                    <a href="mycontacts.html">
                        <span className="sidebar-title">Contacts</span>
                        <span className="sb-menu-icon fa fa-book"></span>
                    </a>
                </li>*/}
                {/*<li className="nav-link">
                    <a href="mycalendar.html">
                        <span className="sidebar-title">Calendar</span>
                        <span className="sb-menu-icon fa fa-calendar-o"></span>
                    </a>
                </li>*/}
                <li className="nav-link">
                    <a className="new-email" href="email-layouts.html">
                        <span className="sidebar-title">Mail</span>
                        <span className="sb-menu-icon fa fa-envelope-o"></span>
                    </a>
                </li>
                <li className="nav-link">
                    <a className="accordion-toggle" href="#">
                        <span className="sidebar-title">Asessment center</span>
                        <span className="caret"></span>
                        <span className="sb-menu-icon fa fa-check-square-o"></span>
                    </a>
                </li>
              </ul>



            </div>{/* -- /Sidebar Wrapper  -- */}

        </aside>


      );
   }
});

module.exports = Sidebar;
