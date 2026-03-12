import mongoose from "mongoose";
import Company from "../models/company.model.js";
import Job from "../models/job.model.js";

const createJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      vacancies,
      companyId,
    } = req.body;
    console.log(
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      vacancies,
      companyId,
    );
    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !vacancies ||
      !companyId
    ) {
      return res.status(400).json({
        message: "These fields are mandatory",
        success: false,
      });
    } // role checking
    if (req.user.role !== "recruiter") {
      return res.status(403).json({
        message: "You are not authorired to do this!",
        success: false,
      });
    }
    if (!mongoose.Types.ObjectId.isValid(companyId)) {
      return res.status(400).json({
        message: "Invalid company Id",
        success: false,
      });
    }
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }
    if (company.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "You are not authorised to post job for this company",
        success: false,
      });
    }
    const job = await Job.create({
      title,
      description,
      requirements: Array.isArray(requirements)
        ? requirements
        : requirements.split(",").map((r) => r.trim()),
      salary,
      location,
      jobType,
      vacancies,
      createdBy: req.user._id,
      company: companyId,
    });
    return res.status(201).json({
      message: "Job posted successfully",
      success: true,
      data: job,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        {
          description: { $regex: keyword, $options: "i" },
        },
      ],
    };
    const jobs = await Job.find(query).populate("company");
    if (jobs.length === 0) {
      return res.status(200).json({
        message: "No Jobs Available",
        success: false,
      });
    }
    console.log(jobs);
    return res.status(200).json({
      message: "Avaailable jobs are",
      jobs,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server error",
      success: false,
    });
  }
};

const getJobById = async (req, res) => {
  try {
    const { jobId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return res.status(400).json({
        message: "Invalid job Id",
        success: false,
      });
    }
    const job = await Job.findById(jobId).populate("company applications");
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Job found successfully",
      job,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

const getAdminJobs = async (req, res) => {
  try {
    const adminJobs = await Job.find({ createdBy: req.user._id }).populate(
      "company",
      "name location website logo",
    );
    if (adminJobs.length === 0) {
      return res.status(200).json({
        message: "No jobs found",
        success: true,
      });
    }
    return res.status(200).json({
      message: "Jobs created by you are",
      success: true,
      data: adminJobs,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
// const appliedJobs = async (req, res) => {
//   try {
//     const userId = req.user._id;
//     const jobs=await Job.find({

//     })
//   } catch (error) {}
// };

export { createJob, getAdminJobs, getAllJobs, getJobById };
