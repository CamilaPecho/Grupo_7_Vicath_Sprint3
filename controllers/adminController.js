const adminController = {
    verProducts:(req,res) =>{
        res.render("listProducts")
    },
    createProduct: (req,res) =>{
        res.render("createProducts")
    }
}

module.exports = adminController;