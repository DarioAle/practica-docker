const router = require('express').Router();

// importamos los routes
const operacionesRoute = require('./operaciones');
const homeRoute = require('./home');

// paths con su propio route
router.use('/operaciones', operacionesRoute);
router.use('/home', homeRoute);

// path con retorno directo
router.route('/').get((req, res) => {
    res.json(
        {   
            version: "0.0.1",
            paths: {
                operaciones : {
                    "/operaciones" : [
                        "/Suma",
                        "/Resta",
                        "/Divide",
                        "/Multiplica",
                        "/Free"
                    ]
                },
                autores : "/autores",
                home : "/home"
            }
        }
    );
})

router.route('/autores').get((req,res) =>{
    res.json(
        {
            autor1 : "Dario Arias",
            autor2 : "Diego Gilbert",
        }
    )
})

module.exports = router;