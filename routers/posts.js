// importiamo express e la parte di routing
const express = require('express')
const router = express.Router();

// rotte CRUD
// index
router.get("/", function(req, res){
    // res.send("Lista dei desserts")
    res.json(data)
});

// show
router.get("/:id", function(req, res){
    // res.send("Dettagli dei desserts" + req.params.id)
    res.json(data[req.params.id])
});

// create 
router.post("/", function(req, res){
    res.send("Creazione nuovo dessert")
});

// update
router.put("/:id", function(req, res){
    res.send("Modifica integrale del dessert" + req.params.id)
});

// delete
router.delete("/:id", function(req, res){
    res.send("Eliminazione del dessert" + req.params.id)
});

// importo modulo router
module.exports = router;