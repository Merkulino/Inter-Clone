import Payment, {PaymentParams} from './Payment';

export default class BankLipPayment extends Payment {
  constructor(params: PaymentParams) {
    super(params);
  }
  // Mais tarde vou implementar as regras de negócio de pagamento
}
