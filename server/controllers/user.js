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
        token: token
      }
      await createNewUser(user)
      res.json({token: token})
    }
  } catch(err) {
    console.log(err)
    throw new Error(err)
  }
}

module.exports.loginUser = async(req, res) => {
  try{
    let userData = await User.find({login: req.body.login, password: req.body.password})
    let token = userData[0].token
    res.json({token: token})
  } catch(err) {
    console.log(err)
    throw new Error(err)
  }
}

module.exports.getUserToken = async(req, res) => {
  // console.log(req.body.token)
  const checkToken = await User.find({token: req.body.token})
  // console.log(checkToken)
  if(checkToken.length != 0) {
    res.json({success: true})
  } else {
    res.status(401).json({msg:'Login is not correct'})
  }
}