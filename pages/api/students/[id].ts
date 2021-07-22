import type { NextApiRequest, NextApiResponse } from "next";
import students from "../data/students.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const student = students.find((student) => student.id === id);
  if (!student) return res.status(404);
  res.status(200).json(student);
};
