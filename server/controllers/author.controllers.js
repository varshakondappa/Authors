const Author = require("../models/author.models");
// const createProduct = (req, res) => {
//   Product.create(req.body)
//     .then((newProduct) => res.json(newProduct))
//     .catch((err) => console.log(err));
// };

module.exports.addNewAuthor = (request, response) => {
  const { name, authorimg } = request.body;
  Author.create({
    name,
    authorimg,
  })
    .then((author) => response.json(author))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAllAuthors = (req, res) => {
  Author.find({})
    .then((allAuthor) => res.json(allAuthor))
    .catch((err) => res.status(400).json(err));
};
module.exports.getAuthorById = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((authorId) => res.json(authorId))
    .catch((err) => res.status(400).json(err));
};
module.exports.updateAuthorById = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updateAuthor) => res.json(updateAuthor))
    .catch((err) => res.status(400).json(err));
};
module.exports.deleteAuthorById = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((deleteAuthor) => res.json(deleteAuthor))
    .catch((err) =>
      res.status(400).json({ message: "Something went wrong", err: err })
    );
};
