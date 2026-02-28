import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Fullname is required!"],
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false, //user.find() pe password automatically response me  nhi aayega
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone Numbetr is required"],
      unique: true,
      mathch: [
        /^[6-9]\d{9}$/,
        "Please enter a valid 10-digit Indian phone number",
      ],
    },
    role: {
      type: String,
      required: true,
      enum: ["student", "recruiter"],
    },
    profile: {
      bio: {
        type: String,
      },
      skills: [
        {
          type: String,
        },
      ],
      resume: {
        type: String, //url to the resume
      },
      resumeOriginalName: {
        type: String,
      },

      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
      },
      profilePhoto: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);
export default User;
