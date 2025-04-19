const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;

app.use(cors());

const blogPosts = {
    "first-blog-post": {
        slug: "first-blog-post",
        title: "First Blog Post",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    "second-blog-post": {
        slug: "second-blog-post",
        title: "Second Blog Post",
        description: "Hello from the backend API!"
    }
};

app.get("/api/posts", (req, res) => {
    const summary = Object.values(blogPosts).map(({ slug, title }) => ({
        slug,
        title
    }));
    res.json(summary);
});

app.get("/api/posts/:slug", (req, res) => {
    const post = blogPosts[req.params.slug];
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
