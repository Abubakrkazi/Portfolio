export interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;

  name: string;
  bio: string;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  twitter_username: string | null;

  followers: number;
  following: number;

  public_repos: number;
  public_gists: number;

  created_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;

  html_url: string;

  description: string | null;

  language: string | null;

  stargazers_count: number;

  forks_count: number;

  watchers_count: number;

  open_issues_count: number;

  homepage: string | null;

  topics: string[];

  updated_at: string;
}