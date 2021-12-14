const router = require('express').Router();
const controller = require('./controller')

  
router.get('/users/findAll', controller.findAll);
router.post('/users/create', controller.create);
router.put('/users/update', controller.update);
router.delete('/users/destroy', controller.destroy);


module.exports = router;  