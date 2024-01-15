import path from "path";
import fs from "fs";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "public", "projects.csv");
  console.log(filePath)
  try {
    if (fs.existsSync(filePath)) {
      const fileStream = fs.createReadStream(filePath);
      res.setHeader("Content-Type", "text/csv");
      fileStream.pipe(res);
    } else {
      res.status(404).json({ error: "File not found" })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal server error"});
  }
}