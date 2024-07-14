const express = require("express");
const router = express.Router();

const {
  getProducts,
  getProductById,
  addProduct,
  editProductById,
  deleteProductById,
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", addProduct);
router.put("/:id", editProductById);
router.delete("/:id", deleteProductById);

module.exports = router;