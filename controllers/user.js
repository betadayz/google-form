const User = require('../models/user')

exports.userById = (req, res, next) => {
    User.findById(id).exec((err, user) => {
          if (err || !user) {
              return res.status(400).json({
                  error: "User not found"
              })
          }
          return res.status(201).json({
            user
        })
          
    });
};

exports.createUser = (req, res, next) => {
    const user = new User(req.body)
    user.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json({ data });
    });
};


exports.getAllUsers = (req, res, next) => {
    User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
          return res.status(201).json({
            users
        })
          
    });
};

exports.readUsers = (req, res) => {
    req.user = undefined;
    return res.json(req.users);
};