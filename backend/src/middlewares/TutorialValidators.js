const Joi = require("joi");

const tutorialSchema = Joi.object({
  title: Joi.string()
    .max(120)
    .regex(
      /^[a-zA-Z0-9áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ?;, -]+$/
    )
    .required(),
  short_description: Joi.string().min(20).max(200).required(),
  introduction_text: Joi.string().max(800).required(),
  category_id: Joi.number().integer().required(),
});

const validateTutorial = (req, res, next) => {
  const { title, category_id, short_description, introduction_text } = req.body;

  const { error } = tutorialSchema.validate(
    {
      title,
      category_id,
      short_description,
      introduction_text,
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
  validateTutorial,
};
