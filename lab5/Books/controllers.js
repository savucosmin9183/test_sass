const express = require('express');

const BooksService = require('./services.js');
const { validateFields } = require('../utils');
const { ServerError } = require('../errors');
const { authorizeRoles } = require('../security/Roles/index');
const { authorizeAndExtractToken } = require('../security/Jwt/index');

const router = express.Router();

router.get('/', authorizeAndExtractToken, authorizeRoles('admin', 'user'), async (req, res, next) => {

    try {
        const books = await BooksService.getAll();
        res.json(books);

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
        const book = await BooksService.getById(parseInt(id));
        res.json(book);
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }
});


router.post('/', authorizeAndExtractToken, authorizeRoles('admin'), async (req, res, next) => {
    const {
        name,
        author_id
    } = req.body;

    // validare de campuri
    try {

        const fieldsToBeValidated = {
            name: {
                value: name,
                type: 'alpha'
            },
            author_id: {
                value: author_id,
                type: 'int'
            }
        };

        validateFields(fieldsToBeValidated);

        await BooksService.add(name, parseInt(author_id));

        res.status(201).end();
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }
});

router.put('/:id',  authorizeAndExtractToken, authorizeRoles('admin'), async (req, res, next) => {
    const {
        id
    } = req.params;
    const {
        name,
        author_id
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
            },
            author_id: {
                value: author_id,
                type: 'int'
            }
        };

        validateFields(fieldsToBeValidated);

        await BooksService.updateById(parseInt(id), name, parseInt(author_id));
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
        await BooksService.deleteById(parseInt(id));
        res.status(204).end();
    } catch (err) {
        // daca primesc eroare, pasez eroarea mai departe la handler-ul de errori declarat ca middleware in start.js 
        next(err);
    }
});

module.exports = router;