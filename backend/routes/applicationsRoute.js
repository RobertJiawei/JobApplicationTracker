import express from "express";
import { Application } from "../models/applicationModel.js";

const router = express.Router();

// home page route
router.get("/", async (req, res) => {
  try {
    const applications = await Application.find({});
    if (applications) {
      return res.status(200).json({
        count: applications.length,
        data: applications,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
});

// create application route
router.post("/", async (req, res) => {
  try {
    if (!req.body.company || !req.body.position) {
      return res.status(400).send({
        messgae: "Send all required fields: company, position",
      });
    }
    const newApplication = {
      company: req.body.company,
      appliedDate: req.body.appliedDate,
      position: req.body.position,
      location: req.body.location || "",
      salary: req.body.salary || "",
      interviewStage: req.body.interviewStage || "Applied",
      nextInterviewDate: req.body.nextInterviewDate || "",
      website: req.body.website || "",
    };
    const application = await Application.create(newApplication);

    return res.status(200).send(application);
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: error.message,
    });
  }
});

// search application route
router.get("/search", async (req, res) => {
  try {
    const { term } = req.query;
    const application = await Application.find({
      company: new RegExp(term, "i"),
    });
    if (application) {
      return res.status(200).json({ data: application });
    } else {
      return res.status(404).send({ messgae: "no application found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// sort applications route
router.get("/sort", async (req, res) => {
  try {
    const { sortBy } = req.query || "company";
    const sortOptions = {
      [sortBy]: -1,
    };
    const application = await Application.find({}).sort(sortOptions);
    console.log(application);
    if (application) {
      return res.status(200).json({ data: application });
    } else {
      return res.status(404);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// get a application route
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const application = await Application.findById(id);
    if (application) {
      return res.status(200).json(application);
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({
      message: error.message,
    });
  }
});

// update a application route
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.company || !req.body.position) {
      return res.status(400).send({
        messgae: "Send all required fields: company, position",
      });
    }

    const { id } = req.params;
    const result = await Application.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).send({
        message: "Application not found",
      });
    }

    return res.status(200).send({
      message: "Update application successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: error.message,
    });
  }
});

// delete a application route
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Application.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).send({
        message: "Application not found.",
      });
    }

    return res.status(200).send({
      message: "Application deleted successfully.",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      message: error.message,
    });
  }
});

export default router;
