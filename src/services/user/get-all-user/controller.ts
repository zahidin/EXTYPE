import { Request, Response } from "express";
import UserModel from "../../../models/user";

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await UserModel.findAll({});
    res.send(result);
  } catch (err) {
    res.status(409).send(err.errors[0].message);
  }
};

export default getAllUser;
