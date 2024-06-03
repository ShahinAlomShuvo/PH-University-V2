import StudentModel from "../student/student.model";

const createStudent = async (studentData: any) => {
  const student = await StudentModel.create(studentData);
  return student;
};

export const UserServices = {
  createStudent,
};
