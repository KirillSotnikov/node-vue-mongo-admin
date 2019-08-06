const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')

const {User} = require('../models/db')

const header = { "alg": "HS256", "typ": "JWT"}
const payload = { "userId": "b08f86af-35da-48f2-8fab-cef3904660bd" }

const SECRET_KEY = 'cAtwa1kkEy'
const unsignedToken = base64urlEncode(header) + '.' + base64urlEncode(payload)
const signature = HMAC-SHA256(unsignedToken, SECRET_KEY)

module.exports.addUser = (req, res, next) => {
  const token = encodeBase64Url(header) + '.' + encodeBase64Url(payload) + '.' + encodeBase64Url(signature)
  console.log(req)
  let token = jwt.sign({ foo: 'bar' }, 'shhhhh');
  res.json({success: true})
}