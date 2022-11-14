const express = require('express')
const partidaRoute = require('./src/route/partida.route')

const app = express()
app.use(express.json())
app.use('/partida',partidaRoute)

app.get('/',(req,res) =>{
    res.send('Hello World Cup!')
})

const PORT = 8087

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
})