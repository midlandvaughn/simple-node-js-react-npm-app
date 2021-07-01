module.exports = {
    ERR_CUSTOM_LOGIN_FAILED: { id: 'ERR00001', code: 'ERR00001', msg: 'Login failed' }
    , ERR_CUSTOM_INVALID_JWT: { id: 'ERR00002', code: 'ERR00002', msg: 'Invalid access token' }
    , ERR_CUSTOM_UNAUTHORIZED: { id: 'ERR00003', code: 'ERR00003', msg: 'unauthorized' }
    , ERR_CUSTOM_MISSING_JWT: { id: 'ERR00004', code: 'ERR00004', msg: 'missing jwt' }
    , ERR_CUSTOM_INVALID_ACCESS: { id: 'ERR00005', code: 'ERR00005', msg: 'invalid access' }
    , ERR_CUSTOM: { code: 'ERR00006', msg: 'ERR_CUSTOM' }
    , ERR_CUSTOM_INVALID_QUERY_PARAMS: { code: 'ERR00007', msg: 'err_custom_invalid_query_params' }
    , ERR_CUSTOM_STOCK_NOT_FOUND: { code: 'ERR00008', msg: 'err_custom_stock_not_found' }
    , ERR_CUSTOM_VENDOR_NOT_FOUND: { code: 'ERR00009', msg: 'err_custom_vendor_not_found' }
    , ERR_CUSTOM_COMMISSION_NOT_FOUND: { code: 'ERR00010', msg: 'err_custom_commission_not_found' }
    , ERR_CUSTOM_MEMO_NOT_FOUND: { code: 'ERR00011', msg: 'err_custom_memo_not_found' }
    , ERR_CUSTOM_LOG_NOT_FOUND: { code: 'ERR00012', msg: 'err_custom_log_not_found' }
    , ERR_CUSTOM_FAVOUR_NOT_FOUND: { code: 'ERR00013', msg: 'err_custom_favour_not_found' }
    , ERR_CUSTOM_NOT_ENOUGH_DEVICE_REGISTER_INFO: { code: 'ERR00014', msg: 'err_custom_not_enough_device_register_info' }
    , ERR_CUSTOM_EXCEED_DEVICE_LIMIT: { code: 'ERR00015', msg: 'err_custom_exceed_device_limit' }
    , ERR_CUSTOM_EXCEED_TEXT_LIMIT: { code: 'ERR00016', msg: 'err_custom_exceed_text_limit' }
    , ERR_CUSTOM_MESSAGE_NOT_FOUND: { code: 'ERR00017', msg: 'err_custom_message_not_found' }
    , ERR_CUSTOM_NOT_ALLOW_CALL: { code: 'ERR00018', msg: 'err_custom_not_allow_call' }
    , ERR_CUSTOM_CONTACT_NOT_FOUND: { code: 'ERR00019', msg: 'err_custom_contact_not_found' }
    , ERR_CUSTOM_LOG_CUSTOMER_CALL_FAIL: { code: 'ERR00020', msg: 'err_custom_log_customer_call_fail' }
    , ERR_CUSTOM_NO_DOMAIN_FOUND: { code: 'ERR00021', msg: 'err_custom_no_permission' }
    , ERR_CUSTOM_INVALID_LOGIN: { code: 'ERR00022', msg: 'err_custom_invalid_login' }
    , ERR_CUSTOM_INVALID_INPUT: { code: 'ERR00023', msg: '輸入格式錯誤' }
    , ERR_FORBIDDEN: { code: 'ERR00024', msg: 'Not allowed to perform operation' }
    , ERR_INTERNAL_SERVER_ERR: { code: 'ERR00025', msg: 'Interanl Server Error' }

    // for phone call api
    , ERR_CUSTOM_CALL_REQ_LOGIN_FAILED: { code: 'ERR10001', msg: 'err_custom_call_req_login_failed' }
    , ERR_CUSTOM_CALL_THROUGH_FAILED: { code: 'ERR10002', msg: 'err_custom_call_through_failed' }
    , ERR_CUSTOM_CALL_SET_MOBILITY_FAILED: { code: 'ERR10003', msg: 'err_custom_call_set_mobility_failed' }
    , ERR_CUSTOM_CALL_BRIDGE_FAILED: { code: 'ERR10004', msg: 'err_custom_call_set_click_to_call_failed' }
    , ERR_CUSTOM_CALL_SET_FORWARD_NO_ANSWER_FAILED: { code: 'ERR10005', msg: 'err_custom_call_set_forward_no_answer_failed' }
    , ERR_CUSTOM_CALL_SET_FORWARD_BUSY_FAILED: { code: 'ERR10006', msg: 'err_custom_call_set_forward_busy_failed' }
    , ERR_CUSTOM_CALL_SET_FORWARD_ALWAYS_FAILED: { code: 'ERR10007', msg: 'err_custom_call_set_forward_always_failed' }
    , ERR_CUSTOM_CALL_VIRTUAL_PHONE_NOT_FOUND: { code: 'ERR10008', msg: 'err_custom_call_virtual_phone_not_found' }

    // for application error
    , ERR_APP_OTHERS: { code: 'ERR20001', msg: 'err_app_others' }
    , ERR_OK_WARNING: { code: 'ERR20002' }
};