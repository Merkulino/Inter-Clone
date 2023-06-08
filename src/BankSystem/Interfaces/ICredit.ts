/* eslint-disable semi */
export type StatusType = 'open' | 'closed';

export default interface ICredit {
  limit: number;
  usage: number;
  status: boolean;
  useCredit(value: number): string;
  payCredit(value: number): string;
}
