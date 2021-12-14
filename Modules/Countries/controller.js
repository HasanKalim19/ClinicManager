const BaseController = require('../../Base/controller');
const {createJWT} = require('../../Helpers/utils');
const CountriesServices = require('./services');
const {
    successResponse,
    failureResponse,
    insufficientParameters,
    internalServerError,
    dbError
} = require('../../Helpers/response');

class CountriesController extends BaseController {
    constructor() {
        super()
    }
    async create(req, res) {
        try {
            const DTO = req.body
            await CountriesServices.create(DTO).then(data => {
                return successResponse("create Countries successfully", data.toJSON(), res)
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
            await CountriesServices.findAll(id).then(data => {
                return successResponse("find all Countries successfully", data, res)
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
            await CountriesServices.update(DTO).then(data => {
                return successResponse(`update Countries id : ${DTO.id} successfully`, Boolean(data[0]), res)
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
            await CountriesServices.destroy(id).then(data => {
                return successResponse(`destroy Countries id : ${id} successfully`, Boolean(data), res)
            }).catch(error => {
                return dbError(error, res)
            })
        } catch (error) {
            return internalServerError(error.message, error, res)
        }

    }

}


module.exports = new CountriesController()
