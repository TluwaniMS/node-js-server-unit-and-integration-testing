import { SchoolModel } from "../database-models/School"
import { Schools } from "../sample-data/schools-sample-data"

export const createSchoolsSampleData = async () => {
  await SchoolModel.insertMany(Schools);

  console.log(`The schools migration script has run successfuly.`);
};

