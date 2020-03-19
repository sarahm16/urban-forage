// Creating our Likes model
module.exports = function(sequelize, DataTypes) {
  var Likes = sequelize.define(
    "Likes",
    {
      // The user cannot be null
      user: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {}
      },
      // The restauran_id imust be pulled from the restaurant table so must be associated
      restaurant_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      classMethods: {
        associate: function(models) {
          Likes.belongsTo(models.Restaurant, { foreignKey: restaurant_id });
        }
      }
    }
  );
  return Likes;
};
