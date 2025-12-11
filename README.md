## Project Overview

This dummy project uses the Next.js Pages Router. The post data comes from markdown files using fs to read the files, path to resolve the folder routes, gray-matter to turn the markdown into a usable object, and markdown-to-jsx to render the markdown content into JSX through the Markdown component.

## Run Locally

Clone the project

```bash
  git clone https://github.com/gemadp01/personal-blog.git
```

Go to the project directory

```bash
  cd personal-blog
```

Copy .env from .env.example

```bash
  cp .env.example .env
```

Set your .env variable

```bash
  GH_USERNAME=YOUR_GH_USERNAME
```

Install dependencies

```bash
  npm install
```

Start the client

```bash
  npm run dev
```

## Folder Structure

```
.
└── personal-blog/
    ├── posts/
    │   └── file.md
    ├── public/
    │   ├── blog-images/
    │   │   └── static file
    │   └── static file
    ├── src/
    │   ├── components/
    │   ├── lib/
    │   ├── pages/
    │   ├── styles/
    │   └── types/
    ├── .env.example
    ├── .env.production
    ├── .gitignore
    ├── package.json
    └── readme.md
```

## Here to Contribute ✨

Contributions are always welcome!

## Authors

- [@gemadp01](https://www.github.com/gemadp01)
