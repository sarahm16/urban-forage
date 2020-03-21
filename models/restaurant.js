module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define("Restaurant", {
    // The restaurant name cannot be null, and must not already exist
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {}
    }
  });
  return Restaurant;
};
