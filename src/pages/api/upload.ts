import nextConnect from "next-connect";
import fileUpload from "express-fileupload";

const apiRoute = nextConnect();

apiRoute.use(fileUpload());

apiRoute.post((req, res) => {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ message: "No files were uploaded." });
  }

  sampleFile = req.files.avatar;
  uploadPath = "./public/images/avatar.png";

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    res.json({ message: "File uploaded!" });
  });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
