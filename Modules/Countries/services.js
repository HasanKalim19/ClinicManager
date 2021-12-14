const {Countries} = require('../../Models/country')
const dbHelper = require('../../Helpers/dbHelper')

// const dbConnection = require('../../dbService')


class CountriesServices {
    constructor() {}
    async create(DTO) {
        try { // await dbConnection().sync();
            return await Countries.create(DTO);
        } catch (error) {
            throw error
        }
    }
    async findAll(id) {
        try {
            return id ? await Countries.findByPk(id) : await Countries.findAll();

        } catch (error) {
            throw error
        }

    }
    async update(DTO) {
        try {
    
          // console.log(DTO)
            return await Countries.update(dbHelper.addUpdatedTimestamps(DTO), {
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
           return await Countries.destroy({
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
module.exports = new CountriesServices()
