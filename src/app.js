require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');

const errorHandler = require('./middlewares/errorHandler');
const pageRoutes = require('./routes/page.routes');
const profileRoutes = require('./routes/profile.routes');
const experienceRoutes = require('./routes/experience.routes');
const projectsRoutes = require('./routes/projects.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', 'public')));

// Page routes
app.use('/', pageRoutes);

// API routes
app.use('/api/profile', profileRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/projects', projectsRoutes);

app.use(errorHandler);

module.exports = app;
