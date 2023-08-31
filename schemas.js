const Joi = require("joi");
const { number } = require("joi");

module.exports.journalSchema = Joi.object({
    journal: Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
    }).required(),
});
