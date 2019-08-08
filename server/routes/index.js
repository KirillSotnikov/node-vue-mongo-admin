const express = require('express')
const router = express.Router();

const ctrlTeam = require('../controllers/team')
const ctrlUser = require('../controllers/user')



// router.post('/set-cookie-token', function(req, res,) {
//   // console.log(req.body.token)
//   token = req.body.token
//   res.cookie('token', token, {
//     expires: new Date(Date.now() + 9999999),
//     httpOnly: false
// }).status(200).send();
// })

router.get('/get-team', ctrlTeam.getData)
router.post('/add-team', ctrlTeam.addTeam)
router.post('/delete-team', ctrlTeam.deleteTeam)
router.post('/edit-team', ctrlTeam.editTeam)
router.post('/toggle-show-team', ctrlTeam.toggleShowTeam)

router.post('/add-user', ctrlUser.addUser)


module.exports = router