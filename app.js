const express = require('express')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())

app.get('/register', (req, res) => {
    res.send({
        name: 'push.server.example.com',
        created_at: Date.now()
    })
})

app.get('/send', (req, res) => {
    res.send({
        status: 'SUCCESS'
    })
})


app.listen(port, () => {
    console.log('Server is up and running on port '+port)
})

