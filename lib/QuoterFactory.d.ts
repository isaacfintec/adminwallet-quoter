import { QuoterTypes } from './interfaces';
import Quoter from './Quoter';
export default class QuoterFactory {
    strategy: QuoterTypes;
    constructor(strategy: string);
    assertNever(v: never): void;
    create(): Quoter | never;
}
