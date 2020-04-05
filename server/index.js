const express = require('express');
const path = require('path');
const parser = require('body-parser');

const port = 3283;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/about', express.static(path.join(__dirname, '../dist')))
app.use('/skateparks', express.static(path.join(__dirname, '../dist')))

app.listen(port, () => console.log(`connected to port ${port}!`))