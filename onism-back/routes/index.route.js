const express = require('express');
const articleRoutes = require('./articles.route');
const appointmentRoutes = require('./appointments.route');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.use('/cikkek', articleRoutes);
router.use('/idopontok', appointmentRoutes);

module.exports = router;