const adminController = {
    verProducts:(req,res) =>{
        res.render("./products/listProducts")
    },
    createProduct: (req,res) =>{
        res.render("./products/createProducts")
    }
}

module.exports = adminController;