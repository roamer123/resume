const express = require('express');
const router = express.Router();
const path = require('path')
const fs = require('fs')

router.post('/mock/peopleManagement/teamSeat.json', function (req, res, next) {
  fs.readFile(path.resolve(__dirname, '../../peopleManagement/teamSeat.json'), function(err, data) {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
      res.end()
    }
  })
})

module.exports = router

