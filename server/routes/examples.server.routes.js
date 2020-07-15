const controllers = require('../controllers/examples.server.controller.js'),
  express = require('express'),
  router = express.Router();

router.route('/').post(controllers.SendProfitableMovieList);

module.exports = router;
