import { RequestHandler } from "express";

const createStudent: RequestHandler = async (req, res) => {
  try {
    const result = await UserService.createStudent(req.body);
    res.status(201).json(result);
  } catch (error) {}
};
