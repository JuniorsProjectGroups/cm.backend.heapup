import { DataTypes, Model } from "sequelize";
import { sequelizeInstance } from "../../config/db.config";
import { UserStatusDTO } from "../types/UserDTO";

class User extends Model {}

User.init(
  {
    user_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      unique: true,
      defaultValue: DataTypes.UUIDV4,
    },
    firsName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.ENUM(UserStatusDTO.ADMIN, UserStatusDTO.USER),
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "User",
    timestamps: true, //Allow to add creation date and update date in  the BD
    createdAt: "create_at", //createdAt: false -> to cancel it creation
    updatedAt: "update_at", //updatedAt: false -> to cancel it creation
  }
);

export { User };
