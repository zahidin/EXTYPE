import { Request, Response } from "express";
import UserModel from "../../models/user";

const deleteUser = async (req: Request, res: Response) => {
  try {
    const result = await UserModel.destroy({
      where: {
        id: Number(req.body.id)
      }
    });
    res.send("success");
  } catch (err) {
    res.status(409).send(err.errors[0].message);
  }
};

export default deleteUser;
