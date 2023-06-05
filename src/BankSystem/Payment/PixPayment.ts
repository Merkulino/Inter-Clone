import Payment, {PaymentParams} from './Payment';

export default class PixPayment extends Payment {
  public paymentName: string = 'Pix';
  constructor(params: PaymentParams) {
    super(params);
  }
  // Mais tarde vou implementar as regras de negócio de pagamento
}
