const formatHelper = require('../helpers/format');
// const configHelper = require('../helpers/config');
// const storedProcedureHelper = require('../helpers/stored-procedure');
// const oracledb = require('oracledb');
const _ = require('lodash');

module.exports = {
    async getTxList(db, userId, dateFrom, dateTo) {
        try {
            let result;
            //domainId = formatHelper.frmDomainId(domainId);

            console.log('Start getTxList...');
            let sql = () => db('tblPaymentType').whereNull('ExpiraryDate');
            let _datasets = sql().select([
                db.raw('ROW_NUMBER() OVER (order by PaymentTypeName) as seq'),
                'PaymentTypeName',
                'RelatedParty',
                'ExpiraryDate'
            ]).as('ds');
                //.orderBy('PaymentTypeName')
                //.limit(2);
                //.offset(2);
                //.orderBy('emp_id', 'ASC')
                //.first();
            
            let datalength = await sql().count('* as count').first().then(res => _.get(res, 'count'));
            let resultData = await db.select('*').from(_datasets).whereBetween('seq', [3,6]).orderBy('seq');
            
            result = {
                count: datalength,
                result: resultData
            };
            //res.forEach((owner, i) => {
            //    console.log('Result: ' + owner['ENG_SURNAME'] );
            //})

            //let result = "Tx dataset";
            // let res = await db('EMPLOYEE').select([
            //     'emp_id',
            //     'eng_surname',
            //     'eng_other_name'
            // ])
            //     .where('emp_id', 'H0537716')
            //     .orderBy('emp_id', 'ASC')
            //     .first();

            //console.log('Result getTxList...' + JSON.stringify(result));
            return result;
        } catch (err) {
            throw err;
        }
    }
}
