const { Router } = require('express');
const {cameraController} = require('../controllers');

const router = Router();

router.get('/',cameraController.getAll)
router.post('/',cameraController.create)
router.get('/:id', cameraController.getOne)
router.put('/:id', cameraController.update)
router.delete('/:id', cameraController.delete)




module.exports = router;