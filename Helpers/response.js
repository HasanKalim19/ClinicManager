const {ResponseStatusCodes} = require('../Lib/Enum/enum');
    function successResponse(message, data, res) {
        res.status(ResponseStatusCodes.success).json({status_code: ResponseStatusCodes.success, is_success: true, message: message, data});
    }
    
     function failureResponse(message, data, res) {
        res.status(ResponseStatusCodes.bad_request).json({status_code: ResponseStatusCodes.bad_request, is_success: true, message: message, data});
    }
    
     function insufficientParameters(data, res) {
        res.status(ResponseStatusCodes.bad_request).json({status_code: ResponseStatusCodes.bad_request, is_success: false, message: 'insufficient parameters!', data});
    }
     function internalServerError(message, err, res) {
        res.status(ResponseStatusCodes.internal_server_error).json({status_code: ResponseStatusCodes.internal_server_error, is_success: false, message: message, data: err});
    }
     function dbError(err, res) {
        res.status(ResponseStatusCodes.database_operation_failed).json({status_code: ResponseStatusCodes.database_operation_failed, is_success: false, message: 'mysql_db error!', data: err});
    }
    module.exports = {
        successResponse,
        failureResponse,
        insufficientParameters,
        internalServerError,
        dbError
    
    }
