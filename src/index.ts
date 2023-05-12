import CreditAccount from './POO/Account/CreditAccount';
import DebitAccount from './POO/Account/DebitAccount';
import BankLipPayment from './POO/Payment/BankLip';
import User from './POO/User';

export default class Main {
  constructor() {
    const userMelqui = new User(0, 'Melqui', 'melqui@mail', '10234567891');

    const conta = new DebitAccount({
      id: 0,
      _user: userMelqui,
      _bankStatement: [],
    });

    const contaCredito = new CreditAccount({
      id: 0,
      _user: userMelqui,
      _bankStatement: [],
    });

    conta.receive(555);

    contaCredito.send(99);

    const avalCredit = contaCredito.creditLimit.creditAvaliable();

    console.log(`Crédito disponivel: ${avalCredit}`);
    console.log(`Debito disponivel: ${conta.balance}`);
    console.log(`Crédito a pagar: ${contaCredito.creditLimit.usage}`);

    // Pagar crédito com boleto
    const boleto = new BankLipPayment({
      fromAccount: conta,
      toAccount: contaCredito,
      value: 99,
    });

    console.log(`------ ${boleto.pay()} -------`);
    console.log(`Cré disponi: ${contaCredito.creditLimit.creditAvaliable()}`);
    console.log(`Debito disponivel: ${conta.balance}`);
    console.log(`Crédito a pagar: ${contaCredito.creditLimit.usage}`);
  }
  myConsole = () => console.log('hello react native cli');
}

const c = new Main();

c.myConsole();
