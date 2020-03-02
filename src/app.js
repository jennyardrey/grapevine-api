const express = require('express');
const cors = require('cors');
const userControllers = require('./controllers/user');
const moodControllers = require('./controllers/mood');

const app = express();
app.use(cors({ credentials: true, origin: true }));
app.options('*', cors());
app.use(express.json());

app.post('/user', userControllers.create);
app.get('/user', userControllers.list);
app.post('/user/mood', moodControllers.postMood);
app.post('/user/message', moodControllers.postMessage);
app.get('/moods', moodControllers.getMoods);
// app.get('/moods/:role', moodControllers.getRoleMoods);
app.get('/moods/messages', moodControllers.getMessages);

module.exports = app;
