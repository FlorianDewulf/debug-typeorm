const { getRepository } = require('typeorm')
const Page = require('../models/entities/Page')

async function parent (request, h) {
  return new Promise((resolve, reject) => {
    try {
      getRepository(Page)
        .createQueryBuilder('pages')
        .leftJoinAndSelect('pages.parent', 'parent')
        .leftJoinAndSelect('pages.linked_pages', 'linked_pages')
        // .leftJoinAndSelect('pages.childrens', 'childrens')
        .where('pages.id = :id', { id: 1 })
        .getOne()
        .then((page) => {
          console.log(page)
          resolve(typeof page === 'undefined' ? {} : page)
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    } catch (e) {
      console.log(e)
    }
  })
}
async function child (request, h) {
  return new Promise((resolve, reject) => {
    try {
      getRepository(Page)
        .createQueryBuilder('pages')
        .leftJoinAndSelect('pages.parent', 'parent')
        .leftJoinAndSelect('pages.linked_pages', 'linked_pages')
        // .leftJoinAndSelect('pages.childrens', 'childrens')
        .where('pages.id = :id', { id: 2 })
        .getOne()
        .then((page) => {
          console.log(page)
          resolve(typeof page === 'undefined' ? {} : page)
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    } catch (e) {
      console.log(e)
    }
  })
}

module.exports = {
  parent,
  child
}
