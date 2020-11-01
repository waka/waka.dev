import { graphql } from '@octokit/graphql';
import { GitHub, Issue, IssueNode, IssuesResponse, IssueResponse, PageInfo } from './types';

const ISSUES_QUERY = `
  query issues($q: String!, $cursor: String) { 
    search(
      type: ISSUE,
      query: $q,
      first: 100,
      after: $cursor
    ) {
      edges {
        node {
          ... on Issue {
            title,
            bodyHTML,
            bodyText,
            labels(first:5) {
              nodes { name }
            },
            url,
            createdAt
          }
        }
      },
      pageInfo {
        endCursor,
        hasNextPage
      }
    }
  }
`;

const ISSUE_QUERY = `
  query issue($q: String!) { 
    search(
      type: ISSUE,
      query: $q,
      first: 1
    ) {
      edges {
        node {
          ... on Issue {
            title,
            bodyHTML,
            bodyText,
            labels(first:5) {
              nodes { name }
            },
            url,
            createdAt
          }
        }
      }
    }
  }
`;

const getIssues = async (github: GitHub): Promise<Issue[]> => {
  const issues = [];
  const page: PageInfo = { endCursor: null, hasNextPage: true };

  let q = `repo:${github.repository} author:${github.author} state:open`;
  if (github.label) {
    q += ` label:"${github.label}"`;
  }

  while (page.hasNextPage) {
    const { search: { edges, pageInfo } }: IssuesResponse = await graphql(ISSUES_QUERY, {
      q,
      cursor: page.endCursor,
      headers: { authorization: `token ${github.accessToken}` }
    });
    for (const { node } of edges) {
      const issue = nodeToIssue(node);
      issues.push(issue);
    }
    page.endCursor = pageInfo.endCursor;
    page.hasNextPage = pageInfo.hasNextPage;
  }

  // sort title desc
  return issues.sort((a, b) => a.title > b.title ? -1 : 1);
};

const getIssue = async (title: string, github: GitHub): Promise<Issue | null> => {
  let q = `repo:${github.repository} author:${github.author} state:open ${title} in:title`;
  if (github.label) {
    q += ` label:"${github.label}"`;
  }

  const { search: { edges } }: IssueResponse = await graphql(ISSUE_QUERY, {
    q,
    headers: { authorization: `token ${github.accessToken}` }
  });
  return edges[0] ? nodeToIssue(edges[0].node) : null;
};

const nodeToIssue = (node: IssueNode): Issue => {
  const pubDate = (new Date(node.createdAt)).toUTCString();
  return {
    title: node.title,
    bodyHTML: node.bodyHTML,
    bodyText: node.bodyText,
    labels: node.labels.nodes.map(n => n.name),
    url: node.url,
    pubDate
  };
};

export { getIssues, getIssue };
