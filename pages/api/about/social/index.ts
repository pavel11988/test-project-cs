import type { NextApiRequest, NextApiResponse } from "next";
import { socialLogos } from "../../../../assets/images/about";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ data: socialLogos });
}
