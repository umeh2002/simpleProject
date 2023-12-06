import { Document, Schema, model } from "mongoose";

interface iAuth {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface iAuthData extends iAuth, Document {}

const userModel = new Schema<iAuthData>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      toLowerCase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<iAuthData>("users", userModel);
