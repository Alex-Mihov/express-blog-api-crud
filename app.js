const express = require('express')
const app = express()
const port = 3000

// importo router dei dessert
const dessertsRouter = require("./routers/posts")

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


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
