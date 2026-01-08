const express = require('express')
const {userCreate, userGet, userGetbyId, userUpdate, userDelete} = require('../controller/useController')
const router = express.Router()
// const app = express()



router.route('/signup').post(userCreate)
router.route('/getUser').get(userGet)
router.route('/getUserById/:id').get(userGetbyId)
router.route('/update/:id').put(userUpdate)
router.route('/delete/:id').delete(userDelete)

module.exports = router




// app.post('/signup',async (req,res) =>{
//     const {name,email,password} = req.body

//     const userDetails = await  userModel.create({name,email,password})
//     res.json(userDetails)
// })