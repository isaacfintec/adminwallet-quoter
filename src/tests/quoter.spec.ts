import { expect } from 'chai';
import QuoterFactory from '../QuoterFactory';
import { IFinancialData } from '../interfaces';

const propsByDiscount: IFinancialData = {
  interestRate: 3.5, // tasa sin iva mensual
  periods: 120, // periodos de cobro
  amount: 536.76,
  discountType: 'quincenal', // quicenal / mensual - tipo de descuento por default es quincenal
};

const propsByCapital: IFinancialData = {
  interestRate: 3.5,
  periods: 120,
  amount: 18746,
};

const BY_CAPITAL = 'byCapital';
const BY_DISCOUNT = 'byDiscount';

/** Test de cotizador de pago y monto */
describe('@Quoter', () => {
  it('@Quote: by discount', async function () {
    const quoter = new QuoterFactory(BY_DISCOUNT).create();
    const result = quoter.getQuotation(propsByDiscount);

    /** Factor de diferencia del .01 aceptable */
    const factor = result && result - propsByCapital.amount;

    expect(factor < 0.01).to.be.true;
  });

  it('@Quote: by capital', async function () {
    const quoter = new QuoterFactory(BY_CAPITAL).create();
    const result = quoter.getQuotation(propsByCapital);

    expect(result).to.be.equal(propsByDiscount.amount);
  });

  it('@Error strategy', async function () {
    let result;

    try {
      const quoter = new QuoterFactory('undefined strategy').create();
      quoter.getQuotation(propsByCapital);
    } catch (error) {
      result = error;
    }

    expect(result instanceof Error).to.be.true;
  });
});
