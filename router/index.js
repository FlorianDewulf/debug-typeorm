const parentRoute = require('./parentRoute')
const childRoute = require('./childRoute')

module.exports = {
  getRoutes: () => {
    return [
      parentRoute,
      childRoute
    ]
  }
}
