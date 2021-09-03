const router = require('express-promise-router')();
const Controller = require('../../controllers/Client/client.controller');

router.post('/:id', Controller.addPost);

router.get('/getClient', Controller.listClients);
router.get('/:id', Controller.listClient);
router.get('/clientProfile/:id', Controller.profile);

router.get('/clientNotification/:id', Controller.noti);

module.exports = router;