/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nquif46kwh0yln5")

  // remove
  collection.schema.removeField("oyq2lt7d")

  // remove
  collection.schema.removeField("wpezn4dy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cii2h8yo",
    "name": "shortid",
    "type": "text",
    "required": false,
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oyq2lt7d",
    "name": "title",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wpezn4dy",
    "name": "owner",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("cii2h8yo")

  return dao.saveCollection(collection)
})
