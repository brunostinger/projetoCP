import { Component, OnInit, Input } from '@angular/core';
import {SubheaderService} from './subheader.service'

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.css']
})
export class SubheaderComponent implements OnInit {
  subHeaderTitle = '';

  constructor(private subheaderService: SubheaderService) {}
  ngOnInit() {
    this.subheaderService.subHeaderTitle.subscribe(title => {
      this.subHeaderTitle = title;
    });
  }
}
