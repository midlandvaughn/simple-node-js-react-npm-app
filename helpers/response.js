const statusConst = require('../constants/status');
const formatHelper = require('../helpers/format');
const errConst = require('../constants/error');
//const UpdateAuditHelper = require('../helpers/update-audit');
//const updateAudit = new UpdateAuditHelper();
const _ = require('lodash');

module.exports = {
    sendRes: async (res, err, data) => {
        try {
            let spErr = searchField(data, 'as_err_msg');
            let statusCode = spErr ? statusConst.INTERNAL_SERVER_ERROR : err || statusConst.SUCCESS;
            let httpStatusCode = spErr ? statusConst.INTERNAL_SERVER_ERROR.code : getHttpStatusCode(err);
            setReqEndTime(res);
            let startTime = getReqStartTime(res).getTime();
            let endTime = getReqEndTime(res).getTime();
            setResTime(res, (endTime - startTime));
            let errCode = _.get(err, 'code', '');
            let errMsg = spErr ? fetchErrMsg(data, 3) : _.get(err, 'msg') || '';

            //await updateAudit.post_audit(res)
            return sendJSON(res)
                .status(httpStatusCode)
                .send(formatHelper.frmRes(statusCode, errCode, errMsg, deepTrim(data)));
        } catch (error) {
            throw error;
        }
    },
    sendOKRawJsonRes: async (res, data) => {
        try {
            setReqEndTime(res);
            let startTime = getReqStartTime(res).getTime();
            let endTime = getReqEndTime(res).getTime();
            setResTime(res, (endTime - startTime));
            return sendJSON(res)
                .status(statusConst.OK.code)
                .send(JSON.stringify(deepTrim(data), null, 4));
        } catch (error) {
            throw error;
        }
    }
    , sendRaw: async (res, err, data) => {
        try {
            setReqEndTime(res);
            let startTime = getReqStartTime(res).getTime(),
                endTime = getReqEndTime(res).getTime();
            setResTime(res, (endTime - startTime));
            return res.send(data);
        } catch (error) {
            throw error;
        }
    }
    , sendAcceptedRes: async (res, accepted_msg, data) => {
        try {
            sendReqWithStatusCode(res, statusConst.ACCEPTED, accepted_msg, data);
        } catch (error) {
            throw error;
        }
    }
    , sendNoContentRes: async (res, no_content_msg, data) => {
        try {
            sendReqWithStatusCode(res, statusConst.NO_CONTENT, no_content_msg, data);
        } catch (error) {
            throw error;
        }
    }
	, sendNotFoundRes: async (res, not_foung_msg, data) => {
        try {
            sendReqWithStatusCode(res, statusConst.NOT_FOUND, not_foung_msg, data);
        } catch (error) {
            throw error;
        }
    }
	, sendBadRequestRes: async (res, bad_request_msg, data) => {
        try {
            sendReqWithStatusCode(res, statusConst.BAD_REQUEST, bad_request_msg, data);
        } catch (error) {
            throw error;
        }
    }
	, sendInternalServerErrRes: async (res, err_msg, data) => {
        try {
            sendReqWithStatusCode(res, statusConst.INTERNAL_SERVER_ERROR, err_msg, data);
        } catch (error) {
            throw error;
        }
    }
    , sendUnauthorizedErrRes: async (res, err_msg, data) => {
        try {
            const unauthorized = errConst.ERR_CUSTOM_UNAUTHORIZED
            let _data = {...data, code: unauthorized.code}
            sendReqWithStatusCode(res, statusConst.UNAUTHORIZED, err_msg, _data);
        } catch (error) {
            throw error;
        }
    }
    , sendForbiddenErrRes: async (res, err_msg, data) => {
        try {
            const forbidden = errConst.ERR_FORBIDDEN
            let _data = {...data, code: forbidden.code}
            sendReqWithStatusCode(res, statusConst.FORBIDDEN, err_msg, _data);
        } catch (error) {
            throw error;
        }
    }
    , sendReqWithStatusCode(res, status, err_msg, data) {
        return sendReqWithStatusCode(res, status, err_msg, data)
    }	
    , getHttpStatusCode(err) {
        return getHttpStatusCode(err);
    }
    , getResTime(res) {
        return res.reponseTime;
    }
    , setReqStartTime(res) {
        setReqStartTime(res);
    }
    , getReqStartTime(res) {
        return getReqStartTime(res);
    }
    , setReqEndTime(res) {
        setReqEndTime(res);
    }
    , getReqEndTime(res) {
        return getReqEndTime(res);
    }
    , 
};

function sendJSON(res){
    return res.header("Content-Type", "application/json; charset=utf-8");
}

function sendReqWithStatusCode(res, status, err_msg, data) {
	try {
        let statusCode = status;
        let httpStatusCode = getHttpStatusCode(status);

        setReqEndTime(res);
        let startTime = getReqStartTime(res).getTime();
        let endTime = getReqEndTime(res).getTime();
        setResTime(res, (endTime - startTime));
        
        return sendJSON(res)
            .status(httpStatusCode)
            .send(formatHelper.frmRes(statusCode, status.code, err_msg, deepTrim(data)));
    } catch (error) {
        throw error;
    }
}

function getHttpStatusCode(err) {
    let code;
    if (!err)
        code = statusConst.OK.code;
    else {
        let found = Object.values(statusConst).find(value => _.isEqual(value, err));
        if (found) return _.get(found, 'code') || 500;
        switch (err.code) {
            case errConst.ERR_CUSTOM_LOG_NOT_FOUND.code:
                code = statusConst.FORBIDDEN.code;
                break;
            case errConst.ERR_CUSTOM_INVALID_QUERY_PARAMS.code:
                code = statusConst.BAD_REQUEST.code;
                break;
            case errConst.ERR_CUSTOM_INVALID_INPUT.code:
                code = statusConst.BAD_REQUEST.code;
                break;
            case errConst.ERR_CUSTOM_NOT_ALLOW_CALL.code:
                code = statusConst.FORBIDDEN.code;
                break;
            case errConst.ERR_CUSTOM_INVALID_ACCESS.code:
                code = statusConst.UNAUTHORIZED.code;
                break;
            case errConst.ERR_CUSTOM_UNAUTHORIZED.code:
                code = statusConst.UNAUTHORIZED.code;
                break;
            case errConst.ERR_FORBIDDEN.code:
                code = statusConst.FORBIDDEN.code;
                break;
            case errConst.ERR_OK_WARNING.code:
                code = statusConst.OK.code;
                break;
            default:
                code = statusConst.INTERNAL_SERVER_ERROR.code;
        }
    }
    return code;
}

function setReqStartTime(res) {
    res.reqStartTime = new Date();
}

function getReqStartTime(res) {
    return res.reqStartTime;
}

function setReqEndTime(res) {
    res.reqEndTime = new Date();
}

function getReqEndTime(res) {
    return res.reqEndTime;
}

function setResTime(res, resTime) {
    res.reponseTime = resTime;
}

function deepTrim(obj) {
    try{
        obj = JSON.parse(JSON.stringify(obj).replace(/\s+"/g,'"'))
    }catch (error) {
        return obj
    }
    
    return obj
}

function searchField(obj, field) {
    if (obj) return _.isArray(obj) ? !_.isNil(obj.find(item => searchField(item, field))) : !_.isNil(obj[field]);
    return false;
}

function fetchErrMsg(obj, depth) {
    if (depth > 0) {
        if (_.isArray(obj)) {
            for (let item of obj) {
                let found = fetchErrMsg(item, depth - 1);
                if (!_.isNil(found))
                    return found;
            }
        }
        return _.get(obj, 'as_err_msg');
    }
    return null;
}