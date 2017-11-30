const typeorm = require('typeorm')
const Schemas = require('./models/schemas')

let instance = null

module.exports = {
  initialize () {
    return new Promise((resolve, reject) => {
      typeorm.createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: '',
        password: '',
        database: '',
        synchronize: true,
        logging: false,
        entitySchemas: Schemas
      }).then((db) => {
        instance = db
        resolve(db)
      }).catch((e) => {
        console.log('error connection', e)
        reject(e)
      })
    })
  },
  /* SINGLETON */
  getInstance () {
    return instance
  }
}
