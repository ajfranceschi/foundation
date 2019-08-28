

const handleRegister = (req, res, database, bcrypt) => {

    const {name, email, password} = req.body;
    // hash password
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

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
        res.status(500).json(errorObject);
    } else {
        res.json({name, email, password, hash});
    }
};

module.exports = {
    handleRegister: handleRegister
};
