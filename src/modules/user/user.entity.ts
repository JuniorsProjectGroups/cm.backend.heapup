import { Table, Column, Model, DataType, PrimaryKey, IsEmail, IsUUID, Length, IsIn } from "sequelize-typescript";
import { UserStatusDTO } from "@/dtoTypes/user.dto";
import { InferAttributes, InferCreationAttributes } from "sequelize";

@Table
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  @IsUUID(4)
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
    unique: true,
    defaultValue: DataType.UUIDV4,
  })
  userId: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @IsEmail
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Length({
    msg: "More than 8",
    min: 8,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  password: string;

  @IsIn({
    msg: "Wrong Status",
    args: [[UserStatusDTO.ADMIN, UserStatusDTO.USER]],
  })
  @Column({
    type: DataType.ENUM,
    values: [UserStatusDTO.ADMIN, UserStatusDTO.USER],
    allowNull: false,
  })
  status: UserStatusDTO;
}
