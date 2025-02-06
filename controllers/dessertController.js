// importiamo l'array di data
const data = require("../data/posts")

// funzione index
function index(req, res) {

    res.send("Lista dei desserts")

    // //restituiamo il menu filtrato che inizialmente corrisponde all'originale
    // let dessertMenu = data;

    // // nel caso la richiesta contenesse un filtro allora filtriamo il menu
    // if(req.query.ingredient) {
    //     dessertMenu = menubar.filter( pizza => pizza.ingredients.includes(req.query.ingredient));
    // }

    // // restituiamo la variabile dessertMenu(potrebbe essere filtrato)
    // res.json(dessertMenu)
}

// show
function show(req, res) {

    res.send("Dettagli dei desserts" + req.params.id)

}

// delete
function destroy(req, res) {

    res.send("Eliminazione del dessert" + req.params.id)

}


module.exports = {index, show, destroy};