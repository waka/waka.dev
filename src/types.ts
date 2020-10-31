export interface Site {
  title: string,
  author: string,
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
  body: string,
  labels: string[],
  url: string
};

interface LabelNode {
  name: string
};

export interface IssueNode {
  title: string,
  bodyHTML: string,
  labels: { nodes: LabelNode[] }
  url: string
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
