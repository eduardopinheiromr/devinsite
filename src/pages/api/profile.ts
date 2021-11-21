import { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";

export default async function profileHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (process.env.NODE_ENV === "production") {
    return res
      .status(200)
      .json({ message: "You only can edit in development mode." });
  }
  fs.writeFileSync(
    "src/content/profile.json",
    JSON.stringify(req.body),
    "utf-8"
  );

  return res.status(200).json({ message: "Profile saved", profile: req.body });
}
