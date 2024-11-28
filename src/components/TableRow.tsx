import React from 'react';
import { FormattedProject } from '../types/ApiResponse';
import { formatCurrency, formatPercentage } from '../utils/formatters';

interface TableRowProps {
  project: FormattedProject;
}

export const TableRow: React.FC<TableRowProps> = ({ project }) => (
  <tr>
    <td>{project.id}</td>
    <td>{formatPercentage(project.percentageFunded)}</td>
    <td>{formatCurrency(project.amountPledged)}</td>
  </tr>
);