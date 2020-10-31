import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import { Site } from '../types';

type Props = {
  site: Site,
  children: ReactNode
};

const Layout = ({ site, children }: Props) => {
  return (
    <div className="container">
      <Header title={site.title} />
      { children }
      <Footer author={site.author} />
    </div>
  );
};

export default Layout;
