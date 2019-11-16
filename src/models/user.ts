import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class User extends Model {
  public id!: number;
  public first_name!: string;
  public last_name!: string;
  public email!: string;
  public password!: string;
  public phone_number!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: new DataTypes.STRING(100),
      allowNull: false
    },
    last_name: {
      type: new DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: new DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: new DataTypes.STRING(100),
      allowNull: false
    },
    phone_number: {
      type: new DataTypes.STRING(13),
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: "Users"
  }
);
export default User;
