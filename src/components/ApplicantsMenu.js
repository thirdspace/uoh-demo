'use strict';

import React from 'react';
import { Link } from 'react-router';
import athletes from '../data/applicants';

export default class ApplicantsMenu extends React.Component {
  render() {
    return (
      <nav className="atheletes-menu">
        {applicants.map(menuApplicant => {
          return <Link key={menuApplicant.id} to={`/applicant/${menuApplicant.id}`} activeClassName="active">
            {menuApplicant.name}
          </Link>;
        })}
      </nav>
    );
  }
}
