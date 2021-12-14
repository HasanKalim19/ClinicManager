const router = require('express').Router();
const controller = require('./controller')

  
router.get('/cities/findAll', controller.findAll);
router.post('/cities/create', controller.create);
router.put('/cities/update', controller.update);
router.delete('/cities/destroy', controller.destroy);


module.exports = router;  