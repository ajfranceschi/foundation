

const handleRegister = (req, res, database, bcrypt) => {
    const {name, email, password} = req.body;
    
    if (!name || !email || !password) {
        let errorObject = {};

        if (!name) {
            Object.assign(errorObject, {}, {
                nameError: '<div class="alert alert-danger" role="alert">Please verify your Name.</div>'
            });
        }

        if (!email) {
            Object.assign(errorObject, {} , {
                emailError: '<div class="alert alert-danger" role="alert">Please verify your Email.</div>'
            });
        }
        if (!password) {
            Object.assign(errorObject, {} , {
                passwordError: '<div class="alert alert-danger" role="alert">Please verify your Password.</div>'
            });
        }

        Object.assign(errorObject, {}, {isError: true})
        res.status(400).json(errorObject);
    }
    
    
    // hash password
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    database.transaction(trx => {
        trx('login')
            .insert({
                email: email,
                pwhash: hash
            })
            .returning('email')
            .then(loginEmail => {
                return trx('users')
                    .returning('*')
                    .insert({
                        name: name,
                        email: email
                    })
                    .then(user => res.json(user))
            })
            .then(trx.commit)
            .catch(trx.rollback);
    }).catch(error => res.status(400).json('Error registering user: ', error));
};

module.exports = {
    handleRegister: handleRegister
};
