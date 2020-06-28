const mysql = require('../config/mysql');


module.exports = class Appointment {

  constructor(appointment = {}) {
    this.location = appointment.location;
    this.group = appointment.group;
    this.groupnum = appointment.groupnum;
    this.start = appointment.start;
    this.description = appointment.description
  };

  createAppointment(newAppointment, result) {
    mysql.query('INSERT INTO idopontok SET ?', newAppointment, (err, res) => {
      if (err)result(err, null);
      result(null, res.insertId);
    })
    return result;
  };

  readAppointmentByID(id, result) {
    mysql.query('SELECT * from idopontok where id =?', id, (err, res) => {
      if (err) result(err, null);
      result(null, res);
    })
    return result;
  };

  readAppointments(result) {
    mysql.query('SELECT * from idopontok', (err, res) => {
      if (err) result(err, null);
      result(null, res);
    })
    return result;
  };

  updateAppointment(id, appointment, result) {
    mysql.query('UPDATE idopontok SET location= ?, group= ?, groupnum= ?, start= ?, description= ? WHERE id= ?', [appointment.location, appointment.group, appointment.groupnum, appointment.start, appointment.description, id], (err, res) => {
      if (err) result(err, null);
      result(null, res);
    })
    return result;
  };

  deleteAppointment(id, result) {
    mysql.query('DELETE FROM idopontok WHERE id = ?', [id], (err, res) => {
      if (err) result(err, null);
      result(null, err);
    })
    return result;
  };
}