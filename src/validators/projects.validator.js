const Joi = require('joi');

const projectSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional().allow(''),
  tech_stack: Joi.array().items(Joi.string()).default([]),
  github_url: Joi.string().optional().allow(''),
  live_url: Joi.string().optional().allow(''),
  image: Joi.string().optional().allow(''),
  is_featured: Joi.boolean().default(false),
});

const achievementSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().optional().allow(''),
});

module.exports = { projectSchema, achievementSchema };
