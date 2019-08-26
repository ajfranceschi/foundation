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
        host: 'ec2-50-17-233-158.compute-1.amazonaws.com',
        user: 'xhfrriuwtqpiak',
        password: 'f517daeb6c8ee8ef9aeb94c84323d54ecf2130242183405910a6ec44f4cee3c8',
        database: 'dbql9jue2vfvqo',
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
