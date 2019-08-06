const {Team} = require('../models/db')

const createNewWorker = async (data) => {
  const teamItem = await new Team(data)

  const dbCall = await teamItem.save()
}

module.exports.getData = async function(req, res) {
  let teamData = await Team.find()
  // teamData = JSON.stringify(teamData)
  // console.log(teamData);

  res.status(200).json({data: teamData})
}

module.exports.addTeam = async function(req, res) {
  createNewWorker(req.body)
  res.json({success:true})
}

module.exports.deleteTeam = async function(req, res) {
  // console.log(req)
  await Team.remove({id: req.body.id})
  res.json({success: true})
}

module.exports.editTeam = async function(req, res) {
  const pageId = req.body.id

  await Team.updateOne({id: pageId}, {$set: {
    isShow : req.body.isShow, 
    editLink: req.body.editLink,
    ru: req.body.ru,
    ua: req.body.ua,
    en: req.body.en,
  }})

  res.json({success:true})
}

module.exports.toggleShowTeam = async function(req, res) {
  const pageId = req.body.id
  await Team.updateOne({id: pageId}, {$set: {
    isShow: req.body.isShow
  }})
  res.json({success:true})
}