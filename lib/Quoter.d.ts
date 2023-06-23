import { IQuoter, IFactors, IFinancialData, Callback } from './interfaces';
export default abstract class Quoter implements IQuoter {
    name: string;
    factors: IFactors;
    constructor(name: string);
    toFixed(v: number, fix?: number): number;
    abstract getResult(v: IFinancialData): number;
    abstract getQuotation(v: IFinancialData, cbk?: Callback): number | void;
}
