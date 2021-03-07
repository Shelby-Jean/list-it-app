const mysql = require('mysql');
// const dotenv = require('dotenv');
// dotenv.config();

class Connection {
  constructor() {
    if (!this.pool){
      console.log('creating mysql connection...');

      const config = {
        connectionLimit: 100,
        host: 'den1.mysql4.gear.host',
        user: 'listit',
        password: 'Eq1pq-8bjM?S',
        database: 'listit'
      };

      this.pool = mysql.createPool(config);

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;