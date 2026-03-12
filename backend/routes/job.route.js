import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  createJob,
  getAdminJobs,
  getAllJobs,
  getJobById,
} from "../controllers/job.controller.js";
const router = express.Router();

router.post("/", isAuthenticated, createJob);
router.get("/my-jobs", isAuthenticated, getAdminJobs);
router.get("/", getAllJobs);
router.get("/:jobId", isAuthenticated, getJobById);
export default router;
