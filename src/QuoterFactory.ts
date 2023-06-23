import { QuoterTypes } from './interfaces';
import QuoterByCapital from './QuoterByCapital';
import QuoterByDiscount from './QuoterByDiscount';
import Quoter from './Quoter';

export default class QuoterFactory {
  strategy: QuoterTypes;

  constructor(strategy: string) {
    this.strategy = QuoterTypes[strategy];
  }

  assertNever(v: never) {
    throw new Error(`Unhandle union member: ${v}`);
  }

  create(): Quoter | never {
    switch (this.strategy) {
      case QuoterTypes.byCapital:
        return new QuoterByCapital();
      case QuoterTypes.byDiscount:
        return new QuoterByDiscount();
      default:
        this.assertNever(this.strategy);
    }
  }
}
