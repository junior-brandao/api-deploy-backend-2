

const knex = require('knex')({
   client: 'pg',
   connection: {
      host: 'ec2-44-215-40-87.compute-1.amazonaws.com',
      port: 5432,
      user: 'dikseszuvmfdya',
      password: '7ace02179fd0ee0177481095c3f1b69f598fe96ac23ab35fa43f062283a7be51',
      database: 'dde9uno9tbq4ga',
   },

})
module.exports = knex
