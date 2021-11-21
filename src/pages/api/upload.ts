import fileUpload from "express-fileupload";
import nextConnect from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = nextConnect();
handler.use(fileUpload());

type Request = NextApiRequest & {
  files: any;
};

handler.post((req: Request, res: NextApiResponse) => {
  let sampleFile;
  let uploadPath;

  sampleFile = req.files.avatar;
  uploadPath = "./public/images/avatar.png";

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    res.json({ message: "File uploaded!" });
  });
});

export default handler;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
