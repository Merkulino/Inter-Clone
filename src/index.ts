import CreditAccount from './POO/Account/CreditAccount';
import DebitAccount from './POO/Account/DebitAccount';
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

    console.log(contaCredito.creditLimit.creditAvaliable());
  }
  myConsole = () => console.log('hello react native cli');
}

const c = new Main();

c.myConsole();
