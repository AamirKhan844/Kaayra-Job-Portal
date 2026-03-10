import React, { useState } from "react";
import { User, Pencil } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/constant";
import { toast } from "sonner";
import { setLoading } from "@/store/authSlice";

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: user?.email,
    name: user?.fullname,
    phone: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills.map((skill) => skill) || "",
    github: "",
    role: "",
    resume: user?.profile?.resume,
  });

  // console.log(formData.bio);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("email", formData.email);
    data.append("fullname", formData.name);
    data.append("phoneNumber", formData.phone);
    data.append("bio", formData.bio);
    data.append("skills", JSON.stringify(formData.skills));
    if (formData.resume) {
      data.append("resume", formData.resume);
    }
    try {
      dispatch(setLoading(true));
      const res = await axios.put(`${USER_API_ENDPOINT}/profile/update`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
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
              <label className="text-sm font-medium">Bio</label>
              <input
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                disabled={!editMode}
                className="w-full mt-1 border rounded-lg p-2"
              />
            </div>

            {/* LinkedIn */}
            <div className="col-span-2">
              <label className="text-sm font-medium">Skills</label>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                disabled={!editMode}
                placeholder="HTML,CSS, JS"
                className="w-full mt-1 border rounded-lg p-2"
              />
            </div>

            {/* GitHub */}
            {/* <div className="col-span-2">
              <label className="text-sm font-medium">GitHub</label>
              <input
                name="github"
                value={formData.github}
                onChange={handleChange}
                disabled={!editMode}
                className="w-full mt-1 border rounded-lg p-2"
              />
            </div> */}

            {/* Role */}

            {/* Resume Upload */}
            <div className="col-span-2">
              <label className="text-sm font-medium">Upload Resume</label>

              <input
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleResumeUpload}
                disabled={!editMode}
                className="w-full mt-1 border rounded-lg p-2"
              />
            </div>
            <h1>{user?.profile?.resumeOriginalName}</h1>

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
