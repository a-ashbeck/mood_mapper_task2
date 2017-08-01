// Sequelized response model
module.exports = function(sequelize, DataTypes) {
    var Survey = sequelize.define('Survey', {
        // Set the ID in the DB
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        list: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q2: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q3: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        q4: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    // Returns the model
    return Survey;
};
