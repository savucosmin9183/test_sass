const {
    Books
} = require('../data');

const add = async (name, authorId, genres) => {
    const book = new Books({
        name,
        genres,
        author: authorId
    });
    await book.save();
};


const getAll = async () => {
    // get all books
    // populate 'author' field
    // modify output so author is made of 'author.firstName author.lastName'
    return await Books.find().populate('author', '-_id firstName lastName');
};

const getById = async (id) => {
    // get book by id
    // populate 'author' field
    // modify output so author is made of 'author.firstName author.lastName'
    return await Books.findById(id).populate('author', '-_id firstName lastName');
};

const getByAuthorId = async (id) => {
    // get book by author id
    // modify output so author is made of 'author.firstName author.lastName'
    return await Books.find({'author': id}).populate('author', '-_id firstName lastName');
};

const updateById = async (id, name, authorId, genres) => {
    // update by id
    await Books.findByIdAndUpdate(id, {name, authorId, genres});
};

const deleteById = async (id) => {
    // delete by id
    await Books.findByIdAndDelete(id);
};

module.exports = {
    add,
    getAll,
    getById,
    getByAuthorId,
    updateById,
    deleteById
}