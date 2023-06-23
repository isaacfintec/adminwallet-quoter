import {
  IQuoter,
  Factors,
  IFactors,
  IFinancialData,
  Callback,
} from './interfaces';

export default abstract class Quoter implements IQuoter {
  name: string;
  factors: IFactors;

  constructor(name: string) {
    this.name = name;
    this.factors = { quincenal: Factors.quincenal, mensual: Factors.mensual };
  }

  toFixed(v: number, fix?: number) {
    return +v.toFixed(fix || 2);
  }

  abstract getResult(v: IFinancialData): number;

  abstract getQuotation(v: IFinancialData, cbk?: Callback): number | void;
}
