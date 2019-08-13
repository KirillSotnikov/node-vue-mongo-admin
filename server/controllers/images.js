const {ImageDB} = require('../models/db')

const fs = require('fs')
const path = require('path')

module.exports.getImages = async (req, res) => {
  let images = await ImageDB.find()
  res.status(200).json({data: images})
}

module.exports.deleteImage = async (req, res) => {
  let imageSrc = req.body.image
  // const uploadPath = `../${imageSrc}`
  const uploadPath = path.join(__dirname, '../', imageSrc)
  // console.log(uploadPath)
  try {
    fs.unlinkSync(uploadPath)

    await ImageDB.remove({image: imageSrc})
    res.json({success:true})
    //file removed
  } catch(err) {
    console.error(err)
  }
}