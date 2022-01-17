import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

export default function rooms(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), "data", "rooms.json");
  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

  res.status(200).json({ data });
}
