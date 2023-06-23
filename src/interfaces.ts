/// <reference types="node" />

export interface IFactors {
  quincenal: number;
  mensual: number;
}

export interface IFinancialData {
  interestRate: number; // tasa de interes s/iva, siempre es mensual
  periods: number; // plazo seleccionado 36, 48, ... 72
  amount: number; // liquidez disponible
  discountType?: string; // por default es quincenal pero se puede mensual
  tax?: number; // por default 1.16
}

export enum Factors {
  quincenal = 2,
  mensual = 1,
}

export interface IQuoter {
  name: string;
  factors: IFactors;
  toFixed(v: number, fix?: number): number;
  getResult(IFinancialData): number;
}

export enum QuoterTypes {
  byCapital = 'byCapital',
  byDiscount = 'byDiscount',
}

export type Callback<T = any> = (error: Error | null, output: T | null) => void;
