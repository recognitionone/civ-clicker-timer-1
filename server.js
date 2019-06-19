const path = require('path');


const express = require('express')
const app = express()
const port = process.env.PORT || 3003
console.log(process.env.PORT);

app.use(express.static('dist'));
app.use(express.static('static'));
app.use('/assets', express.static('assets'));
app.use('/images', express.static('mock'));



app.get('/', (req, res) => res.sendFile(path.join(__dirname, './static/assets/timeChooser.html'))) 
app.get('/counter', (req, res) => res.sendFile(path.join(__dirname, './static/assets/counter.html'))) 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



