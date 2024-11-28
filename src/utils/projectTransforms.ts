import { ApiProject, FormattedProject } from '../types/ApiResponse';

export const transformProjects = (data: ApiProject[]): FormattedProject[] => {
  return data.map((project) => ({
    id: project['s.no'],
    percentageFunded: project['percentage.funded'],
    amountPledged: project['amt.pledged']
  }));
};