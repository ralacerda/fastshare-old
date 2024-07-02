/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qoajqhyj2n51wlz")

  // remove
  collection.schema.removeField("yyhcf1z8")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qoajqhyj2n51wlz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yyhcf1z8",
    "name": "expiredate",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
