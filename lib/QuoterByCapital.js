"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Quoter_1 = __importDefault(require("./Quoter"));
class QuoterByCapital extends Quoter_1.default {
    constructor() {
        super('QuoterByCapital');
    }
    getResult(inputData) {
        const { interestRate, periods, tax, amount, discountType } = inputData;
        /** Set base values */
        const BASE_CALC = 1;
        const TAX = tax || 0.16;
        const FACTOR = this.factors[discountType] || this.factors.quincenal;
        /** Calcualte payment from capital using "golabal" interest logic */
        const interest = interestRate * periods;
        const interestPeriod = this.toFixed(interest / FACTOR, 6);
        const interestPeriodBase = this.toFixed(BASE_CALC + interestPeriod / 100, 4);
        const interestAmount = amount * interestPeriodBase;
        const discount = interestAmount / periods;
        const amountWithoutInterest = amount / periods;
        const interestPayment = discount - amountWithoutInterest;
        const interestPaymentTax = this.toFixed(TAX * interestPayment, 6);
        const payment = discount + interestPaymentTax;
        return this.toFixed(payment, 2);
    }
    getQuotation(inputData) {
        try {
            const result = this.getResult(inputData);
            return result;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = QuoterByCapital;
//# sourceMappingURL=QuoterByCapital.js.map