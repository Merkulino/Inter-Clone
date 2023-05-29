export default class User implements User {
  constructor(
    private _id: number,
    private _name: string,
    private _mail: string,
    private _cpf: string,
  ) {}

  public get id(): number {
    return this._id;
  }

  public get mail(): string {
    return this._mail;
  }

  public get name(): string {
    return this._name;
  }

  public get cpf(): string {
    return this._cpf;
  }
}
