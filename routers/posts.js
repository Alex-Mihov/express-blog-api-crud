// importiamo express e la parte di routing
const express = require('express')
const router = express.Router();

// importiamo il file dessertController
const dessertController = require("../controllers/dessertController")

// rotte CRUD
// index
router.get("/", dessertController.index);

// show
router.get("/:id", dessertController.show);

// create 
router.post("/", function(req, res){
    res.send("Creazione nuovo dessert")
});

// update
router.put("/:id", function(req, res){
    res.send("Modifica integrale del dessert" + req.params.id)
});

// delete
router.delete("/:id", dessertController.destroy);

// importo modulo router
module.exports = router;