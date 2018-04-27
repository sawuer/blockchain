const SHA256 = require('crypto-js/sha256');

module.exports = class Block {
  constructor (index, date, transaction, prev_hash = '') {
    this.index = index;
    this.date = date;
    this.transaction = transaction;
    this.prev_hash = prev_hash;
    this.hash = this.create_hash();
  }
  create_hash () {
    return SHA256(
      this.index +
      this.prev_hash +
      this.date +
      JSON.stringify(this.transaction)
    ).toString();
  } 
};
