import { z } from "zod";

const UserValidationSchema = z.object({
  password: z
    .string({ invalid_type_error: "Password must be a string" })
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters")
    .optional(),
  needPasswordChange: z
    .boolean({ invalid_type_error: "Must be a boolean" })
    .optional(),
  status: z
    .string({ invalid_type_error: "Status must be a string" })
    .optional(),
});

const UpdateUserValidationSchema = UserValidationSchema.partial();

export const UserValidation = {
  UserValidationSchema,
  UpdateUserValidationSchema,
};
