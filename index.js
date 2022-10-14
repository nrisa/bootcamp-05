const express = require('express')
const app = express()

const port = 4000

app.use((req, res, next) => {
    console.log("testing")
    next()
})

app.get('/', (req, res) => {
    res.send("hallo dunia!")
})

app.get('/about/:nomer', (req, res, next) => {
    res.send("hallo about!")
    console.log(req.params.nomer)
    // next()
})

app.use('/', (req, res) => {
    res.send('Error 404')
})

app.listen(port, () => console.log(`Server running in http://localhost:${port}/`))