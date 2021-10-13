const AuthorController = require("../controllers/author.controllers");
module.exports = (app) => {
  app.post("/api/author", AuthorController.addNewAuthor);
  app.get("/api/author", AuthorController.getAllAuthors);
  app.get("/api/author/:id", AuthorController.getAuthorById);
  app.put("/api/author/:id", AuthorController.updateAuthorById);
  app.delete("/api/author/:id", AuthorController.deleteAuthorById);
};
