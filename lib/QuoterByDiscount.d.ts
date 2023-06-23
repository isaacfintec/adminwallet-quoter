import { IFinancialData } from './interfaces';
import Quoter from './Quoter';
export default class QuoterByDiscount extends Quoter {
    constructor();
    getResult(inputData: IFinancialData): number;
    getQuotation(inputData: IFinancialData): number | void;
}
