/* eslint-disable no-underscore-dangle */
export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    this._currency = currency;
  }

  displayFullPrice() {
    const fullPrice = `${this._amount} ${this._currency.name} (${this._currency.code})`;
    return fullPrice;
  }

  static concertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
