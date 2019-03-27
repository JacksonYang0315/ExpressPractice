const path = require('path')

module.exports = {
    port: 3000,
    db: {
        databaser: process.env.DB_NAME || '',
        user: process.env.DB_USER || '',
        password: process.env.DB_PASS || '',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: path.resolve(__dirname, '../../practiceDb.sqlite')
        }
    }
}