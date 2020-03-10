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
app.get('/moods/:role', moodControllers.getRoleMoods);
app.get('/moods/messages', moodControllers.getMessages);
app.post('/user/login', userControllers.login);
app.get('/user/:name', userControllers.searchUser);
app.delete('/user/:userId', userControllers.userDelete);
app.delete('/moods/:moodId', moodControllers.moodDelete);
app.delete('/moods/messages/:messageId', moodControllers.messageDelete);

module.exports = app;
