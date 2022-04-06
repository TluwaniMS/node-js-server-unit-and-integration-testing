const { model, Schema } = require("mongoose");

const SchoolSchema = new Schema({
  name: { type: String, required: true },
  district: { type: String, required: true },
  level: { type: String, enum: ["Primary", "Secondary"], required: true },
  students: [{ type: Schema.Types.ObjectId, ref: "Student" }]
});

const SchoolModel = model("School", SchoolSchema);

module.exports = { SchoolModel };
