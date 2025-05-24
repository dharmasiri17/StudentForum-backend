import User from "../Models/user.js";
import bcrypt from "bcrypt";

export function createUser(req, res){
    //const { firstName, lastName, email, password, phone } = req.body;

    const passwordHash = bcrypt.hashSync(req.body.password, 10);

    const newUser = new User({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        phone : req.body.phone,
        password : passwordHash
    });

    newUser.save()
        .then(user => res.status(201).json({ message: 'User created successfully', user }))
        .catch(err => res.status(500).json({ message: "User created fail! ", error: err.message }));
}

export function getUser(req, res) {
    User.find()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json({ message: "Error fetching users", error: err.message }));
}


