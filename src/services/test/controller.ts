import { Request, Response } from "express";

const test = async (req: Request, res: Response) => {
  res.send("hello world");
};

export default test;
