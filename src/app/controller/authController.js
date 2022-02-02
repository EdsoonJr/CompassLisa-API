/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
const bcrypt = require('bcryptjs');
const gerarToken = require('../utils/authentication');
const authService = require('../service/authService');



class AuthController{

    async authenticateUser(req,res){
        const {email , senha} = req.body;
        
        try {
            
            const authUser = await authService.findAuthenticate({email});

            if(!authUser){
                return res.status(400).send({error:'Usuário não Encontrado'});
            }

            if(!await bcrypt.compare(senha, authUser.senha)){
                return res.status(400).send({erro:'Senha Inválida'});
            }

            authUser.senha = undefined;

            res.send({
                authUser,
                token: gerarToken({ id: authUser.id })
            });    

        } catch (error) {
            return res.status(400).json({error});
        }
    }
    

}

module.exports = new AuthController();