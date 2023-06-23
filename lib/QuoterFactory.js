"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
const QuoterByCapital_1 = __importDefault(require("./QuoterByCapital"));
const QuoterByDiscount_1 = __importDefault(require("./QuoterByDiscount"));
class QuoterFactory {
    constructor(strategy) {
        this.strategy = interfaces_1.QuoterTypes[strategy];
    }
    assertNever(v) {
        throw new Error(`Unhandle union member: ${v}`);
    }
    create() {
        switch (this.strategy) {
            case interfaces_1.QuoterTypes.byCapital:
                return new QuoterByCapital_1.default();
            case interfaces_1.QuoterTypes.byDiscount:
                return new QuoterByDiscount_1.default();
            default:
                this.assertNever(this.strategy);
        }
    }
}
exports.default = QuoterFactory;
//# sourceMappingURL=QuoterFactory.js.map