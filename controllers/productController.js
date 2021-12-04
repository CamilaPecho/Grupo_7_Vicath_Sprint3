const productController = {
    cart: (req,res) =>{
        res.render("./products/cart");
    },
    productDetail:(req,res)=>{
        res.render("./products/productDetail")
    },
    listProduct:(req,res)=>{
        
    },
}

module.exports = productController;