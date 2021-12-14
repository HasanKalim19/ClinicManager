const router = require('express').Router();
const controller = require('./controller')

  
router.get('/countries/findAll', controller.findAll);
router.post('/countries/create', controller.create);
router.put('/countries/update', controller.update);
router.delete('/countries/destroy', controller.destroy);


module.exports = router;  