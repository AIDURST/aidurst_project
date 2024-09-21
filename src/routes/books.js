// Router for /profiles page
const express = require("express");
const router = express.Router();

// Get view and db from Controllers
const booksController = require("../app/controllers/BooksController");

router.use("/:_id", booksController.show);
router.use("/", booksController.index);

module.exports = router;
