import ICredit, {StatusType} from '../Interfaces/ICredit';

export default class Credit implements ICredit {
  private _limit: number;
  private _usage: number = 0;
  private _status: StatusType = 'open';

  constructor(limit: number) {
    this._limit = limit;
  }

  get limit(): number {
    return this._limit;
  }

  get usage(): number {
    return this._usage;
  }
  get status(): StatusType {
    return this._status;
  }

  creditAvaliable = () => this.limit - this.usage;

  useCredit(value: number): string {
    if (this.usage <= this.limit && value < this.creditAvaliable()) {
      this._usage += value;
    } else {
      throw new Error('It Was not possible use credit');
    }
    return `
    use ${value} of ${this.limit},
    now you have ${this.creditAvaliable()} avaliable`;
  }

  payCredit(value: number): string {
    if (this.usage > 0) {
      this._usage -= value;
    } else {
      throw new Error('No need pay credit');
    }
    return `bill paid, now you have ${this.creditAvaliable()} avaliable!`;
  }
}
