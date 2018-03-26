const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const DB_URL = 'mongodb://60.205.179.15:27017/qidian';

// 连接数据库
mongoose.connect(DB_URL, (err, db) => {
  if (!err) {
    console.log('connected success');
  } else {
    console.log('connected fail');
  }
});

const models = {
  user: {
    name: String,
    age: Number,
    sex: String,
    birthday: String,
    avatar: String,
    create_time: { type: Number, require: true },
  },
  article: {
    title: { type: String, require: false },
    content: { type: String, require: true },
    author: { type: String, require: true },
    tags: { type: String, require: false },
    create_time: { type: Number, require: true },
  },
};

for (const m in models) {
  if (Object.prototype.hasOwnProperty.call(models, m)) {
    mongoose.model(m, new mongoose.Schema(models[m]));
  }
}

module.exports = {
  getModel(name) {
    return mongoose.model(name);
  },
};
