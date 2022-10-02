const productService = require("../service/product-service");
const ApiError = require("../exceptions/api-error");
const ProductModel = require("../models/product-model");
class ProductController {
  async getProduct(req, res, next) {
    try {
      const products = await productService.getAllProduct();
      return res.json(products);
    } catch (e) {
      next(e);
    }
  }

  async getOneProduct(req, res, next) {
    try {
      const { id } = req.params;

      if (!id) {
        throw ApiError.BadRequest("Id не указан");
      }

      const product = await ProductModel.findById(id);

      if (!product) {
        return ApiError.BadRequest("Данного продукта не существует");
      }

      return res.json(product);
    } catch (e) {
      next(e);
    }
  }
}
module.exports = new ProductController();
