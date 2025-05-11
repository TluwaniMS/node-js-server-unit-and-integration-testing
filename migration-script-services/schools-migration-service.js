import { SchoolModel } from "../database-models/School.js"
import { Schools } from "../sample-data/schools-sample-data.js"

export const createSchoolsSampleData = async () => {
  await SchoolModel.insertMany(Schools);

  console.log(`The schools migration script has run successfuly.`);
};

