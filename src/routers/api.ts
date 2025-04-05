import express from "express";
import { PostModel } from "../models/posts.model";
const router = express.Router();

router.get("/posts",  async (req, res) => {
    const posts = await PostModel.find().sort({ createdAt: -1 });
    res.json({posts});
});

router.post("/posts", async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json( {message: 'Title and content are required' });
    }

    try { 
        const newPost = new PostModel({ title, content });
        const saved = await newPost.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ message: 'Error saving post', error: err });
    }
});

export default router;