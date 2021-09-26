const bcrypt = require('bcryptjs');

const users = [
    {
        name: "admin",
        email: "admin@admin.com",
        password: bcrypt.hashSync('12345', 10),
        isAdmin: true
    },
    {
        name: "developer",
        email: "developer@developer.com",
        password: bcrypt.hashSync('54321', 10),
    },
    {
        name: "coder",
        email: "coder@coder.com",
        password: bcrypt.hashSync('11111', 10),
    },
];

module.exports = users;