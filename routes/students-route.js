const express = require("express");
const router = express.Router();
const { errorHandler } = require("../middleware/errorHandler");
const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentInformationById,
  deleteStudentById
} = require("../database-queries/StudentDBQueries");
const {
  calculateTotalSportsByStudent,
  returnRequiredStudentFields,
  addTotalSportsPlayedFieldToStudentObject
} = require("../services/student-services");

router.post(
  "/create-student",
  errorHandler(async (req, res) => {
    const { name, surname, gender, grade, sports, age } = req.body;

    const studentCreationResult = createStudent({
      name: name,
      surname: surname,
      gender: gender,
      grade: grade,
      sports: sports,
      age: age
    });

    res.status(200).send({ data: studentCreationResult });
  })
);

router.get(
  "/get-all-students",
  errorHandler(async (req, res) => {
    const students = await getAllStudents();

    res.status(200).send({ data: students });
  })
);

router.get(
  "/get-student-by-id/:studentId",
  errorHandler(async (req, res) => {
    const { studentId } = req.params;

    const student = await getStudentById(studentId);

    res.status(200).send({ data: student });
  })
);

router.get(
  "/get-detailed-student-information-by-id/:studentId",
  errorHandler(async (req, res) => {
    const { studentId } = req.params;

    const student = await getStudentById(studentId);

    const totalSportsPlayedbyStudent = calculateTotalSportsByStudent(student.sports);

    const requiredStudentFields = returnRequiredStudentFields(student);

    const formattedStudentObject = addTotalSportsPlayedFieldToStudentObject(
      requiredStudentFields,
      totalSportsPlayedbyStudent
    );

    res.status(200).send({ data: formattedStudentObject });
  })
);

router.put(
  "/update-student-information-by-id/:studentId",
  errorHandler(async (req, res) => {
    const { studentId } = req.params;
    const { name, surname, gender, grade, sports, age } = req.body;

    const studentUpdateResult = await updateStudentInformationById({
      studentId: studentId,
      name: name,
      surname: surname,
      gender: gender,
      grade: grade,
      sports: sports,
      age: age
    });

    res.status(200).send({ data: studentUpdateResult });
  })
);

router.delete(
  "/delete-student-by-id/:studentId",
  errorHandler(async (req, res) => {
    const { studentId } = req.params;

    const deleteStudentResult = await deleteStudentById(studentId);

    res.status(200).send({ data: deleteStudentResult });
  })
);

module.exports = router;
