import { Request, Response } from "express";
import UserModel from "../../../models/user";
import { hash } from "../../../utils/encrypt-password";

const addUser = async (req: Request, res: Response) => {
  try {
    req.body.password = await hash(req.body.password);
    const result = await UserModel.create(req.body);
    res.send(result);
  } catch (err) {
    res.status(409).send(err.errors[0].message);
  }
};

export default addUser;
