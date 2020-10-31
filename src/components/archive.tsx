import React from 'react';
import Layout from './layout';
import Entries from './entries';
import { Issue, Site } from '../types';

type Props = {
  issues: Array<Issue>,
  site: Site
};

const Archive = ({ issues, site }: Props) => {
  return (
    <Layout site={site}>
      <h2>一覧</h2>
      <Entries issues={issues} />
    </Layout>
  );
};

export default Archive;
