import { Request, Response } from "express";
import UserModel from "../../models/user";

const updateUser = async (req: Request, res: Response) => {
  try {
    const result = await UserModel.update(req.body, {
      where: { email: req.body.email }
    });
    res.send(result);
  } catch (err) {
    res.status(409).send(err.errors[0].message);
  }
};

export default updateUser;
