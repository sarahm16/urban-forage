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
      // The restaurantId imust be pulled from the restaurant table so must be associated
      restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      classMethods: {
        associate: function(models) {
          Likes.belongsTo(models.Restaurant, { foreignKey: restaurantId });
        }
      }
    }
  );
  return Likes;
};
