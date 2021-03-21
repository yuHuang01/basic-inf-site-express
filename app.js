const express = require('express');
const app = express();
const fs = require('fs');
const url = require('url');

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  const html =  fs.readFileSync('./index.html', (err, data) => {
    return data;
  });
  res.send(html);
})

app.get('/about', (req, res) => {
  res.set('Content-Type', 'text/html');
  const html = fs.readFileSync('./about.html', (err, data) => {
    return data;
  });
  res.send(html);
})

app.get('/contact', (req, res) => {
  res.set('Content-Type', 'text/html');
  const html =  fs.readFileSync('./contact.html', (err, data) => {
    return data;
  });
  res.send(html);
})

app.listen(8080, () => {
  console.log('Listening on localhost 8080')
})