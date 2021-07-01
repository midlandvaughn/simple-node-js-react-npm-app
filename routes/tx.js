const txModel = require('../models/tx');

module.exports = {
    get: async function getTxList(req, res, next) {
        let dateFrom = req.query.dateFrom;
        let dateTo = req.query.dateTo;
        let userId = req.query.userId;

        try {
            let txList = await txModel.getTxList(req.db, userId, dateFrom, dateTo);

            //res.send('Response from txjs: ' + txList);
            return res.helper.sendRes(res, null, txList);
        } catch (err) {
            next(err);
        }
    },

    post: async function SetTx(req, res, next) {
        //try {
        //    //let { userId, empId, deptId } = req.user;
        //    let { selfKey, subject, noteMemo, noteKey, currentDomain } = req.body;
//
        //    let result = await txModel.setTx(req.db, currentDomain, selfKey, subject, noteMemo, userId, empId, deptId, noteKey);
//
        //    return res.helper.sendRes(res, null, result);
        //} catch (err) {
        //    next(err);
        //}
    },

    delete: async function DeleteTx(req, res, next) {
        //try {
        //    let { userId, empId, deptId } = req.user;
        //    let { noteKey, currentDomain } = req.body;
//
        //    let result = await noteModel.deleteNote(req.db, currentDomain, noteKey, userId, empId, deptId);
//
        //    return res.helper.sendRes(res, null, result);
        //} catch (err) {
        //    next(err);
        //}
    }
}