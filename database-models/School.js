import { model, Schema } from "mongoose"

const SchoolSchema = new Schema({
  name: { type: String, required: true },
  district: { type: String, required: true },
  level: { type: String, enum: ["Primary", "Secondary"], required: true },
  students: [{ type: Schema.Types.ObjectId, ref: "Student" }]
});

export const SchoolModel = model("School", SchoolSchema);
