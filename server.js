const path = require('path');


const express = require('express')
const app = express()
const port = process.env.PORT || 3003
console.log(process.env.PORT);

app.use(express.static('dist'));
app.use(express.static('static'));
app.use('/assets', express.static('assets'));



app.get('/', (req, res) => res.sendFile(path.join(__dirname, './static/assets/timeChooser.html'))) 

app.get('/:name', (req, res) => res.send("hello " + req.params.name))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



