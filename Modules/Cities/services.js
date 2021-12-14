const {Cities} = require('../../Models/cities')
var Sequelize = require('sequelize');
const dbHelper = require('../../Helpers/dbHelper')
const dbConnection = require('../../dbService')
// const dbConnection = require('../../dbService')


class CitiesServices {
    constructor() {}
    async create(DTO) {
        try { // 
            return await Cities.create(DTO);
        } catch (error) {
            throw error
        }
    }
    async findAll(id) {
        try {
            let query = `SELECT ci.* ,c.name as country_name FROM cities AS ci LEFT JOIN countries AS c ON ci.country_id =c.id`
           id ? query +=` Where c.id =${id} ` : query;
            return   await dbConnection().query(query, { type: Sequelize.QueryTypes.SELECT });
           

        } catch (error) {
            throw error.message
        }

    }
    async update(DTO) {
        try {
    
          // console.log(DTO)
            return await Cities.update(dbHelper.addUpdatedTimestamps(DTO), {
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
           return await Cities.destroy({
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
module.exports = new CitiesServices()
