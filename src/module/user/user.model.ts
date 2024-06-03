import { Schema, model } from "mongoose";
import { Role, Status } from "./user.constant";
import { TUser } from "./user.interface";
import { CollectionName } from "../../collectionName";

const userSchema = new Schema<TUser>(
  {
    id: { type: String, required: true },
    password: { type: String, required: true },
    needPasswordChange: { type: Boolean, default: true },
    role: { type: String, enum: Role, required: true },
    status: { type: String, enum: Status, default: "in-progress" },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const UserModel = model<TUser>(CollectionName.USER, userSchema);
export default UserModel;
