// Import the necessary modules here
import ProductModel from "../models/product.model.js";

export default class ProductController {
  constructor() {
    this.productModel = new ProductModel();
  }
  getProducts = (req, res) => {
    //  Write your code here

    const product = this.productModel.fetchProducts();

    res.json(product);
  };
}
