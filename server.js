const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurando a conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'SweetCycle'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados MySQL estabelecida');
});

  app.post('/login', (req, res) => {
    const { username, senha } = req.query;
  
    db.query('SELECT senha FROM usuario WHERE username = ?', [username], (error, results) => {
      if(error){
        res.status(500).send('Erro ao obter usuários')
      } else {
        if(results.length > 0){ // Verifica se há resultados
          const user = results[0]; // Obtém o primeiro resultado
          if(user.senha === senha){
             res.status(200).send(`Login bem-sucedido! Bem-vindo, ${username}.`);
          } else {
            res.status(401).send('Credenciais inválidas. Tente novamente.');
          }
        } else {
          console.log(req)
          res.status(401).send('Este usuário não existe');
        }
      }
    })
  });


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
