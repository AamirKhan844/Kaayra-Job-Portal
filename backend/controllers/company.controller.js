import test from "node:test";
import Company from "../models/company.model.js";
import User from "../models/user.model.js";
import mongoose from "mongoose";
//registering the company//

const registerCompany = async (req, res) => {
  try {
    const { name, description, location, website } = req.body;
    console.log(name, description, location, website);
    const userId = req.user._id;
    if (!name || !description || !location || !website) {
      return res.status(400).json({
        message: "All fields are mandatory",
        success: false,
      });
    }
    const existingCompany = await Company.findOne({ name });
    if (existingCompany) {
      return res.status(400).json({
        message: "This company name already exists",
        success: false,
      });
    }

    if (req.user.role !== "recruiter") {
      return res.status(403).json({
        message: "You are not allowed to register a company",
        success: false,
      });
    }
    const company = await Company.create({
      name,
      description,
      location,
      website,
      createdBy: userId,
    });
    return res.status(201).json({
      message: "Company created successfully",
      success: true,
      data: company,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//get company by id
const getCompanyById = async (req, res) => {
  try {
    const { companyId } = req.params;
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
    return res.status(200).json({
      message: "company fetched successfully",
      success: true,
      company,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//get companiesCreatedByRecruiter
const getCompanies = async (req, res) => {
  console.log("hello");
  try {
    const userId = req.user._id;
    if (req.user.role !== "recruiter") {
      return res.status(403).json({
        message: "Access denied",
        success: false,
      });
    }
    const companies = await Company.find({ createdBy: userId }).sort({
      createdAt: -1,
    });
    console.log(companies);
    if (companies.length === 0) {
      return res.status(200).json({
        message: "No company is created by the user",
        success: false,
      });
    }
    return res.status(200).json({
      message: "Companies fetched successfully",
      success: true,
      data: companies,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//update company

const updateCompany = async (req, res) => {
  try {
    const userId = req.user._id;
    const { companyId } = req.params;
    const { description, website, location } = req.body;
    if (req.user.role !== "recruiter") {
      return res.status(403).json({
        message: "You are not allowed to perform this action",
        success: false,
      });
    }
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        message: "company not found",
        success: false,
      });
    }
    if (company.createdBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "You are no authorised to update this company",
        success: false,
      });
    }

    if (description) company.description = description;
    if (location) company.location = location;
    if (website) company.website = website;
    await company.save();
    return res.status(200).json({
      message: "Comoany updated successfully",
      success: true,
      company,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//delete company

const deleteCompany = async (req, res) => {
  console.log("hello");
  try {
    const { companyId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(companyId)) {
      return res.status(400).json({
        message: "Invalid company id",
        success: false,
      });
    }
    if (req.user.role !== "recruiter") {
      return res.status(403).json({
        message: "You are not authorised to delete this company",
        success: false,
      });
    }
    const deletedCompany = await Company.findByIdAndDelete({
      _id: companyId,
      createdBy: req.user._id,
    });
    if (!deletedCompany) {
      return res.status(404).json({
        message: "Company not found or user is not authenticated",
        success: "false",
      });
    }
    return res.status(200).json({
      message: "Company deleted successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export {
  registerCompany,
  getCompanyById,
  getCompanies,
  deleteCompany,
  updateCompany,
};
