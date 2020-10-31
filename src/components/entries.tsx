import React from 'react';
import { Issue } from '../types';

type Props = {
  issues: Array<Issue>
};

const Entries = ({ issues }: Props) => {
  return (
    <div className="entries">
      {issues.map((issue, idx) => {
        return (
          <div key={idx} className="entries-item">
            <h4><a href={`/entry/${issue.title}`}>{issue.title}</a></h4>
            <p>{issue.body.slice(0, 30)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Entries;
