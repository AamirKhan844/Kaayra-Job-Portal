import mongoose from "mongoose";
import Job from "../models/job.model.js";
import Application from "../models/application.model.js";

const applyJob = async (req, res) => {
  try {
    const userId = req.user._id;
    const { jobId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return res.status(400).json({
        message: "Invalid JobId",
        success: false,
      });
    }
    if (req.user.role !== "student") {
      return res.status(403).json({
        message: "You are not authorised to perform this action",
        success: false,
      });
    }
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    const alreadyApplied = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (alreadyApplied) {
      return res.status(400).json({
        message: "You have already applied to this job",
        success: false,
      });
    }
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });
    job.applications.push(newApplication._id);
    await job.save();
    return res.status(201).json({
      message: "Applied to the job successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      success: false,
    });
  }
};
const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.user._id;

    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        message: "Invalid userId! Kindly login again",
        success: false,
      });
    }
    const applications = await Application.find({
      applicant: userId,
    })
      .populate({
        path: "job",
        populate: {
          path: "company",
          select: "name location",
        },
      })
      .sort({ createdAt: -1 });
    if (applications.length === 0) {
      return res.status(200).json({
        message: "No Applied jobs found",
        success: true,
      });
    }
    return res.status(200).json({
      message: "Applied jobs are",
      success: true,
      data: applications,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
const getApplicants = async (req, res) => {
  try {
    const { jobId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      return res.status(400).json({
        message: "Invalid Job Id",
        success: false,
      });
    }
    if (req.user.role !== "recruiter") {
      return res.status(403).json({
        message: "You are not authorised",
        success: false,
      });
    }
    const applicants = await Application.find({ job: jobId })
      .populate({
        path: "applicant",
        select: "fullname email phoneNumber profile",
      })
      .sort({ createdAt: -1 });
    return res.status(200).json({
      message: "Applicantions fetched successfully",
      success: true,
      applicants,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

const updateApplicationStatus = async (req, res) => {
  try {
    const { applicationId } = req.params;
    console.log(applicationId);
    if (!mongoose.Types.ObjectId.isValid(applicationId)) {
      return res.status(400).json({
        message: "Invalid Application id",
        success: false,
      });
    }
    const { status } = req.body;
    if (!status) {
      return res.status(404).json({
        message: "Status is required",
        success: false,
      });
    }
    if (req.user.role !== "recruiter") {
      return res.status(403).json({
        message: "you are not authorised to perform this Action",
        success: false,
      });
    }
    const application = await Application.findById(applicationId);
    if (!application) {
      return res.status(400).json({
        message: "Application not found",
        success: false,
      });
    }
    // const job = await findById(application.job);
    // if (!job) {
    //   return res.status(404).json({
    //     message: "Job not found",
    //     success: false,
    //   });
    // }
    // if (job.createdBy.toString() !== req.user._id.toString()) {
    //   return res.status(403).json({
    //     message: "You are not allowed to update this application",
    //     success: false,
    //   });
    // }
    const allowedStatus = ["accepted", "rejected"];
    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        message: "invalid status value",
        success: false,
      });
    }
    application.status = status;
    await application.save();
    return res.status(200).json({
      message: "status updated successfully",
      success: true,
      data: application,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Intrenal server error",
      success: false,
    });
  }
};
export { applyJob, getApplicants, getAppliedJobs, updateApplicationStatus };
