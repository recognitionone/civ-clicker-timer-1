const path = require('path');


const express = require('express')
const app = express()
const port = 3000

app.use(express.static('dist'));
app.use('/assets', express.static('assets'));



app.get('/root', (req, res) => res.sendFile(path.join(__dirname, './index.html'))) 
//TODOdoczytać o http get, post, delete, put

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

