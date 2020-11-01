import React from 'react';
import { Issue } from '../types';

type Props = {
  issues: Array<Issue>
};

const Entries = ({ issues }: Props) => {
  return (
    <div className="entries">
      {issues.map((issue, idx) => {
        const body = issue.bodyText.length > 100 ?
          issue.bodyText.slice(0, 100) + '...' :
          issue.bodyText;
        return (
          <div key={idx} className="entries-item">
            <h4><a href={`/entry/${issue.title}`}>{issue.title}</a></h4>
            <p>{body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Entries;
