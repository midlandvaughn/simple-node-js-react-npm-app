'use strict';
const _ = require('lodash');

 class MssqlDBAdapter {
  constructor(config){
    let mssqldb = require('mssql');
    mssqldb.poolMin = _.get(config, 'poolMin', 1);
    mssqldb.poolMax = _.get(config, 'poolMax', 20);
    this._knex = require('knex')(config);
  }

  getDatabase(){
    return this._knex;
  }

  async check(){
    console.log('Start mssql check...');
    let sql_result = await this.getDatabase()('employee').select(['emp_id', 'eng_surname']).first(); // select function testing
    console.log('SQL Server DB initialized, select getdate(), value = ' + sql_result);
  }
}

module.exports = MssqlDBAdapter;