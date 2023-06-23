import Quoter from './Quoter';
import { IFinancialData, Callback } from './interfaces';

export default class QuoterByCapital extends Quoter {
  constructor() {
    super('QuoterByCapital');
  }

  getResult(inputData: IFinancialData): number {
    const { interestRate, periods, tax, amount, discountType } = inputData;

    /** Set base values */
    const BASE_CALC = 1;
    const TAX = tax || 0.16;
    const FACTOR = this.factors[discountType] || this.factors.quincenal;

    /** Calcualte payment from capital using "golabal" interest logic */

    const interest: number = interestRate * periods;
    const interestPeriod: number = this.toFixed(interest / FACTOR, 6);
    const interestPeriodBase: number = this.toFixed(
      BASE_CALC + interestPeriod / 100,
      4,
    );
    const interestAmount: number = amount * interestPeriodBase;
    const discount: number = interestAmount / periods;

    const amountWithoutInterest = amount / periods;
    const interestPayment: number = discount - amountWithoutInterest;
    const interestPaymentTax: number = this.toFixed(TAX * interestPayment, 6);

    const payment = discount + interestPaymentTax;
    return this.toFixed(payment, 2);
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
