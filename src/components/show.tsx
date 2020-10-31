import React from 'react';
import Layout from './layout';
import Entry from './entry';
import { Issue, Site } from '../types';

type Props = {
  issue: Issue,
  site: Site
};

const Show = ({ issue, site }: Props) => {
  return (
    <Layout site={site}>
      <section>
        <Entry issue={issue} />
      </section>
    </Layout>
  );
};

export default Show;
