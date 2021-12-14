const {Hospitals} = require('../../Models/hospitals')
const dbHelper = require('../../Helpers/dbHelper')
const dbConnection = require('../../dbService')
var Sequelize = require('sequelize');
// const dbConnection = require('../../dbService')


class HospitalsServices {
    constructor() {}
    async create(DTO) {
        try { // await dbConnection().sync();
            return await Hospitals.create(DTO);
        } catch (error) {
            throw error
        }
    }
    async findAll(city_id,country_id) {
        try { // return id ? await Hospitals.findByPk(id) : await Hospitals.findAll();
            let query = `SELECT h.* , ci.name AS city_name ,c.name as country_name FROM hospitals AS h  LEFT JOIN cities AS ci  ON h.city_id =ci.id LEFT JOIN countries AS c ON h.country_id = c.id`
            query =  (city_id|| country_id) ? query += ` Where h.city_id =${city_id} OR h.country_id =${country_id}   ` : query;
            return await dbConnection().query(query, {type: Sequelize.QueryTypes.SELECT});


        } catch (error) {
            throw error.message
        }

    }
    async update(DTO) {
        try { // // console.log(DTO)
            return await Hospitals.update(dbHelper.addUpdatedTimestamps(DTO), {
                where: {
                    id: DTO.id
                }
            })

        } catch (error) {
            console.log(error)
            throw error
        }

    }
    async destroy(id) {
        try {
            return await Hospitals.destroy({
                where: {
                    id: id
                }
            })
        } catch (error) {
            console.log(error)
            throw error
        }

    }
}

/**Post.destroy({
  where: {
    authorId: {
      [Op.or]: [12, 13]
    }
  } */
module.exports = new HospitalsServices()
