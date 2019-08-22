const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const knex = require('knex');

const app = express();
app.use(cors());
// declare db and configure knex's connection.
const db = knex({
    client : 'pg',
    connection : {
        host: 'ec2-23-23-182-18.compute-1.amazonaws.com',
        user: 'awweymdmpvbxwp',
        password: '0f8a10fc068a58a568a7ccf7c5b5e51152140d62d5ef283f80b616d1f94ac11a',
        database: 'd4oososc631cjs',
        ssl: true
    }
});



app.use('/', (req, res) => {
   db('users').select('*').returning('*').then(data => res.json(data));
   // db('users').returning('id').insert({
   //     firstname: 'FirstName',
   //     lastname: 'LastName',
   //     email: 'email3@domain.com'
   // })
});


app.listen(3000, () => {
    console.log('Listening on port 3000.');
});
