// Creating our Likes model
module.exports = function(sequelize, DataTypes) {
  var Like = sequelize.define(
    "Like",
    {
      // The user cannot be null
      user: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {}
      },
      // temporarily changing restaurantId to be the restaurant name
      // The restaurantId imust be pulled from the restaurant table so must be associated
      restaurantId: {
        type: DataTypes.STRING,
        allowNull: false
      }

      // restaurantId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false
      // }
    }
    //,
    //   {
    //     classMethods: {
    //       associate: function(models) {
    //         Like.belongsTo(models.Restaurant, { foreignKey: restaurantId });
    //       }
    //     }
    //   }
  );
  return Like;
};
