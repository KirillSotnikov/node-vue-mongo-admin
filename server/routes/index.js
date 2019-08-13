const express = require('express')
const router = express.Router();
const multer = require('multer')
const formidable = require('formidable')

const {ImageDB} = require('../models/db')

const storage = multer.diskStorage({
  destination (req, file,cb) {
    cb(null, './uploads/')
  },
  filename(req, file,cb) {
    cb(null, new Date().toISOString() + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  // reject a file
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    cb(null, true)
  } else {
    cb(new Error("Format error"), false)
  }
}

const upload = multer({
  storage: storage, 
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
})

const createImage = async (data) => {
  const imageItem = await new ImageDB(data)

  const dbCall = await imageItem.save()
}

const ctrlTeam = require('../controllers/team')
const ctrlUser = require('../controllers/user')
const ctrlImages = require('../controllers/images')

router.get('/get-team', ctrlTeam.getData)
router.post('/add-team', ctrlTeam.addTeam)
router.post('/delete-team', ctrlTeam.deleteTeam)
router.post('/edit-team', ctrlTeam.editTeam)
router.post('/toggle-show-team', ctrlTeam.toggleShowTeam)

router.post('/add-user', ctrlUser.addUser)
router.post('/login-user', ctrlUser.loginUser)

router.post('/get-user-info', ctrlUser.getUserInfo)


router.post('/get-user-token', ctrlUser.getUserToken)
router.post('/update-user-info', ctrlUser.updateUserInfo)


router.get('/get-images', ctrlImages.getImages)
router.post('/delete-image', ctrlImages.deleteImage)


router.post('/add-image', upload.single('img'), (req, res, next) => {
  
  let imageData = {
    image: req.file.path
  }
  createImage(imageData)
  res.json({success: true, imagePath: req.file.path})
})



module.exports = router