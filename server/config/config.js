const path = require('path')

module.exports = {
    port: 3000,
    db: {
        databaser: process.env.DB_NAME || 'db',
        user: process.env.DB_USER || 'mitwit',
        password: process.env.DB_PASS || 'E23456g890',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: path.resolve(__dirname, '../../db.sqlite')
        }
    }
}