const adminController = {
    verProducts:(req,res) =>{
        res.render("./products/listProducts",{productos:productos})
    },
    productAdd: (req,res) =>{
        res.render("./products/productAdd")
    },
    verHome: (req, res) => 
    {
        res.render('homeAdmin')
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
    {
        titulo : "titulo6",
        descripcion : "descripcion6",
        precio: 0,
        categoria: "categoria6"
    },
    {
        titulo : "titulo7",
        descripcion : "descripcion7",
        precio: 0,
        categoria: "categoria7"
    },
    {
        titulo : "titulo8",
        descripcion : "descripcion8",
        precio: 0,
        categoria: "categoria8"
    },
]

module.exports = adminController;