import User from '../user.js';

function createUser(req, res){
    const { firstName, lastName, email, password, phone } = req.body;

    const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        phone
    });

    newUser.save()
        .then(user => res.status(201).json({ message: 'User created successfully', user }))
        .catch(err => res.status(500).json({ message: "User created fail! ", error: err.message }));
}


