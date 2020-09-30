import { GithubIssue } from './gitHubIssue';

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}