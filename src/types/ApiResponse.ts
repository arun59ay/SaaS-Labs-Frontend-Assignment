export interface ApiProject {
  'percentage.funded': number;
  'amt.pledged': number;
  's.no': number;
}

export interface FormattedProject {
  id: number;
  percentageFunded: number;
  amountPledged: number;
}