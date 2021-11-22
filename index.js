const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const katakata = require('./katakata.json');

app.set('view engine', 'ejs');
app.set('json spaces', 2);
app.use(express.static('public'));
app.use(bodyParser());

function randomkata() { 
  var random = katakata[Math.floor(Math.random() * katakata.length)]
  return random;
}

app.use('/', async(req, res) => {
  if(req.method === "GET") {
    res.render('index', {})
  } else if(req.method === "POST") {
    res.render('halo', { name: req.body.name, kata: randomkata() })
  } else {
    res.sendStatus(404)
  }
})


app.listen(3000)