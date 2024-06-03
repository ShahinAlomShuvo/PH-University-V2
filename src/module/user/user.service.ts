const createStudent = async (studentData: any) => {
  const student = await StudentModel.create(studentData);
  return student;
};
