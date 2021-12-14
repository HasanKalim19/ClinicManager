const Countries = require('./Countries/router')
const Cities = require('./Cities/router')
const Hospitals = require('./Hospitals/router')
const Users = require('./Users/router')
const DoctorCategories = require('./DoctorCategories/router')
const ROUTERS = [Countries, Cities,Hospitals,Users,DoctorCategories]


const registerRouters = (app) => ROUTERS.map(router => app.use('/api', router));

module.exports = registerRouters;
