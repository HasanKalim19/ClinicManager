const {DoctorCategories} = require('../../Models/doctorCategories')
const dbHelper = require('../../Helpers/dbHelper')
const dbConnection = require('../../dbService')
var Sequelize = require('sequelize');
// const dbConnection = require('../../dbService')


class DoctorCategoriesServices {
    constructor() {}
    async create(DTO) {
        try { // await dbConnection().sync();
            return await DoctorCategories.create(DTO);
        } catch (error) {
            throw error
        }
    }
    async findAll(id) {
        try { 
            // let query = `SELECT h.* , ci.name AS city_name ,c.name as country_name FROM DoctorCategories AS h  LEFT JOIN cities AS ci  ON h.city_id =ci.id LEFT JOIN countries AS c ON h.country_id = c.id`
            // query =  (city_id|| country_id) ? query += ` Where h.city_id =${city_id} OR h.country_id =${country_id}   ` : query;
            // return await dbConnection().query(query, {type: Sequelize.QueryTypes.SELECT});
        return id ? await DoctorCategories.findByPk(id) : await DoctorCategories.findAll();

        } catch (error) {
            throw error.message
        }

    }
    async update(DTO) {
        try { // // console.log(DTO)
            return await DoctorCategories.update(dbHelper.addUpdatedTimestamps(DTO), {
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
            return await DoctorCategories.destroy({
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
module.exports = new DoctorCategoriesServices()
