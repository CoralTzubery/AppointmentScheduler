import { Schema, model } from "mongoose";

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        default: () => new Date().toISOString(),
    },
}, { timestamps: true });

export const PostModel = model("Post", schema);