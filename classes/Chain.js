const Block = require('./Block');

module.exports = class Chain {
  constructor () {
    this.idx = 0;
    this.chain = [new Block(this.idx, Date(), 'Genesis Block')];
  }
  create_block (data) {
    this.idx++;
    this.chain.push(
      new Block(
        this.idx,
        Date(),
        data,
        this.chain[this.idx - 1].hash
      )
    );
  }
};
