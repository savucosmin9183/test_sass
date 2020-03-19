const express = require('express');

const PublishersService = require('./services.js');
const { validateFields } = require('../utils');
const { ServerError } = require('../errors');
const { authorizeRoles } = require('../security/Roles/index');
const { authorizeAndExtractToken } = require('../security/Jwt/index');

const router = express.Router();

router.get('/', authorizeAndExtractToken, authorizeRoles('admin', 'user'), async (req, res, next) => {

    try {
        const publishers = await PublishersService.getAll();
        res.json(publishers);

    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        await console.log("eraore");
        next(err);
    }
});

router.get('/:id', authorizeAndExtractToken, authorizeRoles('admin', 'user'), async (req, res, next) => {
    const {
        id
    } = req.params;
    try {

        validateFields({
            id: {
                value: id,
                type: 'int'
            }
        });
        const publisher = await PublishersService.getById(parseInt(id));
        res.json(publisher);
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }
});


router.post('/', authorizeAndExtractToken, authorizeRoles('admin'), async (req, res, next) => {
    const {
        name
    } = req.body;

    // validare de campuri
    try {

        const fieldsToBeValidated = {
            name: {
                value: name,
                type: 'alpha'
            }
        };

        validateFields(fieldsToBeValidated);

        await PublishersService.add(name);

        res.status(201).end();
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }
});

router.put('/:id', authorizeAndExtractToken, authorizeRoles('admin'), async (req, res, next) => {
    const {
        id
    } = req.params;
    const {
        name
    } = req.body;
    try {

        const fieldsToBeValidated = {
            id: {
                value: id,
                type: 'int'
            },
            name: {
                value: name,
                type: 'alpha'
            }
        };

        validateFields(fieldsToBeValidated);

        await PublishersService.updateById(parseInt(id), name);
        res.status(204).end();
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }
});

router.delete('/:id', authorizeAndExtractToken, authorizeRoles('admin'), async (req, res, next) => {
    const {
        id
    } = req.params;

    try {

        validateFields({
            id: {
                value: id,
                type: 'int'
            }
        });
        // se poate modifica 
        await PublishersService.deleteById(parseInt(id));
        res.status(204).end();
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }
});

module.exports = router;