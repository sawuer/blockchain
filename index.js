const Chain = require('./classes/Chain');

const stefano = new Chain();

stefano.create_block({
  amount: 4
});
stefano.create_block({
  amount: 5
});
stefano.create_block({
  amount: 10
});
stefano.create_block({
  amount: 1000
});

stefano.valid();
stefano.chain[3].hash = 32423;
stefano.valid();