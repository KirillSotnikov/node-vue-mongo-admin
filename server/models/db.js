require('dotenv').config()
const urlDB = 'mongodb+srv://'+ process.env.DB_USER +':'+process.env.DB_PASS+'@mongovue-voe6y.mongodb.net/vueAdmin?retryWrites=true&w=majority'

const mongoose = require('mongoose')

let Schema = mongoose.Schema;

mongoose.connect(urlDB, {useNewUrlParser: true})
.then(() => {
  console.log('DB connected')
})
.catch(err => console.log(555, err, 555))

const db = mongoose.connection;

const UserSchema = new Schema({
  login: { type: String },
  password: String,
  token: {
    type: String,
  }
})

const User = mongoose.model('User', UserSchema)

const teamSchema = new Schema({
  id: {type: String, required: true},
  isShow: Boolean,
  editLink: String,
  ru: Object,
  ua: Object,
  en: Object
})

const Team = mongoose.model('Team', teamSchema)

const imageSchema = new Schema({
  image: {
    type: String,
    required: true
  }
})

const ImageDB = mongoose.model('ImageDB', imageSchema)

module.exports = {
  Team,
  User,
  ImageDB
}