const Joi = require('joi');

const experienceSchema = Joi.object({
  company: Joi.string().required(),
  role: Joi.string().required(),
  start_date: Joi.string().required(),
  end_date: Joi.string().optional().allow('', null),
  is_current: Joi.boolean().default(false),
  points: Joi.array().items(Joi.string()).default([]),
  company_logo: Joi.string().optional().allow(''),
});

module.exports = { experienceSchema };
