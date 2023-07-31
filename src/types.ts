export interface Env {
  CACHED_RESPONSE: KVNamespace
};

export interface Site {
  title: string,
  description: string,
  author: string,
  lastBuildDate: string,
  siteURL: string,
  faviconURL: string,
  iconURL: string
};

export interface GitHub {
  accessToken: string,
  repository: string,
  author: string,
  label?: string/* if you want filtering by label */
};

export interface Config {
  site: Site,
  github: GitHub
};

export interface Issue {
  title: string,
  bodyHTML: string,
  bodyText: string,
  labels: string[],
  url: string,
  pubDate: string
};

interface LabelNode {
  name: string
};

export interface IssueNode {
  title: string,
  bodyHTML: string,
  bodyText: string,
  labels: { nodes: LabelNode[] }
  url: string,
  createdAt: string
};

interface Edge {
  node: IssueNode
}

export interface PageInfo {
  endCursor: string | null,
  hasNextPage: boolean
};

export interface IssuesResponse {
  search: {
    edges: Edge[],
    pageInfo: PageInfo
  }
};

export interface IssueResponse {
  search: {
    edges: Edge[]
  }
};

export type Response = { contentType: string, response: string, status: number };
