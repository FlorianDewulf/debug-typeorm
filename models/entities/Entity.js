module.exports = class Entity {
  set (data) {
    if (typeof data !== 'undefined') {
      for (let index in data) {
        if (typeof this[index] !== 'undefined') {
          this[index] = data[index]
        }
      }
    }

    return this
  }
}
