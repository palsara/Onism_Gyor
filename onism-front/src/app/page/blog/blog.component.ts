import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  articles$: BehaviorSubject<any> = this.ds.articles;

  constructor(private ds: DataService) {
    this.ds.read('cikkek');
  }

  ngOnInit(): void {}
}
