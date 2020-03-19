const {
    query
} = require('../data');

const add = async (name, author_id) => {
    await query('INSERT INTO books (name, author_id) VALUES ($1, $2)', [name, author_id]);
};

const getAll = async () => {
    return await query('SELECT * FROM books');
};

const getById = async (id) => {
    return await query('SELECT * FROM books WHERE id = $1', [id]);
};

const updateById = async (id, name, author_id) => {
    await query('UPDATE books SET name = $1, author_id = $2 WHERE id = $3', [name, author_id, id]);
};

const deleteById = async (id) => {
    await query('DELETE FROM books WHERE id = $1', [id]);
};


module.exports = {
    add,
    getAll,
    getById,
    updateById,
    deleteById
}