const {
    query
} = require('../data');

const add = async (name) => {
    await query('INSERT INTO publishers (name) VALUES ($1)', [name]);
};

const getAll = async () => {
    return await query('SELECT * FROM publishers');
};

const getById = async (id) => {
    return await query('SELECT * FROM publishers WHERE id = $1', [id]);
};

const updateById = async (id, name) => {
    await query('UPDATE publishers SET name = $1 WHERE id = $2', [name, id]);
};

const deleteById = async (id) => {
    await query('DELETE FROM publishers WHERE id = $1', [id]);
};


module.exports = {
    add,
    getAll,
    getById,
    updateById,
    deleteById
}