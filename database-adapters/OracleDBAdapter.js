'use strict';
const _ = require('lodash');

 class OracleDBAdapter {
  constructor(config){
    let oracledb = require('oracledb');
    oracledb.poolMin = _.get(config, 'poolMin', 1);
    oracledb.poolMax = _.get(config, 'poolMax', 20);
    this._knex = require('knex')(config);
  }

  getDatabase(){
    return this._knex;
  }

  async check(){
    let oracle_result = await this.getDatabase()('DUAL').first(); // select function testing
    console.log('Oracle DB initialized, select * from DUAL, value = ' + JSON.stringify(oracle_result));
  }
}

module.exports = OracleDBAdapter;