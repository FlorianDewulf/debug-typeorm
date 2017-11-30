const Entity = require('./Entity')

class Page extends Entity {
  constructor (data) {
    super()
    // default
    this.url = ''
    this.page_title = ''

    this.set(data)
  }
}

module.exports = Page
