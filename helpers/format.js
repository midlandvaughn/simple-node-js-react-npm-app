const iconvLite = require("iconv-lite");
const errConst = require('../constants/error');
const statusConst = require('../constants/status');
const camelcaseKeys = require('camelcase-keys');
const _ = require('lodash');

function frmValueWithComma(value) {
    return value ? frmDcmValWithComma(value.toFixed()) : '';
}

function frmDcmValWithComma(value) {
    let result = '';
    if (value) {
        let intValStr = '', decValStr = '';
        let valStr = (parseFloat(value)).toString();
        if (valStr.indexOf('.') == -1) {
            intValStr = valStr;
        }
        else {
            intValStr = valStr.split('.')[0];
            decValStr = valStr.split('.')[1];
        }
        intValStr = intValStr.replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,');
        result = intValStr + (decValStr != '' ? '.' : '') + decValStr;
    }

    return result;

}

function getDisplayVal(value) {
    let displayValue;
    if (value >= 100000000) {
        displayValue = value / 100000000;
    } else if (value >= 10000 && value < 100000000) {
        displayValue = value / 10000;
    } else // < 10000
    {
        displayValue = value;
    }
    return displayValue;
}

module.exports = {
    frmRes(status, errCode, errMsg, data) {
        let _errMsg = '';
        if (errMsg) {
            if (errMsg.stack)
                _errMsg = errMsg.stack;
            else if (errMsg.message)
                _errMsg = errMsg.message;
            else if (errMsg)
                _errMsg = errMsg;

        }

        if (data === '') {
            if (errCode == errConst.ERR_CUSTOM_MEMO_NOT_FOUND.code)
                data = [];
            else
                data = {};
        }

        let success = status === statusConst.SUCCESS || _.get(status, 'code', 500) < 400 || _.get(status, 'code', errConst.ERR_OK_WARNING.code);
        let json = { status: success ? statusConst.SUCCESS : statusConst.FAIL, err_code: errCode, err_msg: _errMsg };

        if (success) {
            json.data = data;
        } else {
            json.err_details = data;
            json.data = null;
        }

        return JSON.stringify(json);

    },

    convertEncoding(string, fromEncode, toEncode) {
        let encodedData = iconvLite.encode(string, fromEncode);
        let decodedData = iconvLite.decode(encodedData, toEncode);
        return decodedData;

    }

    , frmStockId(value) {
        return value ? value.padEnd(10) : '';
    }
    , frmPropRefId(value) {
        return value ? value.padEnd(20) : '';
    }
    , frmStockKey(value) {
        return value ? value.padEnd(48) : '';
    }
    , frmDomainId(value) {
        return value ? value.padEnd(12) : '';
    }
    , frmDeptId(value) {
        return value ? value.padEnd(10) : '';
    }
    , frmDeptCode(value) {
        return value ? value.padEnd(10) : '';
    }
    , frmDistCode(value) {
        return value ? value.padEnd(10) : '';
    }
    , frmUserId(value) {
        return value ? value.padEnd(12) : '';
    }
    , frmEmpId(value) {
        return value ? value.padEnd(12) : '';
    }
    , frmClientId(value) {
        return value ? value.padEnd(10) : '';
    }
    , frmClientGrpId(value) {
        return value ? value.padEnd(10) : '';
    }
    , frmEstId(value) {
        return value ? value.padEnd(10) : '';
    }
    , frmBldgId(value) {
        return value ? value.padEnd(10) : '';
    }
    , frmFlat(value) {
        return value ? value.padEnd(80) : '';
    }
    , frmFloor(value) {
        return value ? value.padEnd(80) : '';
    }
    , frmNull(value) {
        return value ? value : '';
    }
    , frmEmpty(value) {
        return !_.isNil(value) && _.isEmpty(value) ? ' ' : value;
    }
    , frmPrintId(value) {
        return value ? value.padEnd(10) : '';
    }

    , frmPercent(value) {
        return value ? value.toFixed(2) * 100 + '%' : '';
    }
    , frmValueWithComma
    , frmDcmValWithComma
    , frmMoney(value) {
        return value ? '$' + this.frmValueWithComma(value) : '';
    }
    , frmDcmMoney(value) {
        return value ? '$' + this.frmDcmValWithComma(value) : '';
    }
    , frmMoneyWithUnit(value) {
        let displayValue = getDisplayVal(value);
        return value ? '$' + this.frmValueWithComma(displayValue) : '';
    }
    , frmDcmMoneyWithUnit(value) {
        let displayValue = getDisplayVal(value);
        return value ? '$' + this.frmDcmValWithComma(displayValue) : '';
    }
    , frmUnit(value) {
        let unit;
        let unitNameM = '萬';
        let unitNameY = '億';

        if (value >= 100000000) {
            unit = unitNameY;
        } else if (value >= 10000 && value < 100000000) {
            unit = unitNameM;
        } else // < 10000
        {
            unit = '';
        }

        return unit;
    }
    , frmArea(value) {
        return value ? this.frmValueWithComma(value) + "'" : '';
    }
    , frmOrientation(value) {
        let orientation = '';
        value = value ? value.trim() : '';
        switch (value) {
            case 'E':
                orientation = "東";
                break;
            case 'SE':
                orientation = "東南";
                break;
            case 'S':
                orientation = "南";
                break;
            case 'SW':
                orientation = "西南";
                break;
            case 'W':
                orientation = "西";
                break;
            case 'NW':
                orientation = "西北";
                break;
            case 'N':
                orientation = "北";
                break;
            case 'NE':
                orientation = "東北";
                break;
        }
        return orientation;
    }
    , frmRequestBody(reqBody) {
        let formatedReqBody = camelcaseKeys(reqBody, { deep: true });
        return formatedReqBody;
    }
    , frmRequestQuery(reqQuery) {
        let formatedReqQuery = camelcaseKeys(reqQuery, { deep: true });
        return formatedReqQuery;
    }
    , bool2String(x) {
        return _.isBoolean(x) && x ? 'Y' : 'N';
    }
    , isBool2String(x) {
        return _.isBoolean(x) ? x ? 'Y' : 'N' : null;
    }
    , frmDistId(value) {
        return value ? value.padEnd(10) : '';
    }
    , frmRegionId(value) {
        return value ? value.padEnd(10) : '';
    }
    , frmEstId(value) {
        return value ? value.padEnd(10) : '';
    }
    , frmProposalId(value) {
        return value ? value.padEnd(10) : '';
    }
    , frmStreetId(value) {
        return value ? value.padEnd(10) : '';
    }
    , DDMMYYYY(value) {
        let date;
        if (value instanceof Date) {
            date = value;
        }
        if (typeof value == 'string') {
            date = new Date(value);
        }
        if (date instanceof Date)
            return `${date.getDate()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
        else
            return '';
    }
    , nextDay(dateStr) { // 1991-01-01
        if (!!dateStr) {
            let date = new Date(dateStr)
            date.setDate(date.getDate() + 1)
            return date
        }
        return new Date()
    }

};


