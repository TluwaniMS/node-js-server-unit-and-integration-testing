const express = require("express");
const router = express.Router();
const { errorHandler } = require("../middleware/errorHandler");
const {
  getAllSchools,
  getSchoolById,
  updateSchoolInformationById,
  deleteSchoolById,
  createSchool
} = require("../database-queries/SchoolDBQueries");
const { returnRequiredSchoolFields, addTotalStudentsFieldToSchoolObject } = require("../services/school-services");
const { getArraySize } = require("../services/shared-services");

router.post(
  "/create-school",
  errorHandler(async (req, res) => {
    const { name, district, level } = req.body;
    const schoolCreationResult = await createSchool({ name: name, district: district, level: level });

    res.status(200).send({ data: schoolCreationResult });
  })
);

router.get(
  "/get-all-schools",
  errorHandler(async (req, res) => {
    const schools = await getAllSchools();

    res.status(200).send({ data: schools });
  })
);

router.get(
  "/get-school-by-id/:schoolId",
  errorHandler(async (req, res) => {
    const { schoolId } = req.params;

    const school = await getSchoolById(schoolId);

    res.status(200).send({ data: school });
  })
);

router.get(
  "/get-detailed-school-information-by-id/:schoolId",
  errorHandler(async (req, res) => {
    const { schoolId } = req.params;

    const school = await getSchoolById(schoolId);

    const totalStudentsInSchool = getArraySize(school.students);

    const requiredSchoolFields = returnRequiredSchoolFields(school);

    const formattedSchoolInformation = addTotalStudentsFieldToSchoolObject(requiredSchoolFields, totalStudentsInSchool);

    res.status(200).send({ data: formattedSchoolInformation });
  })
);

router.put(
  "/update-school-information-by-id/:schoolId",
  errorHandler(async (req, res) => {
    const { schoolId } = req.params;
    const { name, district, level } = req.body;

    const schoolUpdateResult = updateSchoolInformationById({
      schoolId: schoolId,
      name: name,
      district: district,
      level: level
    });

    res.status(200).send({ data: schoolUpdateResult });
  })
);

router.delete(
  "/delete-school-by-id/:schoolId",
  errorHandler(async (req, res) => {
    const { schoolId } = req.params;

    const deleteSchoolResult = deleteSchoolById(schoolId);

    res.status(200).send({ data: deleteSchoolResult });
  })
);

module.exports = router;
