import { RequestHandler } from "express";
import { UserServices } from "./user.service";

const createStudent: RequestHandler = async (req, res, next) => {
  try {
    const result = await UserServices.createStudent(req.body);
    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createStudent,
};
