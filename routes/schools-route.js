import express from "express"
import { errorHandler } from "../middleware/errorhandler.js"
import {
  getAllSchools,
  getSchoolById,
  updateSchoolInformationById,
  deleteSchoolById,
  createSchool
} from "../database-queries/SchoolDBQueries.js"
import { returnRequiredSchoolFields, addTotalStudentsFieldToSchoolObject } from "../services/school-services.js"
import { getArraySize } from "../services/shared-services.js"

export const router = express.Router();

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


