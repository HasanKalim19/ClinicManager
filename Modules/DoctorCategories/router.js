const router = require('express').Router();
const controller = require('./controller')

  
router.get('/doctorCategories/findAll', controller.findAll);
router.post('/doctorCategories/create', controller.create);
router.put('/doctorCategories/update', controller.update);
router.delete('/doctorCategories/destroy', controller.destroy);


module.exports = router;  