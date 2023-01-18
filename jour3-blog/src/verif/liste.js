import Joi from "joi";

// super if 

export const contactVerif = Joi.object({
    email : Joi.string()
               .min(4)
               .max(255)
               .email({ tlds: { allow: false } })
               .required()
               .messages({
                    "string.min" : "le champ email doit contenir au minimum 4 lettres",
                    "string.email" : "le format de l'email n'est pas valide"
               }),
    message : Joi.string()
                  .min(4)
                  .max(1000)
                  .regex(/^[^<>]*$/)
                  .required()
                  .messages({
                    "string.pattern.base" : "le champ message ne peut pas contenir les caractères suivants : < >"
                  })
})


export const identifiantVerif = Joi.object({
    login :  Joi.string()
                .min(4)
                .max(200)
                .email({ tlds: { allow: false } })
                .required(),
    password  : Joi.string()
                    .min(4)
                    .max(200)
                    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!?\.\\/;,\[\]]).{4,}$/)
                    .required()
                    .messages({
                        "string.pattern.base" : "le password doit contenir au minimum une majuscule, une minuscule, un chiffre et un caractère spécial"
                    })
})

// /^[^<>]*$/ accepter tous les caractères sauf les chevrons < > 