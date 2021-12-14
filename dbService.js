
const Sequelize = require('sequelize')
const {envLocal} = require('./Base/config');
const DB_NAME =  envLocal.database// process.env.DB_NAME;
const DB_USERNAME = envLocal.username// process.env.DB_USERNAME;
const DB_PASSWORD = envLocal.password//process.env.DB_PASSWORD;

console.log("DBB", DB_USERNAME, DB_NAME, DB_PASSWORD)

const getConnection = () => {
    let sequelize = null;
    return () => {
        if (sequelize) {
            return sequelize
        }
        console.log("proces.env inside", process.env.PORT)
        try {
            sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
                host: envLocal.host,
                dialect:'mysql', // process.env.ENV === 'dev' ? 'mysql' : 'mariadb',
                port:envLocal.port,
                logging:true
            });

            sequelize.authenticate().then(() => { }).catch(err => {
                console.log("mysql error", err)
            })

            return sequelize

        } catch (err) {
            console.log(`error while connecting db err= ${err}`)
        }

    }
}


module.exports = getConnection()
