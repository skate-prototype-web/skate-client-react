const express = require('express');
const path = require('path');
const parser = require('body-parser');
const dotenv = require('dotenv').config()

const port = process.env.ZEN_PORT;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../dist')));

app.use('/about', express.static(path.join(__dirname, '../dist')))
app.use('/skateparks', express.static(path.join(__dirname, '../dist')))
app.use('/merch', express.static(path.join(__dirname, '../dist')))
app.use ('/skateparks/:id', express.static(path.join(__dirname, '../dist')))

app.listen(port, () => console.log(`connected to port ${port}!`))