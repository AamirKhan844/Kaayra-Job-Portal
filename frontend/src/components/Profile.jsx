import React, { useState } from "react";
import { User, Pencil } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);

  const [formData, setFormData] = useState({
    email: "aamir.khan152472@gmail.com",
    name: "Smart Dragon",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    role: "",
    resume: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleResumeUpload = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen py-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white text-center py-10 relative">
            <div className="flex justify-center mb-4">
              <div className="bg-white text-gray-800 rounded-full p-5">
                <User size={40} />
              </div>
            </div>

            <h1 className="text-2xl font-semibold">Profile</h1>
            <p className="text-sm text-gray-200">
              Manage your personal information
            </p>

            {/* Edit Button */}
            <button
              onClick={() => setEditMode(!editMode)}
              className="absolute top-4 right-4 bg-white text-gray-800 px-3 py-1 rounded-md flex items-center gap-1"
            >
              <Pencil size={16} />
              {editMode ? "Cancel" : "Edit"}
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 grid grid-cols-2 gap-6">
            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!editMode}
                className="w-full mt-1 border rounded-lg p-2 bg-gray-100"
              />
            </div>

            {/* Full Name */}
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={!editMode}
                className="w-full mt-1 border rounded-lg p-2"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium">Phone</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!editMode}
                className="w-full mt-1 border rounded-lg p-2"
              />
            </div>

            {/* Location */}
            <div>
              <label className="text-sm font-medium">Location</label>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                disabled={!editMode}
                className="w-full mt-1 border rounded-lg p-2"
              />
            </div>

            {/* LinkedIn */}
            <div className="col-span-2">
              <label className="text-sm font-medium">LinkedIn</label>
              <input
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                disabled={!editMode}
                className="w-full mt-1 border rounded-lg p-2"
              />
            </div>

            {/* GitHub */}
            <div className="col-span-2">
              <label className="text-sm font-medium">GitHub</label>
              <input
                name="github"
                value={formData.github}
                onChange={handleChange}
                disabled={!editMode}
                className="w-full mt-1 border rounded-lg p-2"
              />
            </div>

            {/* Role */}

            {/* Resume Upload */}
            <div className="col-span-2">
              <label className="text-sm font-medium">Upload Resume</label>

              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleResumeUpload}
                disabled={!editMode}
                className="w-full mt-1 border rounded-lg p-2"
              />
            </div>

            {/* Save Button */}
            {editMode && (
              <div className="col-span-2">
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900"
                >
                  Save Changes
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
