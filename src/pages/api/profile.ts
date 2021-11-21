// write a next js api route to save a user profile in json file with fs module
import { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";

export default async function profileHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  fs.writeFileSync(
    "src/content/profile.json",
    JSON.stringify(req.body),
    "utf-8"
  );

  return res.status(200).json({ message: "Profile saved", profile: req.body });
}
