//Creating our Likes model
module.exports = function(sequelize, DataTypes) {
  var Like = sequelize.define(
    "Like",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
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
      },
      url: {
        type: DataTypes.STRING
      },
      imageURL: {
        type: DataTypes.STRING
      },
      latitude: {
        type: DataTypes.FLOAT
      },
      longitude: {
        type: DataTypes.FLOAT
      },
      date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }

      // restaurantId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false
      // }
    },
    {
      timestamps: false
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
