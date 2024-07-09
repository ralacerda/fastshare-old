/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nquif46kwh0yln5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5mbrwx5h",
    "name": "shortID",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nquif46kwh0yln5")

  // remove
  collection.schema.removeField("5mbrwx5h")

  return dao.saveCollection(collection)
})
