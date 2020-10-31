import React from 'react';
import { Issue } from '../types';

type Props = {
  issues: Array<Issue>
};

const Entries = ({ issues }: Props) => {
  return (
    <div className="entry-list">
      {issues.map((issue, idx) => {
        return (
          <div key={idx} className="entry-list-item">
            <a href={`/entry/${issue.title}`}>{issue.title}</a>
          </div>
        );
      })}
    </div>
  );
};

export default Entries;
