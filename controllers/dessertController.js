// importiamo l'array di data
const data = require("../data/posts")

// funzione index
function index(req, res) {

    // res.send("Lista dei desserts")
    res.json(data)

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

    // res.send("Dettagli dei desserts" + req.params.id)

    // recupero l'id e lo trasformo in un numero intero
    const id = parseInt(req.params.id)

    // cerco dessert tramite id
    const dessert = data.find(dessert => dessert.id === id);

    // restituiamo sotto forma json
    res.json(dessert)

}

// delete
function destroy(req, res) {

    // res.send("Eliminazione del dessert" + req.params.id)

    // recupero l'id e lo trasformo in un numero intero
    const id = parseInt(req.params.id)

    // cerco dessert tramite id
    const dessert = data.find(dessert => dessert.id === id);

    // cancello il dessert trovato
    data.splice(data.indexOf(dessert), 1);

    // verifichiamo che il dessert sia stato cancellato
    console.log(data);
    
    res.status(204);

}


module.exports = {index, show, destroy};