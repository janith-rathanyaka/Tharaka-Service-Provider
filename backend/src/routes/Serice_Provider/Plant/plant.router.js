const router = require('express-promise-router')();
const Controller = require('../../../controllers/Service_Provider/Plant/plant.controller');

router.post('/plant/:id', Controller.addPlant);

router.get('/plant', Controller.listPlant);
router.get('/plant/posts', Controller.listPosts);

module.exports = router;