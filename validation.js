const Joi = require('joi');

module.exports = {
    registration: Joi.object({
        type: Joi.string().required(),
        phone: Joi.string().required(),
        login: Joi.string().min(6).max(50).required(),
        password: Joi.string().min(6).required(),
        email: Joi.string().email().min(6).max(50).required(),
        name: Joi.string().max(20).required(),
        surname: Joi.string().max(20).required(),
        country: Joi.string().required(),
        city: Joi.string().required()
    }),
    login: Joi.object({
        login: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    }),
    update: Joi.object({
        login: Joi.string().min(6),
        curpassword: Joi.string().min(6).required(),
        password: Joi.string().min(6)
    }).or('login', 'password'),
    support: Joi.object({
        topic: Joi.string().allow(''),
        message: Joi.string().required()
    }),
    private: Joi.object({
        email: Joi.string().min(6).email(),
        phone: Joi.string(),
        website: Joi.string(),
        language: Joi.object({
            name: Joi.string(),
            level: Joi.string()
        }),
        wallet: Joi.string()
    }).or('email', 'phone', 'website', 'language', 'wallet'),
    profile: Joi.object({
        about: Joi.string().required()
    }),
    project: Joi.object({
        name: Joi.string().required(),
        about: Joi.string().required(),
        until: Joi.date().required(),
        category: Joi.string().max(4).required(),
        budget: Joi.string().required(),
    }),
    bid: Joi.object({
        project: Joi.object({
            name: Joi.string().required(),
            id: Joi.string().required()
        }).required(),
        text: Joi.string().required(),
        duration: Joi.string().required(),
        price: Joi.string().required()
    }),
    feedback: Joi.object({
        project: Joi.object({
            name: Joi.string().required(),
            id: Joi.string().required()
        }),
        positive: Joi.boolean().required(),
        text: Joi.string().required()
    }),
    portfolio: Joi.object({
        name: Joi.string().required(),
        about: Joi.string().required(),
        link: Joi.string(),
        category: Joi.string().required(),
        budget: Joi.number()
    }),
    folioupdate: Joi.object({
        name: Joi.string(),
        about: Joi.string(),
        link: Joi.string(),
        category: Joi.string(),
        budget: Joi.number()
    }).or('name', 'about', 'link', 'category', 'budget'),
    feed: Joi.object({
        title: Joi.string().required(),
        imageUrl: Joi.string().uri().required(),
        message: Joi.string().required()
    }),
    skill: Joi.object({
        major: Joi.number().max(9).required(),
        submajor: Joi.number().max(9).required(),
        minor: Joi.number().max(9).required(),
        unit: Joi.number().max(9).required()
    }),
    message: Joi.object({
        text: Joi.string().required(),
        project: Joi.object({
            name: Joi.string().required(),
            id: Joi.string().required()
        })
    }),
    performer: Joi.object({
        name: Joi.string().required(),
        id: Joi.string().required()
    }),
    file: Joi.binary()
}