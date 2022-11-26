import Joi from "joi";
import { NextApiRequest, NextApiResponse } from "next";
import data from "../../services/data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ data });
}
