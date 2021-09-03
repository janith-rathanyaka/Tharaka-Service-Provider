const router = require('express-promise-router')();
const Controller = require('../../../controllers/Service_Provider/Food/food.controller');

router.post('/food/:id', Controller.addFood); 

router.get('/food', Controller.listFood);
router.get('/food/posts', Controller.listPosts);

module.exports = router;