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
  login: String,
  password: String,
  token: String
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

// createTeamInfo = async() => {
//   const teamInfo = await new Team({
//     isShow: true,
//     id: 7,
//     editLink: '/editTeam',
//     ru: {
//       name: "SEVEN",
//       salary: "$36,738",
//       country: "Niger",
//       city: "Oud-Turnhout"
//     }, 
//     ua: {
//       name: "SEVEN",
//       salary: "$36,738",
//       country: "Niger",
//       city: "Oud-Turnhout"
//     },
//     en: {
//       name: "SEVEN",
//       salary: "$36,738",
//       country: "Niger",
//       city: "Oud-Turnhout"
//     }
//   })
//   const dbCall = await teamInfo.save()
// }

// createTeamInfo()


module.exports = {
  Team,
  User
}