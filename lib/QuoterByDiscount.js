"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Quoter_1 = __importDefault(require("./Quoter"));
class QuoterByDiscount extends Quoter_1.default {
    constructor() {
        super('QuoterByDiscount');
    }
    getResult(inputData) {
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
exports.default = QuoterByDiscount;
//# sourceMappingURL=QuoterByDiscount.js.map