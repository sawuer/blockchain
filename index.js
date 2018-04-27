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


console.log(JSON.stringify(stefano.chain, null, 4))