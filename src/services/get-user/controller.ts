import { Request, Response } from "express";
import UserModel from "../../models/user";

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await UserModel.findOne({
      where: { email: req.params.email }
    });
    res.send(result);
  } catch (err) {
    res.status(409).send(err.errors[0].message);
  }
};

export default getUser;
