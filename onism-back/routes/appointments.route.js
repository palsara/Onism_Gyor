const express = require('express')
const router = express.Router();
const AppointmentController = require('../controllers/appointmentsController');
const appointmentController = new AppointmentController();


router.route('/')
  .get(appointmentController.read_appointments)
  .post(appointmentController.create_appointment);

router.route('/:id')
  .get(appointmentController.read_appointment)
  .put(appointmentController.update_appointment)
  .delete(appointmentController.delete_appointment);

module.exports=router;