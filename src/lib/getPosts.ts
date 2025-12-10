import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts"); // root/posts

export const getPostsData = ({ limit = 0 }) => {
  const fileNames = fs.readdirSync(postDirectory);
  // console.log(postDirectory); // C:\Users\gemad\WebApps\personal-blog\posts

  // console.log(fileNames); // [ 'post-0.md', 'post-1.md' ]

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(postDirectory, fileName); // C:\Users\gemad\WebApps\personal-blog\posts\post-0.md
    // console.log(fullPath);

    const fileContents = fs.readFileSync(fullPath, "utf8");
    // output:
    // berupa string dari isi file yang di baca
    // console.log(fileContents);

    const matterResult = matter(fileContents); // akan berisi object yang sudah di parse oleh gray-matter (yang awalnya string)

    return {
      id,
      ...matterResult,
    };
  });

  let slicedPostData = allPostsData;

  if (limit > 0) {
    slicedPostData = slicedPostData.slice(0, limit);
  }

  // console.log(slicedPostData);
  return slicedPostData.sort((a, b) => {
    return b.data.date - a.data.date; // descending (terbaru → terlama)
    // return a.data.date - b.data.date; // ascending (lama → terbaru)

    /* 
			misal:
			a = 2020-01-01
			b = 2021-01-01
		*/
    // Karena a < b, maka:
    /*
			→ a dipindah ke belakang
			→ hasil sort: [b, a]	
		*/
    // if (a.data.date < b.data.date) {
    //   return 1; // a pindah ke belakang → tanggal yang lebih kecil (lebih lama) (descending order)
    // } else {
    //   return -1; // a lebih besar atau sama → pindah ke depan → terbaru di depan (ascending order)
    // }
  });
};
