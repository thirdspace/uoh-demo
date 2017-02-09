'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class CreateAssess extends React.Component {
  render() {
   
   <section>



      <section id="content" className="animated fadeIn">
        {/* Timeline */}
        <div id="timeline">
          {/* Timeline Divider */}
          <div className="timeline-divider mtn">
            <div className="divider-label">July</div>
            <div className="pull-right">
              <button id="timeline-toggle" className="btn btn-default btn-sm">
                <span className="ad ad-lines fs16 lh20" />
              </button>
            </div>
          </div>
          <div className="row">
            {/* Timeline - Left Column */}
            <div className="col-sm-6 left-column">
              <div className="timeline-item">
                <div className="timeline-icon">
                  <span className="fa fa-comment-o purple" />
                </div>
                <div className="panel">
                  <div className="panel-body pn">
                    <div className="row">
                      <div className="col-xs-12">
                        <img className="person-small" src="assets/img/avatars/karen-160x160.jpg" />                                 
                        <span className="activity-name">
                          Conversation with Karen
                        </span> 
                        <span className="activity-time">
                          3:12pm July 8
                        </span>
                        <div className="transcript">
                          <button className="secondary">
                            <span className="fa fa-stack-exchange" />
                            Transcript
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">
                  <span className="fa fa-comment-o purple" />
                </div>
                <div className="panel">
                  <div className="row">
                    <div className="col-xs-12">
                      <img className="person-small" src="assets/img/avatars/kel-160x160.jpg" />                                 
                      <span className="activity-name">
                        Conversation with Kel
                      </span>
                      <span className="activity-time">
                        3:12pm July 4
                      </span>
                      <div className="transcript">
                        <button className="secondary">
                          <span className="fa fa-stack-exchange" />
                          Transcript
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">
                  <span className="fa fa-comment-o purple" />
                </div>
                <div className="panel compose-widget">
                  <div className="row">
                    <div className="col-xs-12">
                      <img className="person-small" src="assets/img/avatars/doug-160x160.jpg" />                                 
                      <span className="activity-name">
                        Conversation with Doug
                      </span> 
                      <span className="activity-time">
                        3:12pm July 1
                      </span>
                      <div className="transcript">
                        <button className="secondary">
                          <span className="fa fa-stack-exchange" />
                          Transcript
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Timeline - Right Column */}
            <div className="col-sm-6 right-column">
              <div className="timeline-item">
                <div className="timeline-icon">
                  <span className="fa fa-comment-o purple" />
                </div>
                <div className="panel">
                  <div className="panel-body pn">
                    <div className="row">
                      <div className="col-xs-12">
                        <img className="person-small" src="assets/img/avatars/justina-160x160.jpg" />                                 
                        <span className="activity-name">
                          Conversation with Justina
                        </span> 
                        <span className="activity-time">
                          12:10pm July 7
                        </span>
                        <div className="transcript">
                          <button className="secondary">
                            <span className="fa fa-stack-exchange" />
                            Transcript
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">
                  <span className="fa fa-video-camera aqua" />
                </div>
                <div className="panel">
                  <div className="row">
                    <div className="col-xs-12">
                      <img className="person-small online" src="assets/img/avatars/alex-80x80.jpg" />                                 
                      <img className="person-small online" src="assets/img/avatars/kalad-80x80.png" />                                 
                      <span className="activity-name">
                        Video Chat with Scott &amp; Jeff
                      </span> 
                      <span className="activity-time">
                        3:17pm July 3
                      </span>
                      <div className="transcript">
                        <button className="secondary">
                          <span className="fa fa-play-circle-o" />
                          Replay
                        </button>
                        <span className="time-stamp">
                          3 min 18 sec
                        </span>
                      </div>
                    </div>
                  </div>                                
                </div>
              </div>
            </div>
          </div>
          {/* Timeline Divider */}
          <div className="timeline-divider">
            <div className="divider-label">June</div>
          </div>
          <div className="row">
            {/* Timeline - Left Column */}
            <div className="col-sm-6 left-column">
              <div className="timeline-item">
                <div className="timeline-icon">
                  <span className="fa fa-comment-o purple" />
                </div>
                <div className="panel">
                  <div className="panel-body pn">
                    <div className="row">
                      <div className="col-xs-12">
                        <img className="person-small" src="assets/img/avatars/tim-160x160.jpg" />                                 
                        <span className="activity-name">
                          Conversation with Tim
                        </span> 
                        <span className="activity-time">
                          3:12pm June 30
                        </span>
                        <div className="transcript">
                          <button className="secondary">
                            <span className="fa fa-stack-exchange" />
                            Transcript
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">
                  <span className="fa fa-comment-o purple" />
                </div>
                <div className="panel">
                  <div className="row">
                    <div className="col-xs-12">
                      <img className="person-small" src="assets/img/avatars/tan-160x160.jpg" />                                 
                      <span className="activity-name">
                        Conversation with Terry
                      </span> 
                      <span className="activity-time">
                        3:12pm June 23
                      </span>
                      <div className="transcript">
                        <button className="secondary">
                          <span className="fa fa-stack-exchange" />
                          Transcript
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">
                  <span className="fa fa-comment-o purple" />
                </div>
                <div className="panel compose-widget">
                  <div className="row">
                    <div className="col-xs-12">
                      <img className="person-small" src="assets/img/avatars/alex-80x80.jpg" />                                 
                      <span className="activity-name">
                        Conversation with Alex
                      </span> 
                      <span className="activity-time">
                        3:12pm June 2
                      </span>
                      <div className="transcript">
                        <button className="secondary">
                          <span className="fa fa-stack-exchange" />
                          Transcript
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Timeline - Right Column */}
            <div className="col-sm-6 right-column">
              <div className="timeline-item">
                <div className="timeline-icon">
                  <span className="fa fa-video-camera aqua" />
                </div>
                <div className="panel">
                  <div className="panel-body pn">
                    <div className="row">
                      <div className="col-xs-12">
                        <img className="person-small online" src="assets/img/avatars/ko-80x80.png" />                                 
                        <span className="activity-name">
                          Video Chat with ko
                        </span> 
                        <span className="activity-time">
                          3:17pm June 18
                        </span>
                        <div className="transcript">
                          <button className="secondary">
                            <span className="fa fa-play-circle-o" />
                            Replay
                          </button>
                          <span className="time-stamp">
                            3 min 18 sec
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">
                  <span className="fa fa-comment-o purple" />
                </div>
                <div className="panel">
                  <div className="panel-body pn">
                    <div className="row">
                      <div className="col-xs-12">
                        <img className="person-small" src="assets/img/avatars/kinny-80x80.png" />                                 
                        <span className="activity-name">
                          Conversation with Kinny
                        </span> 
                        <span className="activity-time">
                          5:12pm June 16
                        </span>
                        <div className="transcript">
                          <button className="secondary">
                            <span className="fa fa-stack-exchange" />
                            Transcript
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-item panel-clone" id="clone">
            <div className="panel">
              <div className="panel-heading">
                <span className="panel-title">
                  <i className="fa fa-pencil" /> A Title </span>
                <span className="panel-date pull-right mr10 text-muted fs12"> November 27, 2013 </span>
              </div>
              <div className="panel-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean felis sapien, vestibulum in
                  dignissim
                  vitae, condimentum eu nibh.</p>
              </div>
            </div>
          </div>
        </div></section>
      {/* /Content */}

   </section>
 
  }
}
