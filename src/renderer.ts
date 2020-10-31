import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { getIssues, getIssue } from './api_client';
import { getStyles } from './styles';
import Index from './components/index';
import Archive from './components/archive';
import Show from './components/show';
import { NotFoundError } from './errors';
import { Config } from './types';

const renderIndex = async (config: Config): Promise<string> => {
  const issues = await getIssues(config.github);
  const content = ReactDOMServer.renderToString(
    React.createElement(Index, { issues, site: config.site })
  );
  return toWholeHTML(config.site.title, content);
};

const renderArchive = async (config: Config): Promise<string> => {
  const issues = await getIssues(config.github);
  const content = ReactDOMServer.renderToString(
    React.createElement(Archive, { issues, site: config.site })
  );
  return toWholeHTML(config.site.title, content);
};

const renderShow = async (title: string, config: Config): Promise<string> => {
  const issue = await getIssue(title, config.github);
  if (issue === null) {
    throw new NotFoundError();
  }
  const content = ReactDOMServer.renderToString(
    React.createElement(Show, { issue, site: config.site })
  );
  return toWholeHTML(title, content);
};

const renderFeed = (_config: Config): string => {
  return 'feed';
};

const renderNotFound = (): string => {
  return 'not found';
};

const toWholeHTML = (title: string, content: string): string => {
  const styles = getStyles();
  const html = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>${title}</title>
      <link rel="alternate" type="application/atom+xml" href="/feed" />
      <link rel="icon" href="https://waka.github.io/assets/images/favicon.ico" />
      <style>${styles}</style>
    </head>
    <body>${content}</body>
  </html>`;
  return html;
};

export {
  renderIndex,
  renderArchive,
  renderShow,
  renderFeed,
  renderNotFound
};
