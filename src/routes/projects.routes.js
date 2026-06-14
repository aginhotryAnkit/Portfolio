const router = require('express').Router();
const c = require('../modules/projects/projects.controller');
const validate = require('../middlewares/validate');
const { projectSchema, achievementSchema } = require('../validators/projects.validator');

router.get('/', c.getAllProjects);
router.post('/', validate(projectSchema), c.createProject);
router.put('/:id', validate(projectSchema), c.updateProject);
router.delete('/:id', c.deleteProject);

router.get('/achievements', c.getAllAchievements);
router.post('/achievements', validate(achievementSchema), c.createAchievement);
router.delete('/achievements/:id', c.deleteAchievement);

module.exports = router;
