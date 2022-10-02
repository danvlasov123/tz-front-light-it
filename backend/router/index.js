const Router = require("express").Router;
const UserController = require("../controllers/user-controller");
const ProductController = require("../controllers/product-controller");
const CommentController = require("../controllers/comment-controller");

const router = new Router();

const { body } = require("express-validator");

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/refresh", UserController.refresh);
router.get("/users", UserController.getUsers);
router.get("/products", ProductController.getProduct);
router.get("/products/:id", ProductController.getOneProduct);
router.get("/comments", CommentController.getAllComments);
router.post("/create-comment", CommentController.createComment);
router.get("/comments/:id", CommentController.getCommentByProduct);

module.exports = router;
