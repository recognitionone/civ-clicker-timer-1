const express = require('express')
const app = express()
const port = 3000

// app.use(express.static('dist'));

// app.get('/', (req, res) => res.send("hello everyone"))

// app.get('/',function(req,res){ res.render('dist/bundle.js')});

require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

