import { date, z } from "zod";
import { BloodGroup, Gender } from "./student.constant";

const nameValidationSchema = z.object({
  firstName: z
    .string({ invalid_type_error: "First name must be a string" })
    .refine(
      (val) => /^[A-Z]/.test(val),
      "First name must start with a capital letter"
    ),
  middleName: z
    .string({ invalid_type_error: "Middle name must be a string" })
    .optional(),
  lastName: z.string({ invalid_type_error: "Last name must be a string" }),
});

const guardianValidationSchema = z.object({
  fatherName: z.string({ invalid_type_error: "Father name must be a string" }),
  fatherOccupation: z.string({
    invalid_type_error: "Father occupation must be a string",
  }),
  fatherContactNo: z.string({
    invalid_type_error: "Father contact number must be a string",
  }),
  motherName: z.string({ invalid_type_error: "Mother name must be a string" }),
  motherOccupation: z.string({
    invalid_type_error: "Mother occupation must be a string",
  }),
  motherContactNo: z.string({
    invalid_type_error: "Mother contact number must be a string",
  }),
});

const localGuardianValidationSchema = z.object({
  name: z.string({ invalid_type_error: "Name must be a string" }),
  occupation: z.string({ invalid_type_error: "Occupation must be a string" }),
  contactNo: z.string({
    invalid_type_error: "Contact number must be a string",
  }),
  address: z.string({ invalid_type_error: "Address must be a string" }),
});

const StudentValidationSchema = z.object({
  name: nameValidationSchema,
  email: z.string().email(),
  contactNumber: z.string(),
  emergencyContactNumber: z.string(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  gender: z.enum([...Gender] as [string, ...string[]]),
  bloodGroup: z.enum([...BloodGroup] as [string, ...string[]]),
  dateOfBirth: z.string().optional(),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().optional(),
  isDeleted: z.boolean().optional(),
});

const UpdateStudentValidationSchema = StudentValidationSchema.partial();

export const StudentValidation = {
  StudentValidationSchema,
  UpdateStudentValidationSchema,
};
