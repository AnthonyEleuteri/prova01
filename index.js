//console.log("Ecco il mio primo javascript!");

//var sonoUnInt = 10;

//console.log("Ecco il mio int:",sonoUnInt="ciao");

//console.log("Ecco il mio vero int:", sonoUnInt=10);

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send('Hello Wooooooorld2!')
})

app.listen(port,() => {
    console.log('Example app listening at http://localhost:${port}')
})