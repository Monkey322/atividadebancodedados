const tarefas = require("../models/tarefas");


const getAll = (red, res) => {
    console.log(req.url);
    tarefas.find(function(err, tarefas){
        if(err) {
            res.status(500).send( {message: err.massage});
        }
        res.status(200).send(tarefas);
    })
};

const 