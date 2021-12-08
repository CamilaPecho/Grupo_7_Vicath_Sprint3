const productController = {
    cart: (req,res) =>{
        res.render("./products/cart");
    },
    productDetail:(req,res)=>{
        res.render("./products/productDetail")
    },
    verProducts:(req,res) =>{
        res.render("./products/listProducts",{productos:productos})
    },
    productAdd: (req,res) =>{
        res.render("./products/productAdd")
    },
}

const productos = [
    {   
        id:1,
        titulo : "titulo1",
        imagen:"./images/cartuchera.jpg",
        descripcion : "descripcion1",
        precio: 0,
        categoria: "categoria"
    },
    {
        id:2,
        titulo : "titulo2",
        imagen:"./images/calculadora1.png",
        descripcion : "descripcion2",
        precio: 0,
        categoria: "categoria2"
    },
    {
        id:3,
        titulo : "titulo3",
        imagen:"./images/hojas.jpg",
        descripcion : "descripcion3",
        precio: 0,
        categoria: "categoria3"
    },
    {
        id:4,
        titulo : "titulo4",
        imagen:"./images/lapicera.jpg",
        descripcion : "descripcion4",
        precio: 0,
        categoria: "categoria4"
    },
    {
        id:5,
        titulo : "titulo5",
        imagen:"./images/marcadores.jpg",
        descripcion : "descripcion5",
        precio: 0,
        categoria: "categoria5"
    },
    {
        id:6,
        titulo : "titulo6",
        imagen:"./images/marcadoresPastel.jpg",
        descripcion : "descripcion6",
        precio: 0,
        categoria: "categoria6"
    },
    {
        id:7,
        titulo : "titulo7",
        imagen:"./images/tijeras.jpg",
        descripcion : "descripcion7",
        precio: 0,
        categoria: "categoria7"
    },
    {
        id:8,
        titulo : "titulo8",
        imagen:"./images/lapicera.jpg",
        descripcion : "descripcion8",
        precio: 0,
        categoria: "categoria8"
    },
]

module.exports = productController;
