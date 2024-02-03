// IMPORT PACKAGES
const express = require('express');
const morgan = require('morgan');

// Here you should import the required packages for your Express app: `express` and `morgan`

// CREATE EXPRESS APP
const app = express();

// Here you should create your Express app:
app.use(express.static('public'));
app.use(express.json());
app.use(morgan('dev'));

const projects = require('./data/projects.json');
const articles = require('./data/articles.json');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/blog', (req, res) => {
  res.sendFile(__dirname + '/views/blog.html');
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/articles', (req, res) => {
  res.json(articles);
});

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/views/not-found.html');
});
// Make your Express server listen on port 5005:
app.listen(5005, () => console.log('running server port 5005'));
