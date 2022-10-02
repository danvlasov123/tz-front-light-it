const ProductModel = require("../models/product-model");
const ApiError = require("../exceptions/api-error");

class ProductService {
  async getAllProduct() {
    const products = await ProductModel.find();
    return products;
  }
}
module.exports = new ProductService();
