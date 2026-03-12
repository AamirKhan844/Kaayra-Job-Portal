import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  getCompanies,
  getCompanyById,
  updateCompany,
  registerCompany,
  deleteCompany,
} from "../controllers/company.controller.js";
import upload from "../middlewares/multer.js";
const router = express.Router();

router.post("/", isAuthenticated, upload.single("logo"), registerCompany);
router.get("/:companyId", getCompanyById);
router.get("/", isAuthenticated, getCompanies);
router.put("/:companyId", isAuthenticated, updateCompany);
router.delete("/:companyId", isAuthenticated, deleteCompany);

export default router;
