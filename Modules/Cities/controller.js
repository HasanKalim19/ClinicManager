const BaseController = require('../../Base/controller');
const {createJWT} = require('../../Helpers/utils');
const CitiesServices = require('./services');
const {
    successResponse,
    failureResponse,
    insufficientParameters,
    internalServerError,
    dbError
} = require('../../Helpers/response');

class CitiesController extends BaseController {
    constructor() {
        super()
    }
    async create(req, res) {
        try {
            const DTO = req.body
            await CitiesServices.create(DTO).then(data => {
                return successResponse("create Cities successfully", data.toJSON(), res)
            }).catch(error => {
                return dbError(error, res)
            })
        } catch (error) {
            return internalServerError(error.message, error, res)
        }

    }
    async findAll(req, res) {
        try {
            const id = req.query.id
            await CitiesServices.findAll(id).then(data => {
                return successResponse("find all Cities successfully", data, res)
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
            await CitiesServices.update(DTO).then(data => {
                return successResponse(`update Cities id : ${DTO.id} successfully`, Boolean(data[0]), res)
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
            await CitiesServices.destroy(id).then(data => {
                return successResponse(`destroy Cities id : ${id} successfully`, Boolean(data), res)
            }).catch(error => {
                return dbError(error, res)
            })
        } catch (error) {
            return internalServerError(error.message, error, res)
        }

    }

}


module.exports = new CitiesController()
