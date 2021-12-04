const userController = {
    login: (req,res) =>{
        res.render('./users/login')
    },
    register:(req,res)=>{
        res.render('./users/register')
    },
    verPerfil:(req,res)=>{
        res.render('./users/perfil')
    },
}

module.exports = userController;