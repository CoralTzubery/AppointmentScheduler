import { Schema, model } from "mongoose";

const appointmentSchema = new Schema({
    cutomerName: { type: String, required: true }, 
    appointmentDate: { type: Date, required: true },
    status: { type: String, enum: ['Scheduled', 'Completed', 'Cancelled'], defualt: 'Scheduled' },
    description: { type: String },
}, { timestamps: true });

const Appointment = model("Appointment", appointmentSchema);

export default Appointment;