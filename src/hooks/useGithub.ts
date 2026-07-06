"use client";

import { useEffect, useState } from "react";
import { GitHubRepo, GitHubUser } from "@/types/github";

const USERNAME = "Abubakrkazi";

export default function useGithub() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchGithub() {
      try {
        setLoading(true);

        const [userRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(
            `https://api.github.com/users/${USERNAME}/repos?per_page=100`
          ),
        ]);

        if (!userRes.ok || !repoRes.ok) {
          throw new Error("Failed to fetch GitHub data.");
        }

        const userData: GitHubUser = await userRes.json();
        const repoData: GitHubRepo[] = await repoRes.json();

        setUser(userData);
        setRepos(repoData);
      } catch (err) {
        setError("Unable to load GitHub data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchGithub();
  }, []);

  return {
    user,
    repos,
    loading,
    error,
  };
}