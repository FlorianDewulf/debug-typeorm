const router = require('./router')
const connection = require('./connection')

const Hapi = require('hapi')
const server = new Hapi.Server({
  host: '0.0.0.0',
  port: 3000
})

router.getRoutes().forEach((routeBinding) => {
  server.route({
    method: routeBinding.method,
    path: routeBinding.path,
    handler: routeBinding.controller[routeBinding.action]
  })
})

connection.initialize().then(() => {
  server.start().then(() => {
    console.log(`Server running at: ${server.info.uri}`)
  }).catch((err) => {
    console.log(err)
  })
}).catch((error) => {
  console.log('catch', error)
})
