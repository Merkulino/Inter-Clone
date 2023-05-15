/* eslint-disable semi */
export default interface IInvestiment {
  name: string;
  porcent: number;
  minInvestimentValue: number;
  redemptionDate: Date;
  incomeForecast(): string;
}
