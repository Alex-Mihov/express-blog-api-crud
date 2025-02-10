// importiamo l'array di data
const data = require("../data/posts")

// funzione index
function index(req, res) {

    // res.send("Lista dei desserts")
    

    //restituiamo il menu filtrato che inizialmente corrisponde all'originale
    let dessertMenu = data;

    // nel caso la richiesta contenesse un filtro allora filtriamo il menu
    if(req.query.tag) {
        dessertMenu = data.filter( dessert => dessert.tags.includes(req.query.tag));
    }

    // // restituiamo in forma json
    res.json(dessertMenu)
}

// show
function show(req, res) {

    // res.send("Dettagli dei desserts" + req.params.id)

    // recupero l'id e lo trasformo in un numero intero
    const id = parseInt(req.params.id)

    // cerco dessert tramite id
    const dessert = data.find(dessert => dessert.id === id);

    // controlliamo se il dessert esiste 
    if (!dessert) {

        // ritorno lo status 404 perchè il dessert non esiste
        res.status(404);

        return res.json({
            error: "not found",
            message: "dessert non trovato"
        })
    }

    // restituiamo sotto forma json
    res.json(dessert)

}

// store
function store(req, res) {

    // console.log(req.body);
    // res.send("Creazione nuovo dessert");

    // creazione nuovo id 
    const nuovoId = data[data.length - 1].id +1;

    // crazione nuovo oggetto
    const nuovoDessert= {
        id: nuovoId,
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags
    }

    // aggiungo il dessert
    data.push(nuovoDessert);

    // console.log(data);
    
    // restituisco nuovo status e nuovo dessert
    res.status(201);
    res.json(nuovoDessert);

}

// update 
function update(req, res) {
    // res.send('Modifica integrale del dessert ' + req.params.id);
    // recuperiamo l'id 
    const id = parseInt(req.params.id) 
    
    // cerchiamo il dessert tramite id 
    const  dessert = data.find( dessert => dessert.id === id);
    
    // contollo se il dessert esiste 
    if (!dessert) {

        // restituisco lo status 404
        res.status(404);

        // ritorno lo status 404 perchè il dessert non esiste
        res.status(404);

        return res.json({
            error: "not found",
            message: "dessert non trovato"
        })

    }

    // modifichiamo i dati del dessert trovato
    dessert.title = req.body.title;
    dessert.content = req.body.content;
    dessert.tags = req.body.tags;

    // console.log(data);

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

    // controlliamo se il dessert esiste 
    if (!dessert) {

        // ritorno lo status 404 perchè il dessert non esiste
        res.status(404);

        return res.json({
            error: "not found",
            message: "dessert non trovato"
        })
    }
    
    res.status(204);

}


module.exports = {index, show, destroy, store, update};