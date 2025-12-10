import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostDetail(id: string) {
  const fileContents = fs.readFileSync(`${postsDirectory}/${id}.md`, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id,
    content: matterResult.content,
    data: { ...matterResult.data },
  };
}
