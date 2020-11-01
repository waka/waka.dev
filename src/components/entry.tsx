import React from 'react';
import { Issue } from '../types';

type Props = {
  issue: Issue
};

const Entry = ({ issue }: Props) => {
  const html = { __html: issue.bodyHTML };
  return (
    <div className="entry">
      <div className="entry-title">
        <h1><a href={`/entry/${issue.title}`}>{issue.title}</a></h1>
      </div>
      <div className="entry-content" dangerouslySetInnerHTML={html} />
    </div>
  );
};

export default Entry;
