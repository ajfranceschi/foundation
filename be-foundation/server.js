const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const knex = require('knex');

const db = knex({
    client : 'pg',
    connection : {
        host: '127.0.0.1',
        user: '',
        password: '',
        database: 'foundation_db'
    }
});

