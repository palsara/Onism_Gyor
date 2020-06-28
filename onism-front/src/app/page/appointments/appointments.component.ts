import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent implements OnInit {
  appointments$: BehaviorSubject<any> = this.ds.appointments;

  constructor(private ds: DataService) {
    this.ds.read('idopontok');
  }

  ngOnInit(): void {}
}
