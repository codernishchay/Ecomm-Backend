const Express = require("express"); 
const router = Express.Router(); 
const { createProduct, listall ,productUpdatebyID , searchProductByName} = require("../controllers/productController"); 
console.log("Router is fine")
router.route("/product/create").post(createProduct)
router.route("/product/listall").get(listall); 
router.route("/product/update").post(productUpdatebyID)
router.route("/search").post(searchProductByName); 
module.exports  = router; 