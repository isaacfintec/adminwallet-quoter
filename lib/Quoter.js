"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaces_1 = require("./interfaces");
class Quoter {
    constructor(name) {
        this.name = name;
        this.factors = { quincenal: interfaces_1.Factors.quincenal, mensual: interfaces_1.Factors.mensual };
    }
    toFixed(v, fix) {
        return +v.toFixed(fix || 2);
    }
}
exports.default = Quoter;
//# sourceMappingURL=Quoter.js.map