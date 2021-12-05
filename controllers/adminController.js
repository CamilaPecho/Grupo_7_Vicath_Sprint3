const adminController = {
    verProducts:(req,res) =>{
        res.render("./products/listProducts",{productos:productos})
    },
    createProduct: (req,res) =>{
        res.render("./products/createProduct")
    }
}

const productos = [
    {
        titulo : "titulo1",
        descripcion : "descripcion1",
        precio: 0,
        categoria: "categoria"
    },
    {
        titulo : "titulo2",
        descripcion : "descripcion2",
        precio: 0,
        categoria: "categoria2"
    },
    {
        titulo : "titulo3",
        descripcion : "descripcion3",
        precio: 0,
        categoria: "categoria3"
    },
    {
        titulo : "titulo4",
        descripcion : "descripcion4",
        precio: 0,
        categoria: "categoria4"
    },
    {
        titulo : "titulo5",
        descripcion : "descripcion5",
        precio: 0,
        categoria: "categoria5"
    },
]

module.exports = adminController;