import CreditAccount from './POO/Account/CreditAccount';
import DebitAccount from './POO/Account/DebitAccount';
import BankLipPayment from './POO/Payment/BankLip';
import PixPayment from './POO/Payment/PixPayment';
import User from './POO/User';

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
    console.log('extrato:', conta.bankStatement);
  }
  myConsole = () => console.log('hello react native cli');
}

const c = new Main();

c.myConsole();
