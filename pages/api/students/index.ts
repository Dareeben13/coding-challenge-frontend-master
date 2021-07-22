import type { NextApiRequest, NextApiResponse } from "next";
import students from "../data/students.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(students);
};
