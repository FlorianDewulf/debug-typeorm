const Page = require('../entities/Page')

module.exports = {
  target: Page,
  table: {
    name: 'pages'
  },
  columns: {
    id: {
      primary: true,
      type: 'integer',
      generated: true
    },
    url: {
      type: 'varchar',
      unique: true
    },
    page_title: {
      type: 'varchar',
      nullable: true
    }
  },
  relations: {
    parent: {
      target: () => Page,
      type: 'many-to-one',
      joinColumn: true
    },
    // childrens: {
    //   target: () => Page,
    //   type: 'one-to-many',
    //   joinColumn: {
    //     name: 'parentId',
    //     referencedColumnName: 'id'
    //   }
    // },
    linked_pages: {
      target: () => Page,
      type: 'many-to-many',
      joinTable: {
        name: 'link_pages',
        joinColumn: {
          name: 'reference_page_id',
          referencedColumnName: 'id'
        },
        inverseJoinColumn: {
          name: 'linked_page_id',
          referencedColumnName: 'id'
        }
      }
    }
  }
}
