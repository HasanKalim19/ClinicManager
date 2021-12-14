const BaseController = require('../../Base/controller');
const {createJWT} = require('../../Helpers/utils');
const HospitalsServices = require('./services');
const {
    successResponse,
    failureResponse,
    insufficientParameters,
    internalServerError,
    dbError
} = require('../../Helpers/response');

class HospitalsController extends BaseController {
    constructor() {
        super()
    }
    async create(req, res) {
        try {
            const DTO = req.body
            await HospitalsServices.create(DTO).then(data => {
                return successResponse("create Hospitals successfully", data.toJSON(), res)
            }).catch(error => {
                return dbError(error, res)
            })
        } catch (error) {
            return internalServerError(error.message, error, res)
        }

    }
    async findAll(req, res) {
        try {
            const country_id = parseInt(req.query.country_id||0)
            const city_id = parseInt(req.query.id||0)
            await HospitalsServices.findAll(city_id,country_id).then(data => {
                return successResponse("find all Hospitals successfully", data, res)
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
            await HospitalsServices.update(DTO).then(data => {
                return successResponse(`update Hospitals id : ${DTO.id} successfully`, Boolean(data[0]), res)
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
            await HospitalsServices.destroy(id).then(data => {
                return successResponse(`destroy Hospitals id : ${id} successfully`, Boolean(data), res)
            }).catch(error => {
                return dbError(error, res)
            })
        } catch (error) {
            return internalServerError(error.message, error, res)
        }

    }

}


module.exports = new HospitalsController()
