const User = require("../models/user.models");
const jwt = require('jsonwebtoken');
const secret_key = "Esta es mi llave secreta"; 
const jwt_decode = require('jwt-decode');

const bcrypt = require('bcrypt');

module.exports.register = (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(user =>{
            res.json(user);
            

            const payload = {
                _id: user._id
            }

            //Creamos nuestro token
            const myJWT = jwt.sign(payload, secret_key);

            res.cookie("usertoken", myJWT, secret_key,{
                    httpOnly: true 
                }).json(user);


        })
        .catch(err => res.status(400).json(err));
}

module.exports.login = (req, res) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if(user === null) {
                res.json({error: true, message: "El correo electrónico es incorrecto."});
            } else {
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordValid => {
                        if(passwordValid) {
                            const payload = {
                                _id: user._id
                            }

                            const myJWT = jwt.sign(payload, secret_key);

                            res
                                .cookie("usertoken", myJWT, secret_key, {
                                    httpOnly: true
                                })
                                .json({error: false, message: "Inicio de sesión correcto"})

                        } else {
                            res.json({error: true, message: "La contraseña es incorrecta."});
                        }
                    })
            }
        })
}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.json({message: "Salimos de sesión!"});
}

//solo los datos del usuario
module.exports.get_user = (req, res) => {
    console.log('request soy',req.cookies);
    let decoded = jwt_decode(req.cookies.usertoken);
    console.log("el decode", decoded);
    User.findOne({_id:decoded._id})
        .then(users => res.json(users))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
}  

// usuario en sesión
module.exports.get_user_in_session = (req, res) => {
    let user=res.send(req.cookies);
    console.log('request soy',req);
    User.findOne({_id:user})
        .then(user => res.json(user))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
}