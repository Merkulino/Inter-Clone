export default class User implements User {
  constructor(
    private id: number,
    private _name: string,
    private _mail: string,
    private _cpf: string,
  ) {}

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
