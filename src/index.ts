import CreditAccount from './BankSystem/Account/CreditAccount';
import DebitAccount from './BankSystem/Account/DebitAccount';
import CDB from './BankSystem/Investments/CDB';
import BankLipPayment from './BankSystem/Payment/BankLip';
import PixPayment from './BankSystem/Payment/PixPayment';
import User from './BankSystem/User';

export default class Main {
  constructor() {
    const userMelqui = new User(0, 'Melqui', 'melqui@mail', '10234567891');
    const userMelqui2 = new User(0, 'Melqui2', 'melqui2@mail', '222222222222');

    const conta = new DebitAccount({
      id: 0,
      _user: userMelqui,
    });

    const conta2 = new DebitAccount({
      id: 2,
      _user: userMelqui2,
    });

    const contaCredito = new CreditAccount({
      id: 0,
      _user: userMelqui,
    });

    const contaCredito2 = new CreditAccount({
      id: 2,
      _user: userMelqui2,
    });

    // conta.receive(555);

    // contaCredito.send(99);

    const avalCredit = contaCredito.creditLimit.creditAvaliable();

    console.log(`Crédito disponivel: ${avalCredit}`);
    console.log(`Debito disponivel: ${conta.balance}`);
    console.log(`Crédito a pagar: ${contaCredito.creditLimit.usage}`);

    // Pagar crédito com boleto
    const boleto = new BankLipPayment({
      fromAccount: contaCredito,
      toAccount: conta,
      value: 55,
    });

    console.log(`------ ${boleto.pay(boleto)} -------`);
    console.log(`Cré disponi: ${contaCredito.creditLimit.creditAvaliable()}`);
    console.log(`Debito disponivel: ${conta.balance}`);
    console.log(`Crédito a pagar: ${contaCredito.creditLimit.usage}`);

    const pix = new PixPayment({
      fromAccount: conta,
      toAccount: conta2,
      value: 24,
    });

    console.log(`------ ${pix.pay(pix)} -------`);
    // console.log('extrato:', conta.bankStatement);

    const invest = new CDB({
      name: 'CDB - Inter',
      porcent: 100,
      minInvestimentValue: 20,
    });

    console.log('Cred mel2:', contaCredito2.creditLimit.creditAvaliable());
    console.log('Balance:', invest.balance);
    invest.addValue(50, contaCredito2);
    console.log('extrato:', contaCredito2.bankStatement);
    console.log('Balance:', invest.balance);
    invest.redeemValue(20, contaCredito2);
    console.log('extrato:', contaCredito2.bankStatement);
  }
  myConsole = () => console.log('hello react native cli');
}

const c = new Main();

c.myConsole();
