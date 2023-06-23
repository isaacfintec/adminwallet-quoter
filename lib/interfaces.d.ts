export interface IFactors {
    quincenal: number;
    mensual: number;
}
export interface IFinancialData {
    interestRate: number;
    periods: number;
    amount: number;
    discountType?: string;
    tax?: number;
}
export declare enum Factors {
    quincenal = 2,
    mensual = 1
}
export interface IQuoter {
    name: string;
    factors: IFactors;
    toFixed(v: number, fix?: number): number;
    getResult(IFinancialData: any): number;
}
export declare enum QuoterTypes {
    byCapital = "byCapital",
    byDiscount = "byDiscount"
}
export declare type Callback<T = any> = (error: Error | null, output: T | null) => void;
