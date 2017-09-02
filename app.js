const express = require('express');
const bodyParser = require('body-parser');

const app = express()
// html forms normally encode the data the same way urls do
app.use(bodyParser.urlencoded({ extended: false}));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');    
});

app.get('/hello', (req, res) => {
    res.render('hello');
});

app.post('/hello', (req, res) => {
    res.render('hello', { name:req.body.username });
});

app.get('/cards', (req, res) => {
    res.render('card', {prompt: "Who is buried in Grant't tomb?"});    
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});