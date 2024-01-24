import mongoose from "mongoose";

const applicationSchema = mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  appliedDate: {
    type: String,
  },
  position: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  salary: {
    type: Number,
  },
  interviewStage: {
    type: String,
  },
  nextInterviewDate: {
    type: String,
  },
  website: {
    type: String,
  },
});

export const Application = mongoose.model("Application", applicationSchema);
