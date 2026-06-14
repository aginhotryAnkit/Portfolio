const router = require('express').Router();
const c = require('../modules/profile/profile.controller');
const validate = require('../middlewares/validate');
const v = require('../validators/profile.validator');

router.get('/', c.getProfile);
router.put('/personal', validate(v.personalSchema), c.updatePersonal);
router.put('/summary', validate(v.summarySchema), c.updateSummary);

router.post('/education', validate(v.educationSchema), c.addEducation);
router.put('/education/:id', validate(v.educationSchema), c.updateEducation);
router.delete('/education/:id', c.deleteEducation);

router.post('/skills', validate(v.skillSchema), c.addSkill);
router.put('/skills/:id', validate(v.skillSchema), c.updateSkill);
router.delete('/skills/:id', c.deleteSkill);

router.post('/competencies', validate(v.competencySchema), c.addCompetency);
router.delete('/competencies/:id', c.deleteCompetency);

router.post('/certifications', validate(v.certificationSchema), c.addCertification);
router.delete('/certifications/:id', c.deleteCertification);

router.post('/hobbies', validate(v.hobbySchema), c.addHobby);
router.delete('/hobbies/:id', c.deleteHobby);

module.exports = router;
