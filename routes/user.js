const db = require('../models')
const express = require('express');
const router=express.Router();
const isAuthenticated = require("../config/isAuthenticated");


router.get('/:id', isAuthenticated, (req, res) => {
    db.User.findById(req.params.id).then(data => {
      if(data) {
        res.json(data);
      } else {
        res.status(404).send({success: false, message: 'No user found'});
      }
    }).catch(err => res.status(400).send(err));
  });
  
  // Serve up static assets (usually on heroku)
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

router.get('/api/user/:id/coins', isAuthenticated, (req, res) =>{
    if (req.user.id !== req.params.id) {
      // if you're not logged in as the person you're 
      // asking for info for, you're not allowed in
      return res.status(403).end()
    }
    else {
      res.send('getting your coins')
    }
    console.log(req.user)
    console.log(req.params)
    // prevent user from accessing other users
    // 
    res.end()
  })

  
  
  router.put('/api/user/:id/coins', isAuthenticated, (req, res) => {
    if (req.user.id !== req.params.id) {
  
      // if you're not logged in as the person you're 
      // asking for info for, you're not allowed in
      return res.status(403).end()
    }
   
    db.User.findOneAndUpdate({
      coins: req.body.coins  
    }).then(data => {
      res.json(data)
    })
  
    console.log(req.body.coins)
    console.log(req.params)
  })
  
module.exports = router