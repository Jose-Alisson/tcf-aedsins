const express = require('express');

const app = express();

const PORT = process.env.PORT || 8082;

app.use(express.static(__dirname + '/dist/tcf-aedsins'));
app.get('/*', (req,res) => {
  res.sendFile(__dirname + '/dist/tcf-aedsins/index.html');
})

app.listen(PORT, ()=> {
  console.log('Servidor iniciado na porta ' + PORT)
})
