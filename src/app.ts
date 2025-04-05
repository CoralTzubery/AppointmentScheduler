import path from "path";
import express from "express";
import { json } from "body-parser";
import cookieParser from "cookie-parser";
// import { router as apiRouter } from "./routers/api";
import appointmentRouter from "./routers/api";

const app = express();

// app.use((req, _, next) => {
//     console.log(new Date(), req.method, req.url);
//     next();
// });

app.use(json());
// app.use(cookieParser(process.env.SESSION_SECRET));

app.use("/api", appointmentRouter);
// app.use(express.static(path.resolve(__dirname, "..", "public")));
// app.use((_, res) => {
//     res.redirect("404.html");
// });

app.get("/", (req, res) => {
    res.send("Appointment Scheduler API is running");
});

export default app;