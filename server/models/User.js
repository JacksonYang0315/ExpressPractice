module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER(8),
        notNull: true,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING
    })
    return User
  }