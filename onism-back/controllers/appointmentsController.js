const Appointment = require('../models/appointmentModel');
const appointment = new Appointment();


module.exports = class AppointmentController {

  read_appointments(req, res) {
    appointment.readAppointments((err, appointments) => {
      if (err) res.send(err);
      res.send(appointments);
    })
  };

  create_appointment(req, res) {
    const new_appointment = new Appointment(req.body);
    if (!new_appointment.location || !new_appointment.group || !new_appointment.start || !new_appointment.description) {
      res.status(400).send({
        error: true,
        message: 'Please provide all informations'
      });
    } else {
      appointment.createAppointment(new_appointment, (err, appointment) => {
        if (err) res.send(err);
        res.json(appointment);
      })
    }
  };

  read_appointment(req, res) {
    appointment.readAppointmentByID(req.params.id, (err, appointment) => {
      if (err) res.send(err);
      res.json(appointment);
    })
  };

  update_appointment(req, res) {
    appointment.updateAppointment(req.params.seo, new Appointment(req.body), (err, appointment) => {
      if (err) res.send(err);
      res.json(appointment);
    })
  }

  delete_appointment(req, res) {
    article.deleteAppointment(req.params.seo, (err, appointment) => {
      if (err) res.send(err);
      res.json(appointment);
    })
  };
}