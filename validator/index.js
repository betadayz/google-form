exports.userValidator = (req, res, next) => {
    req.check('email', 'Email must be between 3 to 32 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({
            min: 4, 
            max: 32
        });
         next()
};