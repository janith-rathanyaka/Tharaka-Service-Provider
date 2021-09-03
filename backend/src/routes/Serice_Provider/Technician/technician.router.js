const router = require('express-promise-router')();
const Controller = require('../../../controllers/Service_Provider/Technician/technician.controller');

router.post('/technicianAdd/:id', Controller.addTech); //need to add id.....(cid)

router.get('/technician', Controller.listTech);
router.get('/technician/posts', Controller.listPosts);
router.get('/technician/:id', Controller.listTechID);   
router.get('/technician/rightbar/:id', Controller.right);   

router.put('/technician/:id', Controller.updateTechJob);

module.exports = router;