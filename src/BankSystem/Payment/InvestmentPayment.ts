import {TransactionType} from '../Interfaces/types';
import Payment, {PaymentParams} from './Payment';

export default class InvestPay extends Payment {
  constructor(params: PaymentParams, private transaction: TransactionType) {
    super(params);
  }
  // Mais tarde vou implementar as regras de negócio de pagamento
}
