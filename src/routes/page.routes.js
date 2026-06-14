const router = require('express').Router();
const profileService = require('../modules/profile/profile.service');
const experienceService = require('../modules/experience/experience.service');
const projectsService = require('../modules/projects/projects.service');

// Homepage — renders full portfolio
router.get('/', async (req, res, next) => {
  try {
    const [profile, experience, projects, achievements] = await Promise.all([
      profileService.getProfile(),
      experienceService.getAll(),
      projectsService.getAllProjects(),
      projectsService.getAllAchievements(),
    ]);
    res.render('index', { profile, experience, projects, achievements, title: 'Ankit Agnihotry | Portfolio' });
  } catch (err) { next(err); }
});

module.exports = router;
