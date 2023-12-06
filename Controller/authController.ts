import { Request, Response } from "express";
import userModel from "../Model/authModel";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ error: "Confirm password must be password" });
    }

    const user = await userModel.create({
      name,
      email,
      password: hash,
      confirmPassword: hash,
    });

    return res.status(201).json({
      message: "created successfully",
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error creating user",
      data: error.message,
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.find();

    return res.status(200).json({
      message: "success",
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
};
