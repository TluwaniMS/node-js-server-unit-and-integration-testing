const express = require("express");
const router = express.Router();
const {
  getAllSchools,
  getSchoolById,
  updateSchoolInformationById,
  deleteSchoolById,
  createSchool
} = require("../database-queries/SchoolDBQueries");

router.post("/create-school", async (req, res) => {
  const { name, district, level } = req.body;
  const schoolCreationResult = await createSchool({ name: name, district: district, level: level });

  res.status(200).send({ data: schoolCreationResult });
});

router.get("/get-all-schools", async (req, res) => {
  const schools = await getAllSchools();

  res.status(200).send({ data: schools });
});

router.get("/get-school-by-id/:schoolId", async (req, res) => {
  const { schoolId } = req.params;

  const school = await getSchoolById(schoolId);

  res.status(200).send({ data: school });
});

router.put("/update-school-information-by-id/:schoolId", async (req, res) => {
  const { schoolId } = req.params;
  const { name, district, level } = req.body;

  const schoolUpdateResult = updateSchoolInformationById({
    schoolId: schoolId,
    name: name,
    district: district,
    level: level
  });

  res.status(200).send({ data: schoolUpdateResult });
});

router.delete("/delete-school-by-id/:schoolId", async (req, res) => {
  const { schoolId } = req.params;

  const deleteSchoolResult = deleteSchoolById(schoolId);

  res.status(200).send({ data: deleteSchoolResult });
});

module.exports = router;
