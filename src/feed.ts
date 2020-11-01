import { Issue, Site } from './types';

const getFeed = (issues: Issue[], site: Site): string => {
  const items = issues.map(issue => {
    return `<item>
      <title><![CDATA[${issue.title}]]></title>
      <description><![CDATA[${issue.bodyHTML}]]></description>
      <link>${site.siteURL}/entry/${issue.title}</link>
      <pubDate>${issue.pubDate}</pubDate>
    </item>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0"
    xmlns:atom="http://www.w3.org/2005/Atom"
    xmlns:content="http://purl.org/rss/1.0/modules/content/">
    <channel>
      <atom:link href="${site.siteURL}/feed" rel="self"/>
      <link>${site.siteURL}</link>
      <title>${site.title}</title>
      <description>${site.description}</description>
      <lastBuildDate>${site.lastBuildDate}</lastBuildDate>
      ${items}
    </channel>
  </rss>`;
  return xml;
};

export { getFeed };
