'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';

import Login from './components/Login.jsx';

import MyPoolLayout from './components/MyPoolLayout';
import ProgressFooter from './components/ProgressFooter.jsx';
import NotFoundPage from './components/NotFoundPage';

import CreateAssess from './components/CreateAssess/CreateAssess';
import PopulateAssessment from './components/CreateAssess/PopulateAssessment';
import PopulateAssessment2 from './components/CreateAssess/PopulateAssessment2';
import AssessmentPublish from './components/CreateAssess/AssessmentPublish';

import AddQuestion from './components/CreateAssess/AddQuestion';
import Review from './components/CreateAssess/Review';
import ApplicantPage from './components/ApplicantPage';

import AdminSignup from './components/AdminSignup';
import EmptyPool from './components/MyPool/EmptyPool';
import EmptyGroup from './components/MyPool/EmptyGroup';
import FreshApplicants from './components/MyPool/FreshApplicants';
import FreshApplicants2 from './components/MyPool/FreshApplicants2';
import FreshApplicants3 from './components/MyPool/FreshApplicants3';

import ImportDialogue from './components/MyPool/ImportDialogue';
import SendQualify from './components/MyPool/SendQualify';

import TestingLayout from './components/Testing/TestingLayout';
import AssessmentWelcome from './components/Testing/AssessmentWelcome';
import AssessmentInfo from './components/Testing/AssessmentInfo';
import MultipleChoiceQuestion from './components/Testing/MultipleChoiceQuestion';
import VideoQuestion from './components/Testing/VideoQuestion';
import TextQuestion from './components/Testing/TextQuestion';
import AudioQuestion from './components/Testing/AudioQuestion';
import CodeQuestion from './components/Testing/CodeQuestion';
import AssessmentComplete from './components/Testing/AssessmentComplete';

const routes = (
  <Route path="/" component={Layout}>

    <IndexRoute path="/login" component={Login} />
    
    <Route path="/new-admin" component={AdminSignup} />

    <Route path="/mypool" component={MyPoolLayout}>
        <IndexRoute path="/empty" component={EmptyPool} />
        <Route path="/newgroup" component={EmptyGroup} />
        <Route path="/import" component={ImportDialogue} />
        <Route path="/home" component={FreshApplicants} />
        <Route path="/mypool2" component={FreshApplicants2} />
        <Route path="/mypool3" component={FreshApplicants3} />
        <Route path="applicant/:id" component={ApplicantPage}/>

        <Route path="*" component={NotFoundPage}/>
    </Route>

    <Route path="/create-assessment" component={CreateAssess}>
        <IndexRoute path="/populate-assessment" component={PopulateAssessment} />
        <Route path="/add-question" component={AddQuestion} />
        <Route path="/populate-assessment2" component={PopulateAssessment2} />
        <Route path="/assessment-publish" component={AssessmentPublish} />

        <Route path="*" component={NotFoundPage}/>
    </Route>

    <Route path="/applicant-assessment" component={TestingLayout}>
        <IndexRoute path="/assessment-welcome" component={AssessmentWelcome} />
        <Route path="/assessment-info" component={AssessmentInfo} />
        <Route path="/multiplechoice-question" component={MultipleChoiceQuestion} />
        <Route path="/video-question" component={VideoQuestion} />
        <Route path="/text-question" component={TextQuestion} />
        <Route path="/audio-question" component={AudioQuestion} />
        <Route path="/code-question" component={CodeQuestion} />
        <Route path="/assessment-complete" component={AssessmentComplete} />

        <Route path="*" component={NotFoundPage}/>
    </Route>

    <Route path="*" component={NotFoundPage}/>

  </Route>
);

export default routes;
