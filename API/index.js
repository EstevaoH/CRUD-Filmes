const express = require('express');
const con = require('./db');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(3000, () => {
    con.connect((erro) => {
        if (!erro) {
            console.log("Servidor Okay");
        } else {
            console.log('Erro: ' + erro.sqlMessage)
        }
    });
});


app.get('/filme', (req,res)=>{
    const sql = 'SELECT * FROM filme;';
    con.query(sql, (erro, resultado) =>{
        if(!erro){
            console.log(resultado)
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage);
        }
    });
});

app.get('/filme/:id', (req,res)=>{
    const id = req.params.id;
    const sql = 'SELECT * FROM filme WHERE nome LIKE "%' + req.params.id + '%"'
    con.query(sql,[id.nome], (erro, resultado) =>{
        if(!erro){
            console.log(resultado)
            res.send(resultado);
            console.log(id);
        }else{
            res.send('Erro = '+ erro.sqlMessage);
        }
    });
});

// Faz a busca pelo ID para fazer a atualização
app.get('/filme/:id', (req,res)=>{
    const id = req.params.id;
    const sql = 'SELECT * FROM filme WHERE id = ?'
    con.query(sql,[id], (erro, resultado) =>{
        if(!erro){
            console.log(resultado)
            res.send(resultado);
            console.log(id);33
        }else{
            res.send('Erro = '+ erro.sqlMessage);
        }
    });
});

app.post('/filme', (req,res)=>{
    const id = req.body;
    const sql = 'INSERT INTO filme (nome, diretor, dtLancamento, genero, censura) VALUES (?, ?, ?, ?, ?);';
    con.query(sql, [id.nome, id.diretor, id.dtLancamento, id.genero, id.censura], (erro, resultado)=>{
        if(!erro){
            console.log(resultado)
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage);
        }
    });
});

app.delete('/filme/:id', (req, res)=>{
    const id = req.params.id;
    const sql = 'DELETE  FROM filme WHERE id = ?;';
    con.query(sql, [id], (erro, resultado)=>{
        if(!erro){
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage)
        }
    });
});

app.put('/filme', (req, res)=>{
    const id = req.body;
    const sql = 'UPDATE filme SET nome = ?, diretor = ?, dtLancamento = ?, genero = ?, censura = ? WHERE id = ?;';
    con.query(sql, [id.nome, id.diretor, id.dtLancamento, id.genero, id.censura, id.id], (erro, resultado)=>{
        if(!erro){
            console.log(resultado)
            res.send(resultado);
        }else{
            res.send('Erro = '+ erro.sqlMessage);
        }
    });
});