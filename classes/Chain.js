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
        this.chain[this.idx-1].hash
      )
    );
  }
  valid () {
    for (let i = 1; i < this.chain.length; i++) {
      if (this.chain[i].prev_hash !== this.chain[i-1].hash) {
        return console.log(`hash of block-${this.chain[i].index} is not equal to hash of block-${this.chain[i-1].index}`);
      }
    }
    return console.log('chain is valid');
  }
};
