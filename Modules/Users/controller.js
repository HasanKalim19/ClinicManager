const BaseController = require('../../Base/controller');
const {createJWT} = require('../../Helpers/utils');
const UsersServices = require('./services');
const {
    successResponse,
    failureResponse,
    insufficientParameters,
    internalServerError,
    dbError
} = require('../../Helpers/response');

class UsersController extends BaseController {
    constructor() {
        super()
    }
    async create(req, res) {
        try {
            const DTO = req.body
            await UsersServices.create(DTO).then(data => {
                return successResponse("create Users successfully", data.toJSON(), res)
            }).catch(error => {
                return dbError(error, res)
            })
        } catch (error) {
            return internalServerError(error.message, error, res)
        }

    }
    async findAll(req, res) {
        try {
            // const country_id = parseInt(req.query.country_id||0)
            const id = parseInt(req.query.id||0)
            await UsersServices.findAll(id).then(data => {
                return successResponse("find all Users successfully", data, res)
            }).catch(error => {
                return dbError(error, res)
            })
        } catch (error) {
            return internalServerError(error.message, error, res)
        }

    }
    async update(req, res) {
        try {
            const DTO = req.body
            await UsersServices.update(DTO).then(data => {
                return successResponse(`update Users id : ${DTO.id} successfully`, Boolean(data[0]), res)
            }).catch(error => {
                return dbError(error, res)
            })
        } catch (error) {
            return internalServerError(error.message, error, res)
        }

    }
    async destroy(req, res) {
        try {
            const id = req.query.id
            await UsersServices.destroy(id).then(data => {
                return successResponse(`destroy Users id : ${id} successfully`, Boolean(data), res)
            }).catch(error => {
                return dbError(error, res)
            })
        } catch (error) {
            return internalServerError(error.message, error, res)
        }

    }

}


module.exports = new UsersController()
