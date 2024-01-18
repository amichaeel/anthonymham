import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function handler(req, res) {
  const postsDirectory = path.join(process.cwd(), 'posts');

  try {
    if (fs.existsSync(postsDirectory)) {
      const files = fs.readdirSync(postsDirectory);
      const posts = files.map(fileName => {
        const slug = fileName.replace('.mdx', '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        return { slug, data, content };
      });

      res.status(200).json(posts);
    } else {
      res.status(404).json({ error: "Posts directory not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
