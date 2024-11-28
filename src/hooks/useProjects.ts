import { useState, useEffect } from 'react';
import { ApiProject, FormattedProject } from '../types/ApiResponse';
import { transformProjects } from '../utils/projectTransforms';

const API_URL = 'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json';

export const useProjects = () => {
  const [projects, setProjects] = useState<FormattedProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch projects');
        
        const data = await response.json() as ApiProject[];
        const formattedProjects = transformProjects(data);
        setProjects(formattedProjects);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};