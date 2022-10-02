const ApiError = require("../exceptions/api-error");
const CommentModel = require("../models/comment-shema");
class ProductController {
  async createComment(req, res, next) {
    try {
      const { rate, id_entry, username, text, created_at } = req.body;
      const comment = await CommentModel.create({
        rate,
        id_entry,
        username,
        text,
        created_at,
      });
      res.json(comment);
    } catch (e) {
      next(e);
    }
  }

  async getAllComments(req, res, next) {
    try {
      const comments = await CommentModel.find();
      return res.json(comments);
    } catch (e) {
      next(e);
    }
  }

  async getCommentByProduct(req, res, next) {
    try {
      const { id } = req.params;
      const comment = await CommentModel.find({ id_entry: id });
      return res.json(comment);
    } catch (e) {
      next(e);
    }
  }
}
module.exports = new ProductController();
