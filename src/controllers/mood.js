const Mood = require('../models/mood');
const Message = require('../models/message');
const User = require('../models/user');

exports.postMood = (req, res) => {
  // console.log(req.body.name);
  const mood = new Mood({
    user: req.body.user,
    moodScore: req.body.moodScore,
    role: req.body.role,
  });
  if (!mood.user) {
    res.status(404).json({ error: 'Please log in to log your mood' });
  } else {
    mood.save().then(savedMood => {
      Mood.findOne({ _id: savedMood._id })
        .populate({ path: 'user' })
        .exec((err, moodId) => {
          res.status(201).json(moodId);
        });
    });
  }
};

exports.postMessage = (req, res) => {
  const msg = new Message({
    user: req.body.user,
    message: req.body.message,
  });

  msg.save().then(savedMsg => {
    Message.findOne({ _id: savedMsg })
      .populate({ path: 'user' })
      .exec((err, msgId) => {
        res.status(201).json(msgId);
      });
  });
};

exports.getMoods = (req, res) => {
  Mood.find({}, (err, mood) => {
    res.status(200).json(mood);
  });
};

exports.getMessages = (req, res) => {
  Message.find({})
    .populate({ path: 'user' })
    .exec((err, mood) => {
      res.status(200).json(mood);
    });
};

exports.getRoleMoods = (req, res) => {
  Mood.find({ role: req.params.role }, (err, mood) => {
    res.status(200).json(mood);
  });
};

exports.moodDelete = (req, res) => {
  Mood.findByIdAndDelete({ _id: req.params.moodId }, (err, data) => {
    if (!data) {
      res.status(404).json({ error: 'The mood could not be found.' });
    } else {
      res.status(204).json('Mood was deleted');
    }
  });
};

exports.messageDelete = (req, res) => {
  Message.findByIdAndDelete({ _id: req.params.messageId }, (err, data) => {
    if (!data) {
      res.status(404).json({ error: 'The message could not be found.' });
    } else {
      res.status(204).json('Message was deleted');
    }
  });
};
