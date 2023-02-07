const Joi = require("joi");

const userSchema = Joi.object({
  id: Joi.number().integer(),
  firstname: Joi.string().max(255).required(),
  lastname: Joi.string().max(255).required(),
  email: Joi.string()
    .regex(/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/)
    .max(320)
    .required(),
  password: Joi.string()
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .message({
      "string.pattern.base": `Votre mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial`,
    })
    .required(),
  phone: Joi.string()
    .regex(/^[0-9]{10}$/)
    .messages({
      "string.pattern.base": `Votre numéro de téléphone doit avoir 10 caractères`,
    })
    .required(),
});

const validateUser = (req, res, next) => {
  const { id, email, password, firstname, lastname, phone } = req.body;

  const { error } = userSchema.validate(
    { id, email, password, firstname, lastname, phone },
    { abortEarly: false }
  );
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

const avatarSchema = Joi.object({
  profilePicture: Joi.string()
    .regex(/\.(?:jpg|gif|png|jpeg)/)
    .message(`Votre fichier doit être de type .jpg, .gif, .png ou .jpeg`),
});

const validateAvatar = (req, res, next) => {
  const { profilePicture } = req.body;

  const { error } = avatarSchema.validate({ profilePicture });
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

const updateUserSchema = Joi.object({
  firstname: Joi.string()
    .regex(
      /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+$/
    )
    .required(),
  lastname: Joi.string()
    .regex(
      /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+$/
    )
    .required(),
  phone: Joi.string()
    .regex(/^((\+)33|0)[1-9](\d{2}){4}$/)
    .required(),
});

const validateUpdateUser = (req, res, next) => {
  const { firstname, lastname, phone } = req.body;

  const { error } = updateUserSchema.validate(
    { firstname, lastname, phone },
    { abortEarly: false }
  );
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

const userLoginSchema = Joi.object({
  email: Joi.string()
    .regex(/^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/)
    .max(320)
    .required(),
  password: Joi.string()
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .message({
      "string.pattern.base": `Votre mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial`,
    }),
});

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  const { error } = userLoginSchema.validate(
    {
      email,
      password,
    },
    { abortEarly: false }
  );
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = {
  validateUser,
  validateAvatar,
  validateUpdateUser,
  validateLogin,
};
