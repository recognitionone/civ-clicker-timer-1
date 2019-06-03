const path = require('path');


const express = require('express')
const app = express()
const port = 3000

app.use(express.static('dist'));
app.use('/assets-dog', express.static('assets'));



app.get('/test', (req, res) => res.sendFile(path.join(__dirname, './index.html'))) 
//TODOdoczytać o http get, post, delete, put

// app.get('/',function(req,res){ res.render('dist/bundle.js')});

// require('./router/main')(app);
// app.set('views',__dirname + '/views');
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

