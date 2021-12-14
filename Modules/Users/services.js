const {Users} = require('../../Models/users')
const dbHelper = require('../../Helpers/dbHelper')
const dbConnection = require('../../dbService')
var Sequelize = require('sequelize');
// const dbConnection = require('../../dbService')


class UsersServices {
    constructor() {}
    async create(DTO) {
        try { // await dbConnection().sync();
            return await Users.create(DTO);
        } catch (error) {
            throw error
        }
    }
    async findAll(id) {
        try { // return id ? await Users.findByPk(id) : await Users.findAll();
            // let query = `SELECT h.* , ci.name AS city_name ,c.name as country_name FROM Users AS h  LEFT JOIN cities AS ci  ON h.city_id =ci.id LEFT JOIN countries AS c ON h.country_id = c.id`
            // query =  (city_id|| country_id) ? query += ` Where h.city_id =${city_id} OR h.country_id =${country_id}   ` : query;
            // return await dbConnection().query(query, {type: Sequelize.QueryTypes.SELECT});
            return id ? await Users.findByPk(id) : await Users.findAll();


        } catch (error) {
            throw error.message
        }

    }
    async update(DTO) {
        try { // // console.log(DTO)
            return await Users.update(dbHelper.addUpdatedTimestamps(DTO), {
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
            return await Users.destroy({
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
module.exports = new UsersServices()
