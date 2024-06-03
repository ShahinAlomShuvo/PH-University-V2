import express from "express";
import { UserController } from "./user.controller";
import { StudentValidation } from "../student/student.validation";
import validateRequest from "../../middleware/validateRequest.middleware";
const router = express.Router();

router.post(
  "/create-student",
  validateRequest(StudentValidation.StudentValidationSchema),
  UserController.createStudent
);

export const UserRoutes = router;
