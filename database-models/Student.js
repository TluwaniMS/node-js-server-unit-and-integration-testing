const { model, Schema } = require("mongoose");

const StudentSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female"], required: true },
  grade: { type: Number, required: true },
  age: { type: Number, required: true },
  sports: [{ type: String, required: true }]
});

const StudentModel = model("Student", StudentSchema);

module.exports = { StudentModel };
