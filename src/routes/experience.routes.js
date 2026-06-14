const router = require('express').Router();
const c = require('../modules/experience/experience.controller');
const validate = require('../middlewares/validate');
const { experienceSchema } = require('../validators/experience.validator');

router.get('/', c.getAll);
router.post('/', validate(experienceSchema), c.create);
router.put('/:id', validate(experienceSchema), c.update);
router.delete('/:id', c.remove);

module.exports = router;
