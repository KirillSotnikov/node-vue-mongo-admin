const { getToken } = require('../libs/utils')

const {User} = require('../models/db')

const createNewUser = async (data) => {
  
  const userDB = await new User(data)
  // console.log('userDB', userDB);
  
  const dbCall = await userDB.save()
  // console.log('dbCall', dbCall);
  
}

module.exports.addUser = async (req, res, next) => {
  try{
    let userData = await User.find({login: req.body.login})
    let token = getToken()
    
    // let unicId = '_' + Math.random().toString(36).substr(2, 9)
    if(userData.length !== 0) {
      res.status(401).json({msg:'Login is already exists'})
    } else {
      const user = {
        // id: unicId,
        login: req.body.login,
        password: req.body.password,
        token: token
      }

      console.log(user);
      
      
      await createNewUser(user)
      res.json({token: token})
    }
    
  } catch(err) {
    console.log(err)
    // throw new Error(err)
  }
}

module.exports.loginUser = async(req, res) => {
  try{
    let userData = await User.find({login: req.body.login, password: req.body.password})
    let token = userData[0].token
    res.json({token: token})
  } catch(err) {
    res.json({message: 'User is not defined'})
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

module.exports.updateUserInfo = async (req, res) => {
  console.log(req)
  await User.updateOne({token:req.body.token}, {$set: {
    login: req.body.login,
    password: req.body.password
  }})
  // await Team.updateOne({id: pageId}, {$set: {
  //   isShow : req.body.isShow, 
  //   editLink: req.body.editLink,
  //   ru: req.body.ru,
  //   ua: req.body.ua,
  //   en: req.body.en,
  // }})
}

module.exports.getUserInfo = async (req, res) => {
  try{
    let userToken = req.body.token
    let { login, password } = await User.findOne({token: userToken})
    res.json({login, password})
  } catch(err) {
    console.log(err)
    throw new Error(err)
  }
}