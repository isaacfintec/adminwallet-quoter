import { IFinancialData, Callback } from './interfaces';
import Quoter from './Quoter';

export default class QuoterByDiscount extends Quoter {
  constructor() {
    super('QuoterByDiscount');
  }

  getResult(inputData: IFinancialData): number {
    const { interestRate, periods, tax, amount, discountType } = inputData;

    /** Set base values */
    const BASE_CALC = 1;
    const TAX = tax || 1.16;
    const FACTOR = this.factors[discountType] || this.factors.quincenal;

    /** Calcualte capital from amount using "golabal" interest logic */

    const interestRateWithTax = (interestRate / 100) * TAX;
    const interestRatePerPeriod = interestRateWithTax * periods;
    const interestRatePerFactor = BASE_CALC + interestRatePerPeriod / FACTOR;
    const interestRatePerFactorFixed = this.toFixed(interestRatePerFactor, 6);
    const totalDiscount = amount * periods;
    const initialAmount = totalDiscount / interestRatePerFactorFixed;

    return this.toFixed(initialAmount, 2);
  }

  getQuotation(inputData: IFinancialData): number | void {
    try {
      const result = this.getResult(inputData);
      return result;
    } catch (error) {
      throw error;
    }
  }

  /**
   * TODO: handle error by client using a callback function
   * getQuotation(inputData: IFinancialData, cbk: Callback): number | void {
   *  try {
   *    const result = this.getResult(inputData);
   *    cbk(null, result);
   *  } catch (error) {
   *    cbk(error, null);
   *  }
   * }
   */
}
