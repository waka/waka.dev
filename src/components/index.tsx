import React from 'react';
import Layout from './layout';
import About from './about';
import Entries from './entries';
import Entry from './entry';
import { Issue, Site } from '../types';

type Props = {
  issues: Issue[],
  site: Site
};

const Index = ({ issues, site }: Props) => {
  const issue = issues.splice(0, 1)[0];
  return (
    <Layout site={site}>
      <section>
        <Entry issue={issue} />
      </section>
      <section>
        <h2>Latests</h2>
        <Entries issues={issues} />
      </section>
      <section>
        <h2>About</h2>
        <About />
      </section>
    </Layout>
  );
};

export default Index;
