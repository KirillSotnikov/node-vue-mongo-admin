const express = require('express')
const router = express.Router();

const ctrlTeam = require('../controllers/team')
const ctrlUser = require('../controllers/user')

router.get('/get-team', ctrlTeam.getData)
router.post('/add-team', ctrlTeam.addTeam)
router.post('/delete-team', ctrlTeam.deleteTeam)
router.post('/edit-team', ctrlTeam.editTeam)
router.post('/toggle-show-team', ctrlTeam.toggleShowTeam)

router.post('/add-user', ctrlUser.addUser)
router.post('/login-user', ctrlUser.loginUser)


router.post('/get-user-token', ctrlUser.getUserToken)


module.exports = router