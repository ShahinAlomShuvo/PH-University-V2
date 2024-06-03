import { Schema, model } from "mongoose";
import {
  TGuardian,
  TLocalGuardian,
  TName,
  TStudent,
} from "./student.interface";
import { BloodGroup, Gender } from "./student.constant";
import { CollectionName } from "../../collectionName";

const nameSchema = new Schema<TName>(
  {
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  { _id: false }
);

const guardianSchema = new Schema<TGuardian>(
  {
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNo: { type: String, required: true },
  },
  { _id: false }
);

const localGuardianSchema = new Schema<TLocalGuardian>(
  {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
  },
  { _id: false }
);

const studentSchema = new Schema<TStudent>(
  {
    id: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, required: true },
    name: { type: nameSchema, required: true },
    email: { type: String, required: true },
    contactNumber: { type: String, required: true },
    emergencyContactNumber: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    gender: { type: String, enum: Gender, required: true },
    bloodGroup: {
      type: String,
      enum: BloodGroup,
    },
    dateOfBirth: { type: String },
    guardian: { type: guardianSchema, required: true },
    localGuardian: { type: localGuardianSchema, required: true },
    profileImg: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const StudentModel = model<TStudent>(CollectionName.STUDENT, studentSchema);

export default StudentModel;
