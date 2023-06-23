import Quoter from './Quoter';
import { IFinancialData } from './interfaces';
export default class QuoterByCapital extends Quoter {
    constructor();
    getResult(inputData: IFinancialData): number;
    getQuotation(inputData: IFinancialData): number | void;
}
