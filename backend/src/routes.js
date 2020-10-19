const express = require('express');
const { celebrate, Segments, Joi} = require('celebrate');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const SessionController = require('./controllers/SessionController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();


routes.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack',
        aluno: 'Patrick'
    })

});

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.get('/ongs', OngController.index);
routes.get('/ong/:id', OngController.find);
routes.post('/ongs', celebrate({
    [Segments.BODY] : Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email,
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;