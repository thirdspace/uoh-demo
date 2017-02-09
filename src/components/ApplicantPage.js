'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import applicantsMenu from './applicantsMenu';
import Medal from './Medal';
import Flag from './Flag';
import applicants from '../data/applicants';

export default class ApplicantPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const applicant = applicants.filter((applicant) => applicant.id === id)[0];
    if (!applicant) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/img/${applicant.cover})` };
    return (
      <div className="applicant-full">
        <ApplicantsMenu/>
        <div className="applicant">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/img/${applicant.image}`}/>
            <h2 className="name">{applicant.name}</h2>
          </div>
          <section className="description">
            Small time medalist from <strong><Flag code={applicant.country} showName="true"/></strong>,
            born of {applicant.birth} (Find out more on <a href={applicant.link} target="_blank">Wikipedia</a>).
          </section>
          <section className="medals">
            <p>Winner of <strong>{applicant.medals.length}</strong> medals:</p>
            <ul>{
              applicant.medals.map((medal, i) => <Medal key={i} {...medal}/>)
            }</ul>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}
