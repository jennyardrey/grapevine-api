const User = require('../models/user');

exports.create = (req, res) => {
  const user = new User({
    name: req.body.name,
    role: req.body.role,
  });
  if (!user.name || !user.role) {
    res.status(404).json({ error: 'Please login' });
  } else {
    user.save().then(newUser => {
      res.status(201).json(newUser);
    });
  }
};

exports.list = (req, res) => {
  User.find({}, (err, user) => {
    res.status(200).json(user);
  });
};

exports.login = (req, res) => {
  User.findOne({ name: req.body.username }, (err, user) => {
    if (!user) {
      res.status(404).json('Please create a user');
    } else {
      res.status(200).json(user);
    }
  });
};

exports.searchUser = (req, res) => {
  User.findOne({ name: req.params.name }, (err, user) => {
    console.log(user);
    if (!user) {
      res.status(200).json('Please create a user');
    } else {
      res.status(200).json(user);
    }
  });
};

exports.userDelete = (req, res) => {
  User.findByIdAndDelete({ _id: req.params.userId }, (err, data) => {
    if (!data) {
      res.status(404).json({ error: 'The user could not be found.' });
    } else {
      res.status(204).json('User was deleted');
    }
  });
};
