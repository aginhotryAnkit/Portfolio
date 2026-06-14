const Joi = require('joi');

const personalSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().optional(),
  email: Joi.string().email().optional(),
  linkedin: Joi.string().optional(),
  github: Joi.string().optional(),
  languages: Joi.string().optional(),
  profile_photo: Joi.string().optional(),
});

const summarySchema = Joi.object({
  content: Joi.string().required(),
});

const educationSchema = Joi.object({
  degree: Joi.string().required(),
  institution: Joi.string().required(),
  year: Joi.string().optional(),
  percentage: Joi.string().optional(),
});

const skillSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().valid('language', 'framework', 'database', 'cloud', 'tool', 'security', 'architecture').required(),
});

const competencySchema = Joi.object({
  title: Joi.string().required(),
});

const certificationSchema = Joi.object({
  title: Joi.string().required(),
  issuer: Joi.string().optional().allow(''),
  logo: Joi.string().optional().allow(''),
});

const hobbySchema = Joi.object({
  name: Joi.string().required(),
  emoji: Joi.string().optional().allow(''),
});

module.exports = { personalSchema, summarySchema, educationSchema, skillSchema, competencySchema, certificationSchema, hobbySchema };
