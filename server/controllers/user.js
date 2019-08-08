const { getToken } = require('../libs/utils')

const {User} = require('../models/db')

const createNewUser = async (data) => {
  const userDB = await new User(data)

  const dbCall = await userDB.save()
}

module.exports.addUser = async (req, res, next) => {
  try{
    let userData = await User.find({login: req.body.login})
    let token = getToken()
    if(userData.length !== 0) {
      res.status(401).json({msg:'Login is already exists'})
    } else {
      const user = {
        login: req.body.login,
        password: req.body.password,
        isAuthorized: true
      }
      // await createNewUser(user)
      res.json({token: token})
    }
  } catch(err) {
    console.log(err)
    throw new Error(err)
  }
}