const router = require('express').Router();
const ProductContr = require('../controller/productContrll');

// get all product
router.get("/:vidio_id/product", ProductContr.getProduct);
// add product
router.post("/:vidio_id/addProduct", ProductContr.addProduct);

module.exports = router;