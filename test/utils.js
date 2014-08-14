module.exports = Utils = function() {
  var mongodb = require('mongodb')
    , Db = mongodb.Db
    , Server = mongodb.Server
    , Store = mongodb.GridStore
    , db = new Db('simaya-test', new Server("127.0.0.1", 27017, {auto_reconnect: true, native_parser: true}), {j:true})
    , ObjectID = mongodb.ObjectID

  var sinergisVar = {
    version: '0.4',
    appName: 'siMAYA'
  }

  var app = {
    db: function(modelName) {
      return db.collection(modelName);
    }
    , ObjectID: ObjectID
    , store: function(fileId, name, mode, options) {
        return new Store(db, fileId, name || "empty", mode || 'w', options || {});
      }
    , get : function(key){
      if(key == 'sinergisVar') return sinergisVar
    }
  };

  return {
    app: app,
    db: db,
  }
}()

