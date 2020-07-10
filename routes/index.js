require('express');
const router = require('express-promise-router')();
const Controller = require('../controllers/functions');

router.route('/get_domains').post(Controller.getDomains);
router.route('/add_domain').post(Controller.addDomain);
router.route('/del_favourite').post(Controller.deleteFavourite);
router.route('/add_favourite').post(Controller.addFavourite);

module.exports = router;
