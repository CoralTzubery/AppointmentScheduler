import express from "express";
import Appointement  from "../models/posts.model";
import Appointment from "../models/posts.model";

const router = express.Router();

router.post("/appointments", async (req, res) => {
    try {
        const newAppointment = new Appointement(req.body);
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(400).json( {message: "Error creating an appointment", error });
    }
});

router.get("/appointments", async (req, res) => {
    try {
        const appointments = await Appointement.find();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: "Error fatching the appointments", error });
    }
});

router.put("/appointments/:id", async (req, res) => {
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true} );
        res.status(200).json(updatedAppointment);
    } catch (error) {
        res.status(400).json( {message: "Error updating the appointment", error });
    }
});

router.delete("/appointments/:id", async (req, res) => {
    try {
        const deletedAppointment = await Appointement.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedAppointment);
    } catch (error) {
        res.status(400).json({ message: "Error deleting the appointments", error });
    }
});

export default router;