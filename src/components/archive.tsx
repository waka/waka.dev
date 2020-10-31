import React from 'react';
import Layout from './layout';
import Entries from './entries';
import { Issue, Site } from '../types';

type Props = {
  issues: Issue[],
  site: Site
};

const Archive = ({ issues, site }: Props) => {
  return (
    <Layout site={site}>
      <section>
        <h2>Archive</h2>
        <Entries issues={issues} />
      </section>
    </Layout>
  );
};

export default Archive;
