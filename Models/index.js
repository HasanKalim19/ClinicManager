const {Cities} = require('./cities');
const {Countries} = require('./country')
const {Hospitals} = require('./hospitals')
const {Users} = require('./users')
const {DoctorCategories} = require('./doctorCategories')
const tables = (alter, force, action) => {

    if (action) {
       
        Countries.sync({alter: alter, force: force})
        Countries.hasMany(Cities, {foreignKey: 'country_id'})
        Cities.sync({alter: alter, force: force})
        Countries.hasMany(Hospitals, {foreignKey: 'country_id'})
        Cities.hasMany(Hospitals, {foreignKey: 'city_id'})
        Hospitals.sync({alter: alter, force: force})
        Users.sync({alter: alter, force: force})
        DoctorCategories.sync({alter: alter, force: force})

    }

};

module.exports = {
    tables
}
