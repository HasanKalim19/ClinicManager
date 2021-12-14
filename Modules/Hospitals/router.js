const router = require('express').Router();
const controller = require('./controller')

  
router.get('/hospitals/findAll', controller.findAll);
router.post('/hospitals/create', controller.create);
router.put('/hospitals/update', controller.update);
router.delete('/hospitals/destroy', controller.destroy);


module.exports = router;  