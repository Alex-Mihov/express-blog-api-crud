const express = require('express')
const app = express()
const port = 3000

// importo router dei dessert
const dessertsRouter = require("./routers/posts");

// importo il middleware di gestione 404
const notFound = require("./middlewares/notFound")

// importo il middleware di gestione errore server
const errorsHandler = require("./middlewares/errorsHandler")

// definiamo l'uso di una cartella per i file statici
app.use(express.static('public'));

// registro il body-parser per json
app.use(express.json());


// proggetto base con rotta "/"
// app.get("/", (req, res) => {
//     res.send("Server del mio blog")

// })

// utilizzo la rotta dei desserts definendo la parte iniziale
app.use("/posts", dessertsRouter);

// utilizzo errore notFound 404
app.use(notFound)

// utilizzo errore di server
app.use(errorsHandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
