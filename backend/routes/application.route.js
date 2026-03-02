import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  applyJob,
  getApplicants,
  getAppliedJobs,
  updateApplicationStatus,
} from "../controllers/application.controller.js";
const router = express.Router();

router.get("/applied-jobs", isAuthenticated, getAppliedJobs);
router.put("/status/:applicationId", isAuthenticated, updateApplicationStatus);
router.post("/:jobId", isAuthenticated, applyJob);
router.get("/applicants/:jobId", isAuthenticated, getApplicants);
export default router;
